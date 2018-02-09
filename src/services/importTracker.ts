/* Code for finding imports of an exported symbol. Used only by FindAllReferences. */
/* @internal */
namespace ts.FindAllReferences {
    export interface ImportsResult {
        /** For every import of the symbol, the location and local symbol for the import. */
        importSearches: [Identifier, Symbol][];
        /** For rename imports/exports `{ foo as bar }`, `foo` is not a local, so it may be added as a reference immediately without further searching. */
        singleReferences: Identifier[];
        /** List of source files that may (or may not) use the symbol via a namespace. (For UMD modules this is every file.) */
        indirectUsers: ReadonlyArray<SourceFile>;
    }
    export type ImportTracker = (exportSymbol: Symbol, exportInfo: ExportInfo, isForRename: boolean) => ImportsResult;

    /** Creates the imports map and returns an ImportTracker that uses it. Call this lazily to avoid calling `getDirectImportsMap` unnecessarily.  */
    export function createImportTracker(sourceFiles: ReadonlyArray<SourceFile>, checker: TypeChecker, cancellationToken: CancellationToken): ImportTracker {
        const allDirectImports = getDirectImportsMap(sourceFiles, checker, cancellationToken);
        return (exportSymbol, exportInfo, isForRename) => {
            const { directImports, indirectUsers } = getImportersForExport(sourceFiles, allDirectImports, exportInfo, checker, cancellationToken);
            return { indirectUsers, ...getSearchesFromDirectImports(directImports, exportSymbol, exportInfo.exportKind, checker, isForRename) };
        };
    }

    /** Info about an exported symbol to perform recursive search on. */
    export interface ExportInfo {
        exportingModuleSymbol: Symbol;
        exportKind: ExportKind;
    }

    export const enum ExportKind { Named, Default, ExportEquals }

    export const enum ImportExport { Import, Export }

    interface AmbientModuleDeclaration extends ModuleDeclaration { body?: ModuleBlock; }
    type SourceFileLike = SourceFile | AmbientModuleDeclaration;
    // Identifier for the case of `const x = require("y")`.
    type Importer = AnyImportSyntax | Identifier | ExportDeclaration;
    type ImporterOrCallExpression = Importer | CallExpression;

    /** Returns import statements that directly reference the exporting module, and a list of files that may access the module through a namespace. */
    function getImportersForExport(
            sourceFiles: ReadonlyArray<SourceFile>,
            allDirectImports: Map<ImporterOrCallExpression[]>,
            { exportingModuleSymbol, exportKind }: ExportInfo,
            checker: TypeChecker,
            cancellationToken: CancellationToken
            ): { directImports: Importer[], indirectUsers: ReadonlyArray<SourceFile> } {
        const markSeenDirectImport = nodeSeenTracker<ImporterOrCallExpression>();
        const markSeenIndirectUser = nodeSeenTracker<SourceFileLike>();
        const directImports: Importer[] = [];
        const isAvailableThroughGlobal = !!exportingModuleSymbol.globalExports;
        const indirectUserDeclarations: SourceFileLike[] | undefined = isAvailableThroughGlobal ? undefined : [];

        handleDirectImports(exportingModuleSymbol);

        return { directImports, indirectUsers: getIndirectUsers() };

        function getIndirectUsers(): ReadonlyArray<SourceFile> {
            if (isAvailableThroughGlobal) {
                // It has `export as namespace`, so anything could potentially use it.
                return sourceFiles;
            }

            // Module augmentations may use this module's exports without importing it.
            for (const decl of exportingModuleSymbol.declarations!) {
                if (isExternalModuleAugmentation(decl)) {
                    addIndirectUser(decl as SourceFileLike);
                }
            }

            // This may return duplicates (if there are multiple module declarations in a single source file, all importing the same thing as a namespace), but `State.markSearchedSymbol` will handle that.
            return indirectUserDeclarations!.map<SourceFile>(getSourceFileOfNode);
        }

        function handleDirectImports(exportingModuleSymbol: Symbol): void {
            const theseDirectImports = getDirectImports(exportingModuleSymbol);
            if (theseDirectImports) {
                for (const direct of theseDirectImports) {
                    if (!markSeenDirectImport(direct)) {
                        continue;
                    }

                    cancellationToken.throwIfCancellationRequested();

                    switch (direct.kind) {
                        case SyntaxKind.CallExpression:
                            if (!isAvailableThroughGlobal) {
                                const parent = direct.parent;
                                if (exportKind === ExportKind.ExportEquals && parent.kind === SyntaxKind.VariableDeclaration) {
                                    const { name } = parent as ts.VariableDeclaration;
                                    if (name.kind === SyntaxKind.Identifier) {
                                        directImports.push(name);
                                        break;
                                    }
                                }

                                // Don't support re-exporting 'require()' calls, so just add a single indirect user.
                                addIndirectUser(direct.getSourceFile());
                            }
                            break;

                        case SyntaxKind.ImportEqualsDeclaration:
                            handleNamespaceImport(direct, direct.name, hasModifier(direct, ModifierFlags.Export));
                            break;

                        case SyntaxKind.ImportDeclaration:
                            const namedBindings = direct.importClause && direct.importClause.namedBindings;
                            if (namedBindings && namedBindings.kind === SyntaxKind.NamespaceImport) {
                                handleNamespaceImport(direct, namedBindings.name);
                            }
                            else {
                                directImports.push(direct);
                            }
                            break;

                        case SyntaxKind.ExportDeclaration:
                            if (!direct.exportClause) {
                                // This is `export * from "foo"`, so imports of this module may import the export too.
                                handleDirectImports(getContainingModuleSymbol(direct, checker));
                            }
                            else {
                                // This is `export { foo } from "foo"` and creates an alias symbol, so recursive search will get handle re-exports.
                                directImports.push(direct);
                            }
                            break;
                    }
                }
            }
        }

        function handleNamespaceImport(importDeclaration: ImportEqualsDeclaration | ImportDeclaration, name: Identifier, isReExport?: boolean): void {
            if (exportKind === ExportKind.ExportEquals) {
                // This is a direct import, not import-as-namespace.
                directImports.push(importDeclaration);
            }
            else if (!isAvailableThroughGlobal) {
                const sourceFileLike = getSourceFileLikeForImportDeclaration(importDeclaration);
                Debug.assert(sourceFileLike.kind === SyntaxKind.SourceFile || sourceFileLike.kind === SyntaxKind.ModuleDeclaration);
                if (isReExport || findNamespaceReExports(sourceFileLike, name, checker)) {
                    addIndirectUsers(sourceFileLike);
                }
                else {
                    addIndirectUser(sourceFileLike);
                }
            }
        }

        function addIndirectUser(sourceFileLike: SourceFileLike): boolean {
            Debug.assert(!isAvailableThroughGlobal);
            const isNew = markSeenIndirectUser(sourceFileLike);
            if (isNew) {
                indirectUserDeclarations!.push(sourceFileLike); // TODO: GH#18217
            }
            return isNew;
        }

        /** Adds a module and all of its transitive dependencies as possible indirect users. */
        function addIndirectUsers(sourceFileLike: SourceFileLike): void {
            if (!addIndirectUser(sourceFileLike)) {
                return;
            }

            const moduleSymbol = checker.getMergedSymbol(sourceFileLike.symbol!);
            Debug.assert(!!(moduleSymbol.flags & SymbolFlags.Module));
            const directImports = getDirectImports(moduleSymbol);
            if (directImports) {
                for (const directImport of directImports) {
                    addIndirectUsers(getSourceFileLikeForImportDeclaration(directImport));
                }
            }
        }

        function getDirectImports(moduleSymbol: Symbol): ImporterOrCallExpression[] | undefined {
            return allDirectImports.get(getSymbolId(moduleSymbol).toString());
        }
    }

    /**
     * Given the set of direct imports of a module, we need to find which ones import the particular exported symbol.
     * The returned `importSearches` will result in the entire source file being searched.
     * But re-exports will be placed in 'singleReferences' since they cannot be locally referenced.
     */
    function getSearchesFromDirectImports(directImports: Importer[], exportSymbol: Symbol, exportKind: ExportKind, checker: TypeChecker, isForRename: boolean): Pick<ImportsResult, "importSearches" | "singleReferences"> {
        const importSearches: [Identifier, Symbol][] = [];
        const singleReferences: Identifier[] = [];
        function addSearch(location: Identifier, symbol: Symbol): void {
            importSearches.push([location, symbol]);
        }

        if (directImports) {
            for (const decl of directImports) {
                handleImport(decl);
            }
        }

        return { importSearches, singleReferences };

        function handleImport(decl: Importer): void {
            if (decl.kind === SyntaxKind.ImportEqualsDeclaration) {
                if (isExternalModuleImportEquals(decl)) {
                    handleNamespaceImportLike(decl.name);
                }
                return;
            }

            if (decl.kind === ts.SyntaxKind.Identifier) {
                handleNamespaceImportLike(decl);
                return;
            }

            // Ignore if there's a grammar error
            if (decl.moduleSpecifier!.kind !== SyntaxKind.StringLiteral) {
                return;
            }

            if (decl.kind === SyntaxKind.ExportDeclaration) {
                searchForNamedImport(decl.exportClause);
                return;
            }

            const { importClause } = decl;
            if (!importClause) {
                return;
            }

            const { namedBindings } = importClause;
            if (namedBindings && namedBindings.kind === SyntaxKind.NamespaceImport) {
                handleNamespaceImportLike(namedBindings.name);
                return;
            }

            if (exportKind === ExportKind.Named) {
                searchForNamedImport(namedBindings as NamedImports | undefined);
            }
            else {
                // `export =` might be imported by a default import if `--allowSyntheticDefaultImports` is on, so this handles both ExportKind.Default and ExportKind.ExportEquals
                const { name } = importClause;
                // If a default import has the same name as the default export, allow to rename it.
                // Given `import f` and `export default function f`, we will rename both, but for `import g` we will rename just that.
                if (name && (!isForRename || name.escapedText === symbolName(exportSymbol))) {
                    const defaultImportAlias = checker.getSymbolAtLocation(name)!;
                    addSearch(name, defaultImportAlias);
                }

                // 'default' might be accessed as a named import `{ default as foo }`.
                if (!isForRename && exportKind === ExportKind.Default) {
                    searchForNamedImport(namedBindings as NamedImports | undefined);
                }
            }
        }

        /**
         * `import x = require("./x") or `import * as x from "./x"`.
         * An `export =` may be imported by this syntax, so it may be a direct import.
         * If it's not a direct import, it will be in `indirectUsers`, so we don't have to do anything here.
         */
        function handleNamespaceImportLike(importName: Identifier): void {
            // Don't rename an import that already has a different name than the export.
            if (exportKind === ExportKind.ExportEquals && (!isForRename || isNameMatch(importName.escapedText))) {
                addSearch(importName, checker.getSymbolAtLocation(importName)!);
            }
        }

        function searchForNamedImport(namedBindings: NamedImportsOrExports | undefined): void {
            if (!namedBindings) {
                return;
            }

            for (const element of namedBindings.elements) {
                const { name, propertyName } = element;
                if (!isNameMatch((propertyName || name).escapedText)) {
                    continue;
                }

                if (propertyName) {
                    // This is `import { foo as bar } from "./a"` or `export { foo as bar } from "./a"`. `foo` isn't a local in the file, so just add it as a single reference.
                    singleReferences.push(propertyName);
                    if (!isForRename) { // If renaming `foo`, don't touch `bar`, just `foo`.
                        // Search locally for `bar`.
                        addSearch(name, checker.getSymbolAtLocation(name)!);
                    }
                }
                else {
                    const localSymbol = element.kind === SyntaxKind.ExportSpecifier && element.propertyName
                        ? checker.getExportSpecifierLocalTargetSymbol(element)! // For re-exporting under a different name, we want to get the re-exported symbol.
                        : checker.getSymbolAtLocation(name)!;
                    addSearch(name, localSymbol);
                }
            }
        }

        function isNameMatch(name: __String): boolean {
            // Use name of "default" even in `export =` case because we may have allowSyntheticDefaultImports
            return name === exportSymbol.escapedName || exportKind !== ExportKind.Named && name === InternalSymbolName.Default;
        }
    }

    /** Returns 'true' is the namespace 'name' is re-exported from this module, and 'false' if it is only used locally. */
    function findNamespaceReExports(sourceFileLike: SourceFileLike, name: Identifier, checker: TypeChecker): boolean {
        const namespaceImportSymbol = checker.getSymbolAtLocation(name);

        return !!forEachPossibleImportOrExportStatement(sourceFileLike, statement => {
            if (statement.kind !== SyntaxKind.ExportDeclaration) return;

            const { exportClause, moduleSpecifier } = statement as ExportDeclaration;
            if (moduleSpecifier || !exportClause) return;

            for (const element of exportClause.elements) {
                if (checker.getExportSpecifierLocalTargetSymbol(element) === namespaceImportSymbol) {
                    return true;
                }
            }
        });
    }

    export type ModuleReference =
        /** "import" also includes require() calls. */
        | { kind: "import", literal: StringLiteral }
        /** <reference path> or <reference types> */
        | { kind: "reference", referencingFile: SourceFile, ref: FileReference };
    export function findModuleReferences(program: Program, sourceFiles: ReadonlyArray<SourceFile>, searchModuleSymbol: Symbol): ModuleReference[] {
        const refs: ModuleReference[] = [];
        const checker = program.getTypeChecker();
        for (const referencingFile of sourceFiles) {
            const searchSourceFile = searchModuleSymbol.valueDeclaration!;
            if (searchSourceFile.kind === ts.SyntaxKind.SourceFile) {
                for (const ref of referencingFile.referencedFiles) {
                    if (program.getSourceFileFromReference(referencingFile, ref) === searchSourceFile) {
                        refs.push({ kind: "reference", referencingFile, ref });
                    }
                }
                for (const ref of referencingFile.typeReferenceDirectives) {
                    const referenced = program.getResolvedTypeReferenceDirectives().get(ref.fileName);
                    if (referenced !== undefined && referenced.resolvedFileName === (searchSourceFile as ts.SourceFile).fileName) {
                        refs.push({ kind: "reference", referencingFile, ref });
                    }
                }
            }

            forEachImport(referencingFile, (_importDecl, moduleSpecifier) => {
                const moduleSymbol = checker.getSymbolAtLocation(moduleSpecifier);
                if (moduleSymbol === searchModuleSymbol) {
                    refs.push({ kind: "import", literal: moduleSpecifier });
                }
            });
        }
        return refs;
    }

    /** Returns a map from a module symbol Id to all import statements that directly reference the module. */
    function getDirectImportsMap(sourceFiles: ReadonlyArray<SourceFile>, checker: TypeChecker, cancellationToken: CancellationToken): Map<ImporterOrCallExpression[]> {
        const map = createMap<ImporterOrCallExpression[]>();

        for (const sourceFile of sourceFiles) {
            cancellationToken.throwIfCancellationRequested();
            forEachImport(sourceFile, (importDecl, moduleSpecifier) => {
                const moduleSymbol = checker.getSymbolAtLocation(moduleSpecifier);
                if (moduleSymbol) {
                    const id = getSymbolId(moduleSymbol).toString();
                    let imports = map.get(id);
                    if (!imports) {
                        map.set(id, imports = []);
                    }
                    imports.push(importDecl);
                }
            });
        }

        return map;
    }

    /** Iterates over all statements at the top level or in module declarations. Returns the first truthy result. */
    function forEachPossibleImportOrExportStatement<T>(sourceFileLike: SourceFileLike, action: (statement: Statement) => T): T | undefined {
        return forEach(sourceFileLike.kind === SyntaxKind.SourceFile ? sourceFileLike.statements : sourceFileLike.body!.statements, statement => // TODO: GH#18217
            action(statement) || (isAmbientModuleDeclaration(statement) && forEach(statement.body && statement.body.statements, action)));
    }

    /** Calls `action` for each import, re-export, or require() in a file. */
    function forEachImport(sourceFile: SourceFile, action: (importStatement: ImporterOrCallExpression, imported: StringLiteral) => void): void {
        if (sourceFile.externalModuleIndicator || sourceFile.imports !== undefined) {
            for (const moduleSpecifier of sourceFile.imports) {
                action(importerFromModuleSpecifier(moduleSpecifier), moduleSpecifier);
            }
        }
        else {
            forEachPossibleImportOrExportStatement(sourceFile, statement => {
                switch (statement.kind) {
                    case SyntaxKind.ExportDeclaration:
                    case SyntaxKind.ImportDeclaration: {
                        const decl = statement as ImportDeclaration | ExportDeclaration;
                        if (decl.moduleSpecifier && decl.moduleSpecifier.kind === SyntaxKind.StringLiteral) {
                            action(decl, decl.moduleSpecifier as StringLiteral);
                        }
                        break;
                    }

                    case SyntaxKind.ImportEqualsDeclaration: {
                        const decl = statement as ImportEqualsDeclaration;
                        const { moduleReference } = decl;
                        if (moduleReference.kind === SyntaxKind.ExternalModuleReference &&
                            moduleReference.expression!.kind === SyntaxKind.StringLiteral) {
                            action(decl, moduleReference.expression as StringLiteral);
                        }
                        break;
                    }
                }
            });
        }
    }

    function importerFromModuleSpecifier(moduleSpecifier: StringLiteral): ImporterOrCallExpression {
        const decl = moduleSpecifier.parent;
        switch (decl.kind) {
            case SyntaxKind.CallExpression:
            case SyntaxKind.ImportDeclaration:
            case SyntaxKind.ExportDeclaration:
                return decl as ImportDeclaration | ExportDeclaration | CallExpression;
            case SyntaxKind.ExternalModuleReference:
                return (decl as ExternalModuleReference).parent;
            default:
                throw Debug.fail("Unexpected module specifier parent: " + decl.kind);
        }
    }

    export interface ImportedSymbol {
        kind: ImportExport.Import;
        symbol: Symbol;
        isNamedImport: boolean;
    }
    export interface ExportedSymbol {
        kind: ImportExport.Export;
        symbol: Symbol;
        exportInfo: ExportInfo;
    }

    /**
     * Given a local reference, we might notice that it's an import/export and recursively search for references of that.
     * If at an import, look locally for the symbol it imports.
     * If an an export, look for all imports of it.
     * This doesn't handle export specifiers; that is done in `getReferencesAtExportSpecifier`.
     * @param comingFromExport If we are doing a search for all exports, don't bother looking backwards for the imported symbol, since that's the reason we're here.
     */
    export function getImportOrExportSymbol(node: Node, symbol: Symbol, checker: TypeChecker, comingFromExport: boolean): ImportedSymbol | ExportedSymbol | undefined {
        return comingFromExport ? getExport() : getExport() || getImport();

        function getExport(): ExportedSymbol | ImportedSymbol | undefined {
            const { parent } = node;
            const grandParent = parent.parent;
            if (symbol.exportSymbol) {
                if (parent.kind === SyntaxKind.PropertyAccessExpression) {
                    // When accessing an export of a JS module, there's no alias. The symbol will still be flagged as an export even though we're at the use.
                    // So check that we are at the declaration.
                    return symbol.declarations!.some(d => d === parent) && isBinaryExpression(grandParent)
                        ? getSpecialPropertyExport(grandParent, /*useLhsSymbol*/ false)
                        : undefined;
                }
                else {
                    return exportInfo(symbol.exportSymbol, getExportKindForDeclaration(parent));
                }
            }
            else {
                const exportNode = getExportNode(parent, node);
                if (exportNode && hasModifier(exportNode, ModifierFlags.Export)) {
                    if (isImportEqualsDeclaration(exportNode) && exportNode.moduleReference === node) {
                        // We're at `Y` in `export import X = Y`. This is not the exported symbol, the left-hand-side is. So treat this as an import statement.
                        if (comingFromExport) {
                            return undefined;
                        }

                        const lhsSymbol = checker.getSymbolAtLocation(exportNode.name)!;
                        return { kind: ImportExport.Import, symbol: lhsSymbol, isNamedImport: false };
                    }
                    else {
                        return exportInfo(symbol, getExportKindForDeclaration(exportNode));
                    }
                }
                // If we are in `export = a;` or `export default a;`, `parent` is the export assignment.
                else if (isExportAssignment(parent)) {
                    return getExportAssignmentExport(parent);
                }
                // If we are in `export = class A {};` (or `export = class A {};`) at `A`, `parent.parent` is the export assignment.
                else if (isExportAssignment(grandParent)) {
                    return getExportAssignmentExport(grandParent);
                }
                // Similar for `module.exports =` and `exports.A =`.
                else if (isBinaryExpression(parent)) {
                    return getSpecialPropertyExport(parent, /*useLhsSymbol*/ true);
                }
                else if (isBinaryExpression(grandParent)) {
                    return getSpecialPropertyExport(grandParent, /*useLhsSymbol*/ true);
                }
            }

            function getExportAssignmentExport(ex: ExportAssignment): ExportedSymbol {
                // Get the symbol for the `export =` node; its parent is the module it's the export of.
                const exportingModuleSymbol = ex.symbol!.parent!;
                Debug.assert(!!exportingModuleSymbol);
                const exportKind = ex.isExportEquals ? ExportKind.ExportEquals : ExportKind.Default;
                return { kind: ImportExport.Export, symbol, exportInfo: { exportingModuleSymbol, exportKind } };
            }

            function getSpecialPropertyExport(node: ts.BinaryExpression, useLhsSymbol: boolean): ExportedSymbol | undefined {
                let kind: ExportKind;
                switch (getSpecialPropertyAssignmentKind(node)) {
                    case SpecialPropertyAssignmentKind.ExportsProperty:
                        kind = ExportKind.Named;
                        break;
                    case SpecialPropertyAssignmentKind.ModuleExports:
                        kind = ExportKind.ExportEquals;
                        break;
                    default:
                        return undefined;
                }

                const sym = useLhsSymbol ? checker.getSymbolAtLocation(cast(node.left, isPropertyAccessExpression).name) : symbol;
                // Better detection for GH#20803
                if (sym && !(checker.getMergedSymbol(sym.parent!).flags & SymbolFlags.Module)) {
                    Debug.fail(`Special property assignment kind does not have a module as its parent. Assignment is ${showSymbol(sym)}, parent is ${showSymbol(sym.parent!)}`);
                }
                return sym && exportInfo(sym, kind);
            }
        }

        function showSymbol(s: Symbol): string {
            const decls = s.declarations!.map(d => (ts as any).SyntaxKind[d.kind]).join(",");
            const flags = showFlags(s.flags, (ts as any).SymbolFlags);
            return `{ declarations: ${decls}, flags: ${flags} }`;
        }

        function showFlags(f: number, flags: any) {
            const out = [];
            for (let pow = 0; pow <= 30; pow++) {
                const n = 1 << pow;
                if (f & n) {
                    out.push(flags[n]);
                }
            }
            return out.join("|");
        }

        function getImport(): ImportedSymbol | undefined {
            const isImport = isNodeImport(node);
            if (!isImport) return undefined;

            // A symbol being imported is always an alias. So get what that aliases to find the local symbol.
            let importedSymbol = checker.getImmediateAliasedSymbol(symbol);
            if (!importedSymbol) return undefined;

            // Search on the local symbol in the exporting module, not the exported symbol.
            importedSymbol = skipExportSpecifierSymbol(importedSymbol, checker);
            // Similarly, skip past the symbol for 'export ='
            if (importedSymbol.escapedName === "export=") {
                importedSymbol = getExportEqualsLocalSymbol(importedSymbol, checker);
            }

            // If the import has a different name than the export, do not continue searching.
            // If `importedName` is undefined, do continue searching as the export is anonymous.
            // (All imports returned from this function will be ignored anyway if we are in rename and this is a not a named export.)
            const importedName = symbolName(importedSymbol);
            if (importedName === undefined || importedName === InternalSymbolName.Default || importedName === symbol.escapedName) {
                return { kind: ImportExport.Import, symbol: importedSymbol, ...isImport };
            }
        }

        function exportInfo(symbol: Symbol, kind: ExportKind): ExportedSymbol | undefined {
            const exportInfo = getExportInfo(symbol, kind, checker);
            return exportInfo && { kind: ImportExport.Export, symbol, exportInfo };
        }

        // Not meant for use with export specifiers or export assignment.
        function getExportKindForDeclaration(node: Node): ExportKind {
            return hasModifier(node, ModifierFlags.Default) ? ExportKind.Default : ExportKind.Named;
        }
    }

    function getExportEqualsLocalSymbol(importedSymbol: Symbol, checker: TypeChecker): Symbol {
        if (importedSymbol.flags & SymbolFlags.Alias) {
            return checker.getImmediateAliasedSymbol(importedSymbol)!;
        }

        const decl = importedSymbol.valueDeclaration!;
        if (isExportAssignment(decl)) { // `export = class {}`
            return decl.expression.symbol!;
        }
        else if (isBinaryExpression(decl)) { // `module.exports = class {}`
            return decl.right.symbol!;
        }
        throw Debug.fail();
    }

    // If a reference is a class expression, the exported node would be its parent.
    // If a reference is a variable declaration, the exported node would be the variable statement.
    function getExportNode(parent: Node, node: Node): Node | undefined {
        if (parent.kind === SyntaxKind.VariableDeclaration) {
            const p = parent as ts.VariableDeclaration;
            return p.name !== node ? undefined :
                p.parent.kind === ts.SyntaxKind.CatchClause ? undefined : p.parent.parent.kind === SyntaxKind.VariableStatement ? p.parent.parent : undefined;
        }
        else {
            return parent;
        }
    }

    function isNodeImport(node: Node): { isNamedImport: boolean } | undefined {
        const { parent } = node;
        switch (parent.kind) {
            case SyntaxKind.ImportEqualsDeclaration:
                return (parent as ImportEqualsDeclaration).name === node && isExternalModuleImportEquals(parent as ImportEqualsDeclaration)
                    ? { isNamedImport: false }
                    : undefined;
            case SyntaxKind.ImportSpecifier:
                // For a rename import `{ foo as bar }`, don't search for the imported symbol. Just find local uses of `bar`.
                return (parent as ImportSpecifier).propertyName ? undefined : { isNamedImport: true };
            case SyntaxKind.ImportClause:
            case SyntaxKind.NamespaceImport:
                Debug.assert((parent as ImportClause | NamespaceImport).name === node);
                return { isNamedImport: false };
            default:
                return undefined;
        }
    }

    export function getExportInfo(exportSymbol: Symbol, exportKind: ExportKind, checker: TypeChecker): ExportInfo | undefined {
        const exportingModuleSymbol = checker.getMergedSymbol(exportSymbol.parent!); // Need to get merged symbol in case there's an augmentation.
        // `export` may appear in a namespace. In that case, just rely on global search.
        return isExternalModuleSymbol(exportingModuleSymbol) ? { exportingModuleSymbol, exportKind } : undefined;
    }

    function symbolName(symbol: Symbol): __String | undefined {
        if (symbol.escapedName !== InternalSymbolName.Default) {
            return symbol.escapedName;
        }

        return forEach(symbol.declarations, decl => {
            const name = getNameOfDeclaration(decl);
            return name && name.kind === SyntaxKind.Identifier ? name.escapedText : undefined;
        });
    }

    /** If at an export specifier, go to the symbol it refers to. */
    function skipExportSpecifierSymbol(symbol: Symbol, checker: TypeChecker): Symbol {
        // For `export { foo } from './bar", there's nothing to skip, because it does not create a new alias. But `export { foo } does.
        if (symbol.declarations) {
            for (const declaration of symbol.declarations) {
                if (isExportSpecifier(declaration) && !(declaration as ExportSpecifier).propertyName && !(declaration as ExportSpecifier).parent.parent.moduleSpecifier) {
                    return checker.getExportSpecifierLocalTargetSymbol(declaration)!;
                }
            }
        }
        return symbol;
    }

    function getContainingModuleSymbol(importer: Importer, checker: TypeChecker): Symbol {
        return checker.getMergedSymbol(getSourceFileLikeForImportDeclaration(importer).symbol!);
    }

    function getSourceFileLikeForImportDeclaration(node: ImporterOrCallExpression): SourceFileLike {
        if (node.kind === SyntaxKind.CallExpression) {
            return node.getSourceFile();
        }

        const { parent } = node;
        if (parent.kind === SyntaxKind.SourceFile) {
            return parent as SourceFile;
        }
        Debug.assert(parent.kind === SyntaxKind.ModuleBlock && isAmbientModuleDeclaration(parent.parent));
        return parent.parent as AmbientModuleDeclaration;
    }

    function isAmbientModuleDeclaration(node: Node): node is AmbientModuleDeclaration {
        return node.kind === SyntaxKind.ModuleDeclaration && (node as ModuleDeclaration).name.kind === SyntaxKind.StringLiteral;
    }

    function isExternalModuleImportEquals({ moduleReference }: ImportEqualsDeclaration): boolean {
        return moduleReference.kind === SyntaxKind.ExternalModuleReference && moduleReference.expression!.kind === SyntaxKind.StringLiteral;
    }
}
