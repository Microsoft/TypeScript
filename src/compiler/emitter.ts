/// <reference path="checker.ts" />
/// <reference path="transformer.ts" />
/// <reference path="declarationEmitter.ts" />
/// <reference path="sourcemap.ts" />
/// <reference path="comments.ts" />

namespace ts {
    const delimiters = createDelimiterMap();
    const brackets = createBracketsMap();

    /*@internal*/
    /**
     * Iterates over the source files that are expected to have an emit output.
     *
     * @param host An EmitHost.
     * @param action The action to execute.
     * @param sourceFilesOrTargetSourceFile
     *   If an array, the full list of source files to emit.
     *   Else, calls `getSourceFilesToEmit` with the (optional) target source file to determine the list of source files to emit.
     */
    export function forEachEmittedFile(
        host: EmitHost, action: (emitFileNames: EmitFileNames, sourceFileOrBundle: SourceFile | Bundle, emitOnlyDtsFiles: boolean) => void,
        sourceFilesOrTargetSourceFile?: SourceFile[] | SourceFile,
        emitOnlyDtsFiles?: boolean) {

        const sourceFiles = isArray(sourceFilesOrTargetSourceFile) ? sourceFilesOrTargetSourceFile : getSourceFilesToEmit(host, sourceFilesOrTargetSourceFile);
        const options = host.getCompilerOptions();
        if (options.outFile || options.out) {
            if (sourceFiles.length) {
                const jsFilePath = options.outFile || options.out;
                const sourceMapFilePath = getSourceMapFilePath(jsFilePath, options);
                const declarationFilePath = options.declaration ? removeFileExtension(jsFilePath) + Extension.Dts : "";
                action({ jsFilePath, sourceMapFilePath, declarationFilePath }, createBundle(sourceFiles), emitOnlyDtsFiles);
            }
        }
        else {
            for (const sourceFile of sourceFiles) {
                const jsFilePath = getOwnEmitOutputFilePath(sourceFile, host, getOutputExtension(sourceFile, options));
                const sourceMapFilePath = getSourceMapFilePath(jsFilePath, options);
                const declarationFilePath = !isSourceFileJavaScript(sourceFile) && (emitOnlyDtsFiles || options.declaration) ? getDeclarationEmitOutputFilePath(sourceFile, host) : undefined;
                action({ jsFilePath, sourceMapFilePath, declarationFilePath }, sourceFile, emitOnlyDtsFiles);
            }
        }
    }

    function getSourceMapFilePath(jsFilePath: string, options: CompilerOptions) {
        return options.sourceMap ? jsFilePath + ".map" : undefined;
    }

    // JavaScript files are always LanguageVariant.JSX, as JSX syntax is allowed in .js files also.
    // So for JavaScript files, '.jsx' is only emitted if the input was '.jsx', and JsxEmit.Preserve.
    // For TypeScript, the only time to emit with a '.jsx' extension, is on JSX input, and JsxEmit.Preserve
    function getOutputExtension(sourceFile: SourceFile, options: CompilerOptions): Extension {
        if (options.jsx === JsxEmit.Preserve) {
            if (isSourceFileJavaScript(sourceFile)) {
                if (fileExtensionIs(sourceFile.fileName, Extension.Jsx)) {
                    return Extension.Jsx;
                }
            }
            else if (sourceFile.languageVariant === LanguageVariant.JSX) {
                // TypeScript source file preserving JSX syntax
                return Extension.Jsx;
            }
        }
        return Extension.Js;
    }

    function getOriginalSourceFileOrBundle(sourceFileOrBundle: SourceFile | Bundle) {
        if (sourceFileOrBundle.kind === SyntaxKind.Bundle) {
            return updateBundle(sourceFileOrBundle, sameMap(sourceFileOrBundle.sourceFiles, getOriginalSourceFile));
        }
        return getOriginalSourceFile(sourceFileOrBundle);
    }

    /*@internal*/
    // targetSourceFile is when users only want one file in entire project to be emitted. This is used in compileOnSave feature
    export function emitFiles(resolver: EmitResolver, host: EmitHost, targetSourceFile: SourceFile, emitOnlyDtsFiles?: boolean, transformers?: TransformerFactory<SourceFile>[]): EmitResult {
        const compilerOptions = host.getCompilerOptions();
        const moduleKind = getEmitModuleKind(compilerOptions);
        const sourceMapDataList: SourceMapData[] = compilerOptions.sourceMap || compilerOptions.inlineSourceMap ? [] : undefined;
        const emittedFilesList: string[] = compilerOptions.listEmittedFiles ? [] : undefined;
        const emitterDiagnostics = createDiagnosticCollection();
        const newLine = host.getNewLine();
        const writer = createTextWriter(newLine);
        const sourceMap = createSourceMapWriter(host, writer);

        let currentSourceFile: SourceFile;
        let bundledHelpers: Map<boolean>;
        let isOwnFileEmit: boolean;
        let emitSkipped = false;

        const sourceFiles = getSourceFilesToEmit(host, targetSourceFile);

        // Transform the source files
        const transform = transformNodes(resolver, host, compilerOptions, sourceFiles, transformers, /*allowDtsFiles*/ false);

        // Create a printer to print the nodes
        const printer = createPrinter(compilerOptions, {
            // resolver hooks
            hasGlobalName: resolver.hasGlobalName,

            // transform hooks
            onEmitNode: transform.emitNodeWithNotification,
            substituteNode: transform.substituteNode,

            // sourcemap hooks
            onEmitSourceMapOfNode: sourceMap.emitNodeWithSourceMap,
            onEmitSourceMapOfToken: sourceMap.emitTokenWithSourceMap,
            onEmitSourceMapOfPosition: sourceMap.emitPos,

            // emitter hooks
            onEmitHelpers: emitHelpers,
            onSetSourceFile: setSourceFile,
        });

        // Emit each output file
        performance.mark("beforePrint");
        forEachEmittedFile(host, emitSourceFileOrBundle, transform.transformed, emitOnlyDtsFiles);
        performance.measure("printTime", "beforePrint");

        // Clean up emit nodes on parse tree
        transform.dispose();

        return {
            emitSkipped,
            diagnostics: emitterDiagnostics.getDiagnostics(),
            emittedFiles: emittedFilesList,
            sourceMaps: sourceMapDataList
        };

        function emitSourceFileOrBundle({ jsFilePath, sourceMapFilePath, declarationFilePath }: EmitFileNames, sourceFileOrBundle: SourceFile | Bundle) {
            // Make sure not to write js file and source map file if any of them cannot be written
            if (!host.isEmitBlocked(jsFilePath) && !compilerOptions.noEmit) {
                if (!emitOnlyDtsFiles) {
                    printSourceFileOrBundle(jsFilePath, sourceMapFilePath, sourceFileOrBundle);
                }
            }
            else {
                emitSkipped = true;
            }

            if (declarationFilePath) {
                emitSkipped = writeDeclarationFile(declarationFilePath, getOriginalSourceFileOrBundle(sourceFileOrBundle), host, resolver, emitterDiagnostics, emitOnlyDtsFiles) || emitSkipped;
            }

            if (!emitSkipped && emittedFilesList) {
                if (!emitOnlyDtsFiles) {
                    emittedFilesList.push(jsFilePath);
                }
                if (sourceMapFilePath) {
                    emittedFilesList.push(sourceMapFilePath);
                }
                if (declarationFilePath) {
                    emittedFilesList.push(declarationFilePath);
                }
            }
        }

        function printSourceFileOrBundle(jsFilePath: string, sourceMapFilePath: string, sourceFileOrBundle: SourceFile | Bundle) {
            const bundle = sourceFileOrBundle.kind === SyntaxKind.Bundle ? sourceFileOrBundle : undefined;
            const sourceFile = sourceFileOrBundle.kind === SyntaxKind.SourceFile ? sourceFileOrBundle : undefined;
            const sourceFiles = bundle ? bundle.sourceFiles : [sourceFile];
            sourceMap.initialize(jsFilePath, sourceMapFilePath, sourceFileOrBundle);

            if (bundle) {
                bundledHelpers = createMap<boolean>();
                isOwnFileEmit = false;
                printer.writeBundle(bundle, writer);
            }
            else {
                isOwnFileEmit = true;
                printer.writeFile(sourceFile, writer);
            }

            writer.writeLine();

            const sourceMappingURL = sourceMap.getSourceMappingURL();
            if (sourceMappingURL) {
                writer.write(`//# ${"sourceMappingURL"}=${sourceMappingURL}`); // Sometimes tools can sometimes see this line as a source mapping url comment
            }

            // Write the source map
            if (compilerOptions.sourceMap && !compilerOptions.inlineSourceMap) {
                writeFile(host, emitterDiagnostics, sourceMapFilePath, sourceMap.getText(), /*writeByteOrderMark*/ false, sourceFiles);
            }

            // Record source map data for the test harness.
            if (sourceMapDataList) {
                sourceMapDataList.push(sourceMap.getSourceMapData());
            }

            // Write the output file
            writeFile(host, emitterDiagnostics, jsFilePath, writer.getText(), compilerOptions.emitBOM, sourceFiles);

            // Reset state
            sourceMap.reset();
            writer.reset();

            currentSourceFile = undefined;
            bundledHelpers = undefined;
            isOwnFileEmit = false;
        }

        function setSourceFile(node: SourceFile) {
            currentSourceFile = node;
            sourceMap.setSourceFile(node);
        }

        function emitHelpers(node: Node, writeLines: (text: string) => void) {
            let helpersEmitted = false;
            const bundle = node.kind === SyntaxKind.Bundle ? <Bundle>node : undefined;
            if (bundle && moduleKind === ModuleKind.None) {
                return;
            }

            const numNodes = bundle ? bundle.sourceFiles.length : 1;
            for (let i = 0; i < numNodes; i++) {
                const currentNode = bundle ? bundle.sourceFiles[i] : node;
                const sourceFile = isSourceFile(currentNode) ? currentNode : currentSourceFile;
                const shouldSkip = compilerOptions.noEmitHelpers || getExternalHelpersModuleName(sourceFile) !== undefined;
                const shouldBundle = isSourceFile(currentNode) && !isOwnFileEmit;
                const helpers = getEmitHelpers(currentNode);
                if (helpers) {
                    for (const helper of stableSort(helpers, compareEmitHelpers)) {
                        if (!helper.scoped) {
                            // Skip the helper if it can be skipped and the noEmitHelpers compiler
                            // option is set, or if it can be imported and the importHelpers compiler
                            // option is set.
                            if (shouldSkip) continue;

                            // Skip the helper if it can be bundled but hasn't already been emitted and we
                            // are emitting a bundled module.
                            if (shouldBundle) {
                                if (bundledHelpers.get(helper.name)) {
                                    continue;
                                }

                                bundledHelpers.set(helper.name, true);
                            }
                        }
                        else if (bundle) {
                            // Skip the helper if it is scoped and we are emitting bundled helpers
                            continue;
                        }

                        writeLines(helper.text);
                        helpersEmitted = true;
                    }
                }
            }

            return helpersEmitted;
        }
    }

    export function createPrinter(printerOptions: PrinterOptions = {}, handlers: PrintHandlers = {}): Printer {
        const {
            hasGlobalName,
            onEmitSourceMapOfNode,
            onEmitSourceMapOfToken,
            onEmitSourceMapOfPosition,
            onEmitNode,
            onEmitHelpers,
            onSetSourceFile,
            substituteNode,
            onBeforeEmitNodeArray,
            onAfterEmitNodeArray,
            onBeforeEmitToken,
            onAfterEmitToken
        } = handlers;

        const newLine = getNewLineCharacter(printerOptions);
        const comments = createCommentWriter(printerOptions, onEmitSourceMapOfPosition);
        const {
            emitNodeWithComments,
            emitBodyWithDetachedComments,
            emitTrailingCommentsOfPosition,
            emitLeadingCommentsOfPosition,
        } = comments;

        let currentSourceFile: SourceFile | undefined;
        let nodeIdToGeneratedName: string[]; // Map of generated names for specific nodes.
        let autoGeneratedIdToGeneratedName: string[]; // Map of generated names for temp and loop variables.
        let generatedNames: Map<true>; // Set of names generated by the NameGenerator.
        let tempFlagsStack: TempFlags[]; // Stack of enclosing name generation scopes.
        let tempFlags: TempFlags; // TempFlags for the current name generation scope.
        let writer: EmitTextWriter;
        let ownWriter: EmitTextWriter;
        let write = writeBase;
        let pendingSemicolon = false;
        const syntheticParent: TextRange = { pos: -1, end: -1 };

        reset();
        return {
            // public API
            printNode,
            printList,
            printFile,
            printBundle,

            // internal API
            writeNode,
            writeList,
            writeFile,
            writeBundle
        };

        function printNode(hint: EmitHint, node: Node, sourceFile: SourceFile): string {
            switch (hint) {
                case EmitHint.SourceFile:
                    Debug.assert(isSourceFile(node), "Expected a SourceFile node.");
                    break;
                case EmitHint.IdentifierName:
                    Debug.assert(isIdentifier(node), "Expected an Identifier node.");
                    break;
                case EmitHint.Expression:
                    Debug.assert(isExpression(node), "Expected an Expression node.");
                    break;
            }
            switch (node.kind) {
                case SyntaxKind.SourceFile: return printFile(<SourceFile>node);
                case SyntaxKind.Bundle: return printBundle(<Bundle>node);
            }
            writeNode(hint, node, sourceFile, beginPrint());
            return endPrint();
        }

        function printList<T extends Node>(format: ListFormat, nodes: NodeArray<T>, sourceFile: SourceFile) {
            writeList(format, nodes, sourceFile, beginPrint());
            return endPrint();
        }

        function printBundle(bundle: Bundle): string {
            writeBundle(bundle, beginPrint());
            return endPrint();
        }

        function printFile(sourceFile: SourceFile): string {
            writeFile(sourceFile, beginPrint());
            return endPrint();
        }

        /**
         * If `sourceFile` is `undefined`, `node` must be a synthesized `TypeNode`.
         */
        function writeNode(hint: EmitHint, node: TypeNode, sourceFile: undefined, output: EmitTextWriter): void;
        function writeNode(hint: EmitHint, node: Node, sourceFile: SourceFile, output: EmitTextWriter): void;
        function writeNode(hint: EmitHint, node: Node, sourceFile: SourceFile | undefined, output: EmitTextWriter) {
            const previousWriter = writer;
            setWriter(output);
            print(hint, node, sourceFile);
            reset();
            writer = previousWriter;
        }

        function writeList<T extends Node>(format: ListFormat, nodes: NodeArray<T>, sourceFile: SourceFile | undefined, output: EmitTextWriter) {
            const previousWriter = writer;
            setWriter(output);
            if (sourceFile) {
                setSourceFile(sourceFile);
            }
            emitList(syntheticParent, nodes, format);
            reset();
            writer = previousWriter;
        }

        function writeBundle(bundle: Bundle, output: EmitTextWriter) {
            const previousWriter = writer;
            setWriter(output);
            emitShebangIfNeeded(bundle);
            emitPrologueDirectivesIfNeeded(bundle);
            emitHelpersIndirect(bundle);
            for (const sourceFile of bundle.sourceFiles) {
                print(EmitHint.SourceFile, sourceFile, sourceFile);
            }
            reset();
            writer = previousWriter;
        }

        function writeFile(sourceFile: SourceFile, output: EmitTextWriter) {
            const previousWriter = writer;
            setWriter(output);
            emitShebangIfNeeded(sourceFile);
            emitPrologueDirectivesIfNeeded(sourceFile);
            print(EmitHint.SourceFile, sourceFile, sourceFile);
            reset();
            writer = previousWriter;
        }

        function beginPrint() {
            return ownWriter || (ownWriter = createTextWriter(newLine));
        }

        function endPrint() {
            const text = ownWriter.getText();
            ownWriter.reset();
            return text;
        }

        function print(hint: EmitHint, node: Node, sourceFile: SourceFile | undefined) {
            if (sourceFile) {
                setSourceFile(sourceFile);
            }
            pipelineEmitWithNotification(hint, node);
        }

        function setSourceFile(sourceFile: SourceFile) {
            currentSourceFile = sourceFile;
            comments.setSourceFile(sourceFile);
            if (onSetSourceFile) {
                onSetSourceFile(sourceFile);
            }
        }

        function setWriter(output: EmitTextWriter | undefined) {
            writer = output;
            comments.setWriter(output);
        }

        function reset() {
            nodeIdToGeneratedName = [];
            autoGeneratedIdToGeneratedName = [];
            generatedNames = createMap<true>();
            tempFlagsStack = [];
            tempFlags = TempFlags.Auto;
            comments.reset();
            setWriter(/*output*/ undefined);
        }

        // TODO: Should this just be `emit`?
        // See https://github.com/Microsoft/TypeScript/pull/18284#discussion_r137611034
        function emitIfPresent(node: Node | undefined) {
            if (node) {
                emit(node);
            }
        }

        function emit(node: Node) {
            pipelineEmitWithNotification(EmitHint.Unspecified, node);
        }

        function emitIdentifierName(node: Identifier) {
            pipelineEmitWithNotification(EmitHint.IdentifierName, node);
        }

        function emitExpression(node: Expression) {
            pipelineEmitWithNotification(EmitHint.Expression, node);
        }

        function pipelineEmitWithNotification(hint: EmitHint, node: Node) {
            if (onEmitNode) {
                onEmitNode(hint, node, pipelineEmitWithComments);
            }
            else {
                pipelineEmitWithComments(hint, node);
            }
        }

        function pipelineEmitWithComments(hint: EmitHint, node: Node) {
            node = trySubstituteNode(hint, node);
            if (emitNodeWithComments && hint !== EmitHint.SourceFile) {
                emitNodeWithComments(hint, node, pipelineEmitWithSourceMap);
            }
            else {
                pipelineEmitWithSourceMap(hint, node);
            }
        }

        function pipelineEmitWithSourceMap(hint: EmitHint, node: Node) {
            if (onEmitSourceMapOfNode && hint !== EmitHint.SourceFile && hint !== EmitHint.IdentifierName) {
                onEmitSourceMapOfNode(hint, node, pipelineEmitWithHint);
            }
            else {
                pipelineEmitWithHint(hint, node);
            }
        }

        function pipelineEmitWithHint(hint: EmitHint, node: Node): void {
            switch (hint) {
                case EmitHint.SourceFile: return pipelineEmitSourceFile(node);
                case EmitHint.IdentifierName: return pipelineEmitIdentifierName(node);
                case EmitHint.Expression: return pipelineEmitExpression(node);
                case EmitHint.MappedTypeParameter: return emitMappedTypeParameter(cast(node, isTypeParameterDeclaration));
                case EmitHint.Unspecified: return pipelineEmitUnspecified(node);
            }
        }

        function pipelineEmitSourceFile(node: Node): void {
            Debug.assertNode(node, isSourceFile);
            emitSourceFile(<SourceFile>node);
        }

        function pipelineEmitIdentifierName(node: Node): void {
            Debug.assertNode(node, isIdentifier);
            emitIdentifier(<Identifier>node);
        }

        function emitMappedTypeParameter(node: TypeParameterDeclaration): void {
            emit(node.name);
            writeSpace();
            writeKeyword("in");
            writeSpace();
            emit(node.constraint);
        }

        function pipelineEmitUnspecified(node: Node): void {
            const kind = node.kind;

            // Reserved words
            // Strict mode reserved words
            // Contextual keywords
            if (isKeyword(kind)) {
                writeTokenNode(node, writeKeyword);
                return;
            }

            switch (kind) {
                // Pseudo-literals
                case SyntaxKind.TemplateHead:
                case SyntaxKind.TemplateMiddle:
                case SyntaxKind.TemplateTail:
                    return emitLiteral(<LiteralExpression>node);

                // Identifiers
                case SyntaxKind.Identifier:
                    return emitIdentifier(<Identifier>node);

                // Parse tree nodes

                // Names
                case SyntaxKind.QualifiedName:
                    return emitQualifiedName(<QualifiedName>node);
                case SyntaxKind.ComputedPropertyName:
                    return emitComputedPropertyName(<ComputedPropertyName>node);

                // Signature elements
                case SyntaxKind.TypeParameter:
                    return emitTypeParameter(<TypeParameterDeclaration>node);
                case SyntaxKind.Parameter:
                    return emitParameter(<ParameterDeclaration>node);
                case SyntaxKind.Decorator:
                    return emitDecorator(<Decorator>node);

                // Type members
                case SyntaxKind.PropertySignature:
                    return emitPropertySignature(<PropertySignature>node);
                case SyntaxKind.PropertyDeclaration:
                    return emitPropertyDeclaration(<PropertyDeclaration>node);
                case SyntaxKind.MethodSignature:
                    return emitMethodSignature(<MethodSignature>node);
                case SyntaxKind.MethodDeclaration:
                    return emitMethodDeclaration(<MethodDeclaration>node);
                case SyntaxKind.Constructor:
                    return emitConstructor(<ConstructorDeclaration>node);
                case SyntaxKind.GetAccessor:
                case SyntaxKind.SetAccessor:
                    return emitAccessorDeclaration(<AccessorDeclaration>node);
                case SyntaxKind.CallSignature:
                    return emitCallSignature(<CallSignatureDeclaration>node);
                case SyntaxKind.ConstructSignature:
                    return emitConstructSignature(<ConstructSignatureDeclaration>node);
                case SyntaxKind.IndexSignature:
                    return emitIndexSignature(<IndexSignatureDeclaration>node);

                // Types
                case SyntaxKind.TypePredicate:
                    return emitTypePredicate(<TypePredicateNode>node);
                case SyntaxKind.TypeReference:
                    return emitTypeReference(<TypeReferenceNode>node);
                case SyntaxKind.FunctionType:
                    return emitFunctionType(<FunctionTypeNode>node);
                case SyntaxKind.ConstructorType:
                    return emitConstructorType(<ConstructorTypeNode>node);
                case SyntaxKind.TypeQuery:
                    return emitTypeQuery(<TypeQueryNode>node);
                case SyntaxKind.TypeLiteral:
                    return emitTypeLiteral(<TypeLiteralNode>node);
                case SyntaxKind.ArrayType:
                    return emitArrayType(<ArrayTypeNode>node);
                case SyntaxKind.TupleType:
                    return emitTupleType(<TupleTypeNode>node);
                case SyntaxKind.UnionType:
                    return emitUnionType(<UnionTypeNode>node);
                case SyntaxKind.IntersectionType:
                    return emitIntersectionType(<IntersectionTypeNode>node);
                case SyntaxKind.ParenthesizedType:
                    return emitParenthesizedType(<ParenthesizedTypeNode>node);
                case SyntaxKind.ExpressionWithTypeArguments:
                    return emitExpressionWithTypeArguments(<ExpressionWithTypeArguments>node);
                case SyntaxKind.ThisType:
                    return emitThisType();
                case SyntaxKind.TypeOperator:
                    return emitTypeOperator(<TypeOperatorNode>node);
                case SyntaxKind.IndexedAccessType:
                    return emitIndexedAccessType(<IndexedAccessTypeNode>node);
                case SyntaxKind.MappedType:
                    return emitMappedType(<MappedTypeNode>node);
                case SyntaxKind.LiteralType:
                    return emitLiteralType(<LiteralTypeNode>node);

                // Binding patterns
                case SyntaxKind.ObjectBindingPattern:
                    return emitObjectBindingPattern(<ObjectBindingPattern>node);
                case SyntaxKind.ArrayBindingPattern:
                    return emitArrayBindingPattern(<ArrayBindingPattern>node);
                case SyntaxKind.BindingElement:
                    return emitBindingElement(<BindingElement>node);

                // Misc
                case SyntaxKind.TemplateSpan:
                    return emitTemplateSpan(<TemplateSpan>node);
                case SyntaxKind.SemicolonClassElement:
                    return emitSemicolonClassElement();

                // Statements
                case SyntaxKind.Block:
                    return emitBlock(<Block>node);
                case SyntaxKind.VariableStatement:
                    return emitVariableStatement(<VariableStatement>node);
                case SyntaxKind.EmptyStatement:
                    return emitEmptyStatement();
                case SyntaxKind.ExpressionStatement:
                    return emitExpressionStatement(<ExpressionStatement>node);
                case SyntaxKind.IfStatement:
                    return emitIfStatement(<IfStatement>node);
                case SyntaxKind.DoStatement:
                    return emitDoStatement(<DoStatement>node);
                case SyntaxKind.WhileStatement:
                    return emitWhileStatement(<WhileStatement>node);
                case SyntaxKind.ForStatement:
                    return emitForStatement(<ForStatement>node);
                case SyntaxKind.ForInStatement:
                    return emitForInStatement(<ForInStatement>node);
                case SyntaxKind.ForOfStatement:
                    return emitForOfStatement(<ForOfStatement>node);
                case SyntaxKind.ContinueStatement:
                    return emitContinueStatement(<ContinueStatement>node);
                case SyntaxKind.BreakStatement:
                    return emitBreakStatement(<BreakStatement>node);
                case SyntaxKind.ReturnStatement:
                    return emitReturnStatement(<ReturnStatement>node);
                case SyntaxKind.WithStatement:
                    return emitWithStatement(<WithStatement>node);
                case SyntaxKind.SwitchStatement:
                    return emitSwitchStatement(<SwitchStatement>node);
                case SyntaxKind.LabeledStatement:
                    return emitLabeledStatement(<LabeledStatement>node);
                case SyntaxKind.ThrowStatement:
                    return emitThrowStatement(<ThrowStatement>node);
                case SyntaxKind.TryStatement:
                    return emitTryStatement(<TryStatement>node);
                case SyntaxKind.DebuggerStatement:
                    return emitDebuggerStatement(<DebuggerStatement>node);

                // Declarations
                case SyntaxKind.VariableDeclaration:
                    return emitVariableDeclaration(<VariableDeclaration>node);
                case SyntaxKind.VariableDeclarationList:
                    return emitVariableDeclarationList(<VariableDeclarationList>node);
                case SyntaxKind.FunctionDeclaration:
                    return emitFunctionDeclaration(<FunctionDeclaration>node);
                case SyntaxKind.ClassDeclaration:
                    return emitClassDeclaration(<ClassDeclaration>node);
                case SyntaxKind.InterfaceDeclaration:
                    return emitInterfaceDeclaration(<InterfaceDeclaration>node);
                case SyntaxKind.TypeAliasDeclaration:
                    return emitTypeAliasDeclaration(<TypeAliasDeclaration>node);
                case SyntaxKind.EnumDeclaration:
                    return emitEnumDeclaration(<EnumDeclaration>node);
                case SyntaxKind.ModuleDeclaration:
                    return emitModuleDeclaration(<ModuleDeclaration>node);
                case SyntaxKind.ModuleBlock:
                    return emitModuleBlock(<ModuleBlock>node);
                case SyntaxKind.CaseBlock:
                    return emitCaseBlock(<CaseBlock>node);
                case SyntaxKind.NamespaceExportDeclaration:
                    return emitNamespaceExportDeclaration(<NamespaceExportDeclaration>node);
                case SyntaxKind.ImportEqualsDeclaration:
                    return emitImportEqualsDeclaration(<ImportEqualsDeclaration>node);
                case SyntaxKind.ImportDeclaration:
                    return emitImportDeclaration(<ImportDeclaration>node);
                case SyntaxKind.ImportClause:
                    return emitImportClause(<ImportClause>node);
                case SyntaxKind.NamespaceImport:
                    return emitNamespaceImport(<NamespaceImport>node);
                case SyntaxKind.NamedImports:
                    return emitNamedImports(<NamedImports>node);
                case SyntaxKind.ImportSpecifier:
                    return emitImportSpecifier(<ImportSpecifier>node);
                case SyntaxKind.ExportAssignment:
                    return emitExportAssignment(<ExportAssignment>node);
                case SyntaxKind.ExportDeclaration:
                    return emitExportDeclaration(<ExportDeclaration>node);
                case SyntaxKind.NamedExports:
                    return emitNamedExports(<NamedExports>node);
                case SyntaxKind.ExportSpecifier:
                    return emitExportSpecifier(<ExportSpecifier>node);
                case SyntaxKind.MissingDeclaration:
                    return;

                // Module references
                case SyntaxKind.ExternalModuleReference:
                    return emitExternalModuleReference(<ExternalModuleReference>node);

                // JSX (non-expression)
                case SyntaxKind.JsxText:
                    return emitJsxText(<JsxText>node);
                case SyntaxKind.JsxOpeningElement:
                    return emitJsxOpeningElement(<JsxOpeningElement>node);
                case SyntaxKind.JsxClosingElement:
                    return emitJsxClosingElement(<JsxClosingElement>node);
                case SyntaxKind.JsxAttribute:
                    return emitJsxAttribute(<JsxAttribute>node);
                case SyntaxKind.JsxAttributes:
                    return emitJsxAttributes(<JsxAttributes>node);
                case SyntaxKind.JsxSpreadAttribute:
                    return emitJsxSpreadAttribute(<JsxSpreadAttribute>node);
                case SyntaxKind.JsxExpression:
                    return emitJsxExpression(<JsxExpression>node);

                // Clauses
                case SyntaxKind.CaseClause:
                    return emitCaseClause(<CaseClause>node);
                case SyntaxKind.DefaultClause:
                    return emitDefaultClause(<DefaultClause>node);
                case SyntaxKind.HeritageClause:
                    return emitHeritageClause(<HeritageClause>node);
                case SyntaxKind.CatchClause:
                    return emitCatchClause(<CatchClause>node);

                // Property assignments
                case SyntaxKind.PropertyAssignment:
                    return emitPropertyAssignment(<PropertyAssignment>node);
                case SyntaxKind.ShorthandPropertyAssignment:
                    return emitShorthandPropertyAssignment(<ShorthandPropertyAssignment>node);
                case SyntaxKind.SpreadAssignment:
                    return emitSpreadAssignment(node as SpreadAssignment);

                // Enum
                case SyntaxKind.EnumMember:
                    return emitEnumMember(<EnumMember>node);

                // JSDoc nodes (ignored)
                // Transformation nodes (ignored)
            }

            // If the node is an expression, try to emit it as an expression with
            // substitution.
            if (isExpression(node)) {
                return pipelineEmitExpression(trySubstituteNode(EmitHint.Expression, node));
            }

            if (isToken(node)) {
                writeTokenNode(node, writePunctuation);
                return;
            }
        }

        function pipelineEmitExpression(node: Node): void {
            const kind = node.kind;
            switch (kind) {
                // Literals
                case SyntaxKind.NumericLiteral:
                    return emitNumericLiteral(<NumericLiteral>node);

                case SyntaxKind.StringLiteral:
                case SyntaxKind.RegularExpressionLiteral:
                case SyntaxKind.NoSubstitutionTemplateLiteral:
                    return emitLiteral(<LiteralExpression>node);

                // Identifiers
                case SyntaxKind.Identifier:
                    return emitIdentifier(<Identifier>node);

                // Reserved words
                case SyntaxKind.FalseKeyword:
                case SyntaxKind.NullKeyword:
                case SyntaxKind.SuperKeyword:
                case SyntaxKind.TrueKeyword:
                case SyntaxKind.ThisKeyword:
                case SyntaxKind.ImportKeyword:
                    writeTokenNode(node, writeKeyword);
                    return;

                // Expressions
                case SyntaxKind.ArrayLiteralExpression:
                    return emitArrayLiteralExpression(<ArrayLiteralExpression>node);
                case SyntaxKind.ObjectLiteralExpression:
                    return emitObjectLiteralExpression(<ObjectLiteralExpression>node);
                case SyntaxKind.PropertyAccessExpression:
                    return emitPropertyAccessExpression(<PropertyAccessExpression>node);
                case SyntaxKind.ElementAccessExpression:
                    return emitElementAccessExpression(<ElementAccessExpression>node);
                case SyntaxKind.CallExpression:
                    return emitCallExpression(<CallExpression>node);
                case SyntaxKind.NewExpression:
                    return emitNewExpression(<NewExpression>node);
                case SyntaxKind.TaggedTemplateExpression:
                    return emitTaggedTemplateExpression(<TaggedTemplateExpression>node);
                case SyntaxKind.TypeAssertionExpression:
                    return emitTypeAssertionExpression(<TypeAssertion>node);
                case SyntaxKind.ParenthesizedExpression:
                    return emitParenthesizedExpression(<ParenthesizedExpression>node);
                case SyntaxKind.FunctionExpression:
                    return emitFunctionExpression(<FunctionExpression>node);
                case SyntaxKind.ArrowFunction:
                    return emitArrowFunction(<ArrowFunction>node);
                case SyntaxKind.DeleteExpression:
                    return emitDeleteExpression(<DeleteExpression>node);
                case SyntaxKind.TypeOfExpression:
                    return emitTypeOfExpression(<TypeOfExpression>node);
                case SyntaxKind.VoidExpression:
                    return emitVoidExpression(<VoidExpression>node);
                case SyntaxKind.AwaitExpression:
                    return emitAwaitExpression(<AwaitExpression>node);
                case SyntaxKind.PrefixUnaryExpression:
                    return emitPrefixUnaryExpression(<PrefixUnaryExpression>node);
                case SyntaxKind.PostfixUnaryExpression:
                    return emitPostfixUnaryExpression(<PostfixUnaryExpression>node);
                case SyntaxKind.BinaryExpression:
                    return emitBinaryExpression(<BinaryExpression>node);
                case SyntaxKind.ConditionalExpression:
                    return emitConditionalExpression(<ConditionalExpression>node);
                case SyntaxKind.TemplateExpression:
                    return emitTemplateExpression(<TemplateExpression>node);
                case SyntaxKind.YieldExpression:
                    return emitYieldExpression(<YieldExpression>node);
                case SyntaxKind.SpreadElement:
                    return emitSpreadExpression(<SpreadElement>node);
                case SyntaxKind.ClassExpression:
                    return emitClassExpression(<ClassExpression>node);
                case SyntaxKind.OmittedExpression:
                    return;
                case SyntaxKind.AsExpression:
                    return emitAsExpression(<AsExpression>node);
                case SyntaxKind.NonNullExpression:
                    return emitNonNullExpression(<NonNullExpression>node);
                case SyntaxKind.MetaProperty:
                    return emitMetaProperty(<MetaProperty>node);

                // JSX
                case SyntaxKind.JsxElement:
                    return emitJsxElement(<JsxElement>node);
                case SyntaxKind.JsxSelfClosingElement:
                    return emitJsxSelfClosingElement(<JsxSelfClosingElement>node);

                // Transformation nodes
                case SyntaxKind.PartiallyEmittedExpression:
                    return emitPartiallyEmittedExpression(<PartiallyEmittedExpression>node);

                case SyntaxKind.CommaListExpression:
                    return emitCommaList(<CommaListExpression>node);
            }
        }

        function trySubstituteNode(hint: EmitHint, node: Node) {
            return node && substituteNode && substituteNode(hint, node) || node;
        }

        function emitHelpersIndirect(node: Node) {
            if (onEmitHelpers) {
                onEmitHelpers(node, writeLines);
            }
        }

        //
        // Literals/Pseudo-literals
        //

        // SyntaxKind.NumericLiteral
        function emitNumericLiteral(node: NumericLiteral) {
            emitLiteral(node);
        }

        // SyntaxKind.StringLiteral
        // SyntaxKind.RegularExpressionLiteral
        // SyntaxKind.NoSubstitutionTemplateLiteral
        // SyntaxKind.TemplateHead
        // SyntaxKind.TemplateMiddle
        // SyntaxKind.TemplateTail
        function emitLiteral(node: LiteralLikeNode) {
            const text = getLiteralTextOfNode(node);
            if ((printerOptions.sourceMap || printerOptions.inlineSourceMap)
                && (node.kind === SyntaxKind.StringLiteral || isTemplateLiteralKind(node.kind))) {
                writeLiteral(text);
            }
            else {
                // Quick info expects all literals to be called with writeStringLiteral, as there's no specific type for numberLiterals
                writeStringLiteral(text);
            }
        }

        //
        // Identifiers
        //

        function emitIdentifier(node: Identifier) {
            (node.symbol ? writeSymbol : write)(getTextOfNode(node, /*includeTrivia*/ false), node.symbol);
            emitList(node, node.typeArguments, ListFormat.TypeParameters); // Call emitList directly since it could be an array of TypeParameterDeclarations _or_ type arguments
        }

        //
        // Names
        //

        function emitQualifiedName(node: QualifiedName) {
            emitEntityName(node.left);
            writePunctuation(".");
            emit(node.right);
        }

        function emitEntityName(node: EntityName) {
            if (node.kind === SyntaxKind.Identifier) {
                emitExpression(<Identifier>node);
            }
            else {
                emit(node);
            }
        }

        function emitComputedPropertyName(node: ComputedPropertyName) {
            writePunctuation("[");
            emitExpression(node.expression);
            writePunctuation("]");
        }

        //
        // Signature elements
        //

        function emitTypeParameter(node: TypeParameterDeclaration) {
            emit(node.name);
            if (node.constraint) {
                writeSpace();
                writeKeyword("extends");
                writeSpace();
                emit(node.constraint);
            }
            emitAsAssignmentTarget(node.default);
        }

        function emitParameter(node: ParameterDeclaration) {
            emitDecorators(node, node.decorators);
            emitModifiers(node, node.modifiers);
            emitIfPresent(node.dotDotDotToken);
            const savedWrite = write;
            write = writeParameter;
            emit(node.name);
            write = savedWrite;
            emitIfPresent(node.questionToken);
            emitAsTypeAnnotation(node.type);
            emitAsAssignmentTarget(node.initializer);
        }

        function emitDecorator(decorator: Decorator) {
            writePunctuation("@");
            emitExpression(decorator.expression);
        }

        //
        // Type members
        //

        function emitPropertySignature(node: PropertySignature) {
            emitDecorators(node, node.decorators);
            emitModifiers(node, node.modifiers);
            const savedWrite = write;
            write = writeProperty;
            emit(node.name);
            write = savedWrite;
            emitIfPresent(node.questionToken);
            emitAsTypeAnnotation(node.type);
            writePunctuation(";");
        }

        function emitPropertyDeclaration(node: PropertyDeclaration) {
            emitDecorators(node, node.decorators);
            emitModifiers(node, node.modifiers);
            emit(node.name);
            emitIfPresent(node.questionToken);
            emitAsTypeAnnotation(node.type);
            emitAsAssignmentTarget(node.initializer);
            writePunctuation(";");
        }

        function emitMethodSignature(node: MethodSignature) {
            emitDecorators(node, node.decorators);
            emitModifiers(node, node.modifiers);
            emit(node.name);
            emitIfPresent(node.questionToken);
            emitTypeParameters(node, node.typeParameters);
            emitParameters(node, node.parameters);
            emitAsTypeAnnotation(node.type);
            writePunctuation(";");
        }

        function emitMethodDeclaration(node: MethodDeclaration) {
            emitDecorators(node, node.decorators);
            emitModifiers(node, node.modifiers);
            emitIfPresent(node.asteriskToken);
            emit(node.name);
            emitIfPresent(node.questionToken);
            emitSignatureAndBody(node, emitSignatureHead);
        }

        function emitConstructor(node: ConstructorDeclaration) {
            emitModifiers(node, node.modifiers);
            writeKeyword("constructor");
            emitSignatureAndBody(node, emitSignatureHead);
        }

        function emitAccessorDeclaration(node: AccessorDeclaration) {
            emitDecorators(node, node.decorators);
            emitModifiers(node, node.modifiers);
            writeKeyword(node.kind === SyntaxKind.GetAccessor ? "get" : "set");
            writeSpace();
            emit(node.name);
            emitSignatureAndBody(node, emitSignatureHead);
        }

        function emitCallSignature(node: CallSignatureDeclaration) {
            emitDecorators(node, node.decorators);
            emitModifiers(node, node.modifiers);
            emitTypeParameters(node, node.typeParameters);
            emitParameters(node, node.parameters);
            emitAsTypeAnnotation(node.type);
            writePunctuation(";");
        }

        function emitConstructSignature(node: ConstructSignatureDeclaration) {
            emitDecorators(node, node.decorators);
            emitModifiers(node, node.modifiers);
            writeKeyword("new");
            writeSpace();
            emitTypeParameters(node, node.typeParameters);
            emitParameters(node, node.parameters);
            emitAsTypeAnnotation(node.type);
            writePunctuation(";");
        }

        function emitIndexSignature(node: IndexSignatureDeclaration) {
            emitDecorators(node, node.decorators);
            emitModifiers(node, node.modifiers);
            emitParametersForIndexSignature(node, node.parameters);
            emitAsTypeAnnotation(node.type);
            writePunctuation(";");
        }

        function emitSemicolonClassElement() {
            writePunctuation(";");
        }

        //
        // Types
        //

        function emitTypePredicate(node: TypePredicateNode) {
            emit(node.parameterName);
            writeSpace();
            writeKeyword("is");
            writeSpace();
            emit(node.type);
        }

        function emitTypeReference(node: TypeReferenceNode) {
            emit(node.typeName);
            emitTypeArguments(node, node.typeArguments);
        }

        function emitFunctionType(node: FunctionTypeNode) {
            emitTypeParameters(node, node.typeParameters);
            emitParametersForArrow(node, node.parameters);
            writeSpace();
            writePunctuation("=>");
            writeSpace();
            emit(node.type);
        }

        function emitConstructorType(node: ConstructorTypeNode) {
            writeKeyword("new");
            writeSpace();
            emitTypeParameters(node, node.typeParameters);
            emitParameters(node, node.parameters);
            writeSpace();
            writePunctuation("=>");
            writeSpace();
            emit(node.type);
        }

        function emitTypeQuery(node: TypeQueryNode) {
            writeKeyword("typeof");
            writeSpace();
            emit(node.exprName);
        }

        function emitTypeLiteral(node: TypeLiteralNode) {
            writePunctuation("{");
            const flags = getEmitFlags(node) & EmitFlags.SingleLine ? ListFormat.SingleLineTypeLiteralMembers : ListFormat.MultiLineTypeLiteralMembers;
            emitList(node, node.members, flags | ListFormat.NoSpaceIfEmpty);
            writePunctuation("}");
        }

        function emitArrayType(node: ArrayTypeNode) {
            emit(node.elementType);
            writePunctuation("[");
            writePunctuation("]");
        }

        function emitTupleType(node: TupleTypeNode) {
            writePunctuation("[");
            emitList(node, node.elementTypes, ListFormat.TupleTypeElements);
            writePunctuation("]");
        }

        function emitUnionType(node: UnionTypeNode) {
            emitList(node, node.types, ListFormat.UnionTypeConstituents);
        }

        function emitIntersectionType(node: IntersectionTypeNode) {
            emitList(node, node.types, ListFormat.IntersectionTypeConstituents);
        }

        function emitParenthesizedType(node: ParenthesizedTypeNode) {
            writePunctuation("(");
            emit(node.type);
            writePunctuation(")");
        }

        function emitThisType() {
            writeKeyword("this");
        }

        function emitTypeOperator(node: TypeOperatorNode) {
            writeTokenText(node.operator, writeKeyword);
            writeSpace();
            emit(node.type);
        }

        function emitIndexedAccessType(node: IndexedAccessTypeNode) {
            emit(node.objectType);
            writePunctuation("[");
            emit(node.indexType);
            writePunctuation("]");
        }

        function emitMappedType(node: MappedTypeNode) {
            const emitFlags = getEmitFlags(node);
            writePunctuation("{");
            if (emitFlags & EmitFlags.SingleLine) {
                writeSpace();
            }
            else {
                writeLine();
                increaseIndent();
            }
            if (node.readonlyToken) {
                emit(node.readonlyToken);
                writeSpace();
            }

            writePunctuation("[");
            pipelineEmitWithNotification(EmitHint.MappedTypeParameter, node.typeParameter);
            writePunctuation("]");

            emitIfPresent(node.questionToken);
            writePunctuation(":");
            writeSpace();
            emit(node.type);
            writePunctuation(";");
            if (emitFlags & EmitFlags.SingleLine) {
                writeSpace();
            }
            else {
                writeLine();
                decreaseIndent();
            }
            writePunctuation("}");
        }

        function emitLiteralType(node: LiteralTypeNode) {
            emitExpression(node.literal);
        }

        //
        // Binding patterns
        //

        function emitObjectBindingPattern(node: ObjectBindingPattern) {
            const elements = node.elements;
            if (elements.length === 0) {
                writePunctuation("{}");
            }
            else {
                writePunctuation("{");
                emitList(node, elements, ListFormat.ObjectBindingPatternElements);
                writePunctuation("}");
            }
        }

        function emitArrayBindingPattern(node: ArrayBindingPattern) {
            const elements = node.elements;
            if (elements.length === 0) {
                writePunctuation("[]");
            }
            else {
                writePunctuation("[");
                emitList(node, node.elements, ListFormat.ArrayBindingPatternElements);
                writePunctuation("]");
            }
        }

        function emitBindingElement(node: BindingElement) {
            if (node.propertyName) {
                emit(node.propertyName);
                writePunctuation(":");
                writeSpace();
            }
            emitIfPresent(node.dotDotDotToken);
            emit(node.name);
            emitAsAssignmentTarget(node.initializer);
        }

        //
        // Expressions
        //

        function emitArrayLiteralExpression(node: ArrayLiteralExpression) {
            const elements = node.elements;
            const preferNewLine = node.multiLine ? ListFormat.PreferNewLine : ListFormat.None;
            emitExpressionList(node, elements, ListFormat.ArrayLiteralExpressionElements | preferNewLine);
        }

        function emitObjectLiteralExpression(node: ObjectLiteralExpression) {
            const indentedFlag = getEmitFlags(node) & EmitFlags.Indented;
            if (indentedFlag) {
                increaseIndent();
            }

            const preferNewLine = node.multiLine ? ListFormat.PreferNewLine : ListFormat.None;
            const allowTrailingComma = currentSourceFile.languageVersion >= ScriptTarget.ES5 ? ListFormat.AllowTrailingComma : ListFormat.None;
            emitList(node, node.properties, ListFormat.ObjectLiteralExpressionProperties | allowTrailingComma | preferNewLine);

            if (indentedFlag) {
                decreaseIndent();
            }
        }

        function emitPropertyAccessExpression(node: PropertyAccessExpression) {
            let indentBeforeDot = false;
            let indentAfterDot = false;
            if (!(getEmitFlags(node) & EmitFlags.NoIndentation)) {
                const dotRangeStart = node.expression.end;
                const dotRangeEnd = skipTrivia(currentSourceFile.text, node.expression.end) + 1;
                const dotToken = createToken(SyntaxKind.DotToken);
                dotToken.pos = dotRangeStart;
                dotToken.end = dotRangeEnd;
                indentBeforeDot = needsIndentation(node, node.expression, dotToken);
                indentAfterDot = needsIndentation(node, dotToken, node.name);
            }

            emitExpression(node.expression);
            increaseIndentIf(indentBeforeDot);

            const shouldEmitDotDot = !indentBeforeDot && needsDotDotForPropertyAccess(node.expression);
            writePunctuation(shouldEmitDotDot ? ".." : ".");

            increaseIndentIf(indentAfterDot);
            emit(node.name);
            decreaseIndentIf(indentBeforeDot, indentAfterDot);
        }

        // 1..toString is a valid property access, emit a dot after the literal
        // Also emit a dot if expression is a integer const enum value - it will appear in generated code as numeric literal
        function needsDotDotForPropertyAccess(expression: Expression) {
            expression = skipPartiallyEmittedExpressions(expression);
            if (isNumericLiteral(expression)) {
                // check if numeric literal is a decimal literal that was originally written with a dot
                const text = getLiteralTextOfNode(<LiteralExpression>expression);
                return !expression.numericLiteralFlags
                    && text.indexOf(tokenToString(SyntaxKind.DotToken)) < 0;
            }
            else if (isPropertyAccessExpression(expression) || isElementAccessExpression(expression)) {
                // check if constant enum value is integer
                const constantValue = getConstantValue(expression);
                // isFinite handles cases when constantValue is undefined
                return typeof constantValue === "number" && isFinite(constantValue)
                    && Math.floor(constantValue) === constantValue
                    && printerOptions.removeComments;
            }
        }

        function emitElementAccessExpression(node: ElementAccessExpression) {
            emitExpression(node.expression);
            writePunctuation("[");
            emitExpression(node.argumentExpression);
            writePunctuation("]");
        }

        function emitCallExpression(node: CallExpression) {
            emitExpression(node.expression);
            emitTypeArguments(node, node.typeArguments);
            emitExpressionList(node, node.arguments, ListFormat.CallExpressionArguments);
        }

        function emitNewExpression(node: NewExpression) {
            writeKeyword("new");
            writeSpace();
            emitExpression(node.expression);
            emitTypeArguments(node, node.typeArguments);
            emitExpressionList(node, node.arguments, ListFormat.NewExpressionArguments);
        }

        function emitTaggedTemplateExpression(node: TaggedTemplateExpression) {
            emitExpression(node.tag);
            writeSpace();
            emitExpression(node.template);
        }

        function emitTypeAssertionExpression(node: TypeAssertion) {
            writePunctuation("<");
            emit(node.type);
            writePunctuation(">");
            emitExpression(node.expression);
        }

        function emitParenthesizedExpression(node: ParenthesizedExpression) {
            writePunctuation("(");
            emitExpression(node.expression);
            writePunctuation(")");
        }

        function emitFunctionExpression(node: FunctionExpression) {
            emitFunctionDeclarationOrExpression(node);
        }

        function emitArrowFunction(node: ArrowFunction) {
            emitDecorators(node, node.decorators);
            emitModifiers(node, node.modifiers);
            emitSignatureAndBody(node, emitArrowFunctionHead);
        }

        function emitArrowFunctionHead(node: ArrowFunction) {
            emitTypeParameters(node, node.typeParameters);
            emitParametersForArrow(node, node.parameters);
            emitAsTypeAnnotation(node.type);
            writeSpace();
            emit(node.equalsGreaterThanToken);
        }

        function emitDeleteExpression(node: DeleteExpression) {
            writeKeyword("delete");
            writeSpace();
            emitExpression(node.expression);
        }

        function emitTypeOfExpression(node: TypeOfExpression) {
            writeKeyword("typeof");
            writeSpace();
            emitExpression(node.expression);
        }

        function emitVoidExpression(node: VoidExpression) {
            writeKeyword("void");
            writeSpace();
            emitExpression(node.expression);
        }

        function emitAwaitExpression(node: AwaitExpression) {
            writeKeyword("await");
            writeSpace();
            emitExpression(node.expression);
        }

        function emitPrefixUnaryExpression(node: PrefixUnaryExpression) {
            writeTokenText(node.operator, writeOperator);
            if (shouldEmitWhitespaceBeforeOperand(node)) {
                writeSpace();
            }
            emitExpression(node.operand);
        }

        function shouldEmitWhitespaceBeforeOperand(node: PrefixUnaryExpression) {
            // In some cases, we need to emit a space between the operator and the operand. One obvious case
            // is when the operator is an identifier, like delete or typeof. We also need to do this for plus
            // and minus expressions in certain cases. Specifically, consider the following two cases (parens
            // are just for clarity of exposition, and not part of the source code):
            //
            //  (+(+1))
            //  (+(++1))
            //
            // We need to emit a space in both cases. In the first case, the absence of a space will make
            // the resulting expression a prefix increment operation. And in the second, it will make the resulting
            // expression a prefix increment whose operand is a plus expression - (++(+x))
            // The same is true of minus of course.
            const operand = node.operand;
            return operand.kind === SyntaxKind.PrefixUnaryExpression
                && ((node.operator === SyntaxKind.PlusToken && ((<PrefixUnaryExpression>operand).operator === SyntaxKind.PlusToken || (<PrefixUnaryExpression>operand).operator === SyntaxKind.PlusPlusToken))
                    || (node.operator === SyntaxKind.MinusToken && ((<PrefixUnaryExpression>operand).operator === SyntaxKind.MinusToken || (<PrefixUnaryExpression>operand).operator === SyntaxKind.MinusMinusToken)));
        }

        function emitPostfixUnaryExpression(node: PostfixUnaryExpression) {
            emitExpression(node.operand);
            writeTokenText(node.operator, writeOperator);
        }

        function emitBinaryExpression(node: BinaryExpression) {
            const isCommaOperator = node.operatorToken.kind !== SyntaxKind.CommaToken;
            const indentBeforeOperator = needsIndentation(node, node.left, node.operatorToken);
            const indentAfterOperator = needsIndentation(node, node.operatorToken, node.right);

            emitExpression(node.left);
            increaseIndentIf(indentBeforeOperator, isCommaOperator ? " " : undefined);
            emitLeadingCommentsOfPosition(node.operatorToken.pos);
            writeTokenNode(node.operatorToken, writeOperator);
            emitTrailingCommentsOfPosition(node.operatorToken.end, /*prefixSpace*/ true); // Binary operators should have a space before the comment starts
            increaseIndentIf(indentAfterOperator, " ");
            emitExpression(node.right);
            decreaseIndentIf(indentBeforeOperator, indentAfterOperator);
        }

        function emitConditionalExpression(node: ConditionalExpression) {
            const indentBeforeQuestion = needsIndentation(node, node.condition, node.questionToken);
            const indentAfterQuestion = needsIndentation(node, node.questionToken, node.whenTrue);
            const indentBeforeColon = needsIndentation(node, node.whenTrue, node.colonToken);
            const indentAfterColon = needsIndentation(node, node.colonToken, node.whenFalse);

            emitExpression(node.condition);
            increaseIndentIf(indentBeforeQuestion, " ");
            emit(node.questionToken);
            increaseIndentIf(indentAfterQuestion, " ");
            emitExpression(node.whenTrue);
            decreaseIndentIf(indentBeforeQuestion, indentAfterQuestion);

            increaseIndentIf(indentBeforeColon, " ");
            emit(node.colonToken);
            increaseIndentIf(indentAfterColon, " ");
            emitExpression(node.whenFalse);
            decreaseIndentIf(indentBeforeColon, indentAfterColon);
        }

        function emitTemplateExpression(node: TemplateExpression) {
            emit(node.head);
            emitList(node, node.templateSpans, ListFormat.TemplateExpressionSpans);
        }

        function emitYieldExpression(node: YieldExpression) {
            writeKeyword("yield");
            emit(node.asteriskToken);
            emitExpressionWithPrefix(" ", writeSpace, node.expression);
        }

        function emitSpreadExpression(node: SpreadElement) {
            writePunctuation("...");
            emitExpression(node.expression);
        }

        function emitClassExpression(node: ClassExpression) {
            emitClassDeclarationOrExpression(node);
        }

        function emitExpressionWithTypeArguments(node: ExpressionWithTypeArguments) {
            emitExpression(node.expression);
            emitTypeArguments(node, node.typeArguments);
        }

        function emitAsExpression(node: AsExpression) {
            emitExpression(node.expression);
            if (node.type) {
                writeSpace();
                writeKeyword("as");
                writeSpace();
                emit(node.type);
            }
        }

        function emitNonNullExpression(node: NonNullExpression) {
            emitExpression(node.expression);
            writeOperator("!");
        }

        function emitMetaProperty(node: MetaProperty) {
            writeToken(node.keywordToken, node.pos, writePunctuation);
            writePunctuation(".");
            emit(node.name);
        }

        //
        // Misc
        //

        function emitTemplateSpan(node: TemplateSpan) {
            emitExpression(node.expression);
            emit(node.literal);
        }

        //
        // Statements
        //

        function emitBlock(node: Block) {
            writeToken(SyntaxKind.OpenBraceToken, node.pos, writePunctuation, /*contextNode*/ node);
            emitBlockStatements(node, /*forceSingleLine*/ !node.multiLine && isEmptyBlock(node));
            // We have to call emitLeadingComments explicitly here because otherwise leading comments of the close brace token will not be emitted
            increaseIndent();
            emitLeadingCommentsOfPosition(node.statements.end);
            decreaseIndent();
            writeToken(SyntaxKind.CloseBraceToken, node.statements.end, writePunctuation, /*contextNode*/ node);
        }

        function emitBlockStatements(node: BlockLike, forceSingleLine: boolean) {
            const format = forceSingleLine || getEmitFlags(node) & EmitFlags.SingleLine ? ListFormat.SingleLineBlockStatements : ListFormat.MultiLineBlockStatements;
            emitList(node, node.statements, format);
        }

        function emitVariableStatement(node: VariableStatement) {
            emitModifiers(node, node.modifiers);
            emit(node.declarationList);
            writePunctuation(";");
        }

        function emitEmptyStatement() {
            writePunctuation(";");
        }

        function emitExpressionStatement(node: ExpressionStatement) {
            emitExpression(node.expression);
            writePunctuation(";");
        }

        function emitIfStatement(node: IfStatement) {
            const openParenPos = writeToken(SyntaxKind.IfKeyword, node.pos, writeKeyword, node);
            writeSpace();
            writeToken(SyntaxKind.OpenParenToken, openParenPos, writePunctuation, node);
            emitExpression(node.expression);
            writeToken(SyntaxKind.CloseParenToken, node.expression.end, writePunctuation, node);
            emitEmbeddedStatement(node, node.thenStatement);
            if (node.elseStatement) {
                writeLineOrSpace(node);
                writeToken(SyntaxKind.ElseKeyword, node.thenStatement.end, writeKeyword, node);
                if (node.elseStatement.kind === SyntaxKind.IfStatement) {
                    writeSpace();
                    emit(node.elseStatement);
                }
                else {
                    emitEmbeddedStatement(node, node.elseStatement);
                }
            }
        }

        function emitDoStatement(node: DoStatement) {
            writeKeyword("do");
            emitEmbeddedStatement(node, node.statement);
            if (isBlock(node.statement)) {
                writeSpace();
            }
            else {
                writeLineOrSpace(node);
            }

            writeKeyword("while");
            writeSpace();
            writePunctuation("(");
            emitExpression(node.expression);
            writePunctuation(");");
        }

        function emitWhileStatement(node: WhileStatement) {
            writeKeyword("while");
            writeSpace();
            writePunctuation("(");
            emitExpression(node.expression);
            writePunctuation(")");
            emitEmbeddedStatement(node, node.statement);
        }

        function emitForStatement(node: ForStatement) {
            const openParenPos = writeToken(SyntaxKind.ForKeyword, node.pos, writeKeyword);
            writeSpace();
            writeToken(SyntaxKind.OpenParenToken, openParenPos, writePunctuation, /*contextNode*/ node);
            emitForBinding(node.initializer);
            writePunctuation(";");
            emitExpressionWithPrefix(" ", writeSpace, node.condition);
            writePunctuation(";");
            emitExpressionWithPrefix(" ", writeSpace, node.incrementor);
            writePunctuation(")");
            emitEmbeddedStatement(node, node.statement);
        }

        function emitForInStatement(node: ForInStatement) {
            const openParenPos = writeToken(SyntaxKind.ForKeyword, node.pos, writeKeyword);
            writeSpace();
            writeToken(SyntaxKind.OpenParenToken, openParenPos, writePunctuation);
            emitForBinding(node.initializer);
            writeSpace();
            writeKeyword("in");
            writeSpace();
            emitExpression(node.expression);
            writeToken(SyntaxKind.CloseParenToken, node.expression.end, writePunctuation);
            emitEmbeddedStatement(node, node.statement);
        }

        function emitForOfStatement(node: ForOfStatement) {
            const openParenPos = writeToken(SyntaxKind.ForKeyword, node.pos, writeKeyword);
            writeSpace();
            emitWithTrailingSpace(node.awaitModifier);
            writeToken(SyntaxKind.OpenParenToken, openParenPos, writePunctuation);
            emitForBinding(node.initializer);
            writeSpace();
            writeKeyword("of");
            writeSpace();
            emitExpression(node.expression);
            writeToken(SyntaxKind.CloseParenToken, node.expression.end, writePunctuation);
            emitEmbeddedStatement(node, node.statement);
        }

        function emitForBinding(node: VariableDeclarationList | Expression) {
            if (node !== undefined) {
                if (node.kind === SyntaxKind.VariableDeclarationList) {
                    emit(node);
                }
                else {
                    emitExpression(<Expression>node);
                }
            }
        }

        function emitContinueStatement(node: ContinueStatement) {
            writeToken(SyntaxKind.ContinueKeyword, node.pos, writeKeyword);
            emitWithPrefix(" ", writeSpace, node.label);
            writePunctuation(";");
        }

        function emitBreakStatement(node: BreakStatement) {
            writeToken(SyntaxKind.BreakKeyword, node.pos, writeKeyword);
            emitWithPrefix(" ", writeSpace, node.label);
            writePunctuation(";");
        }

        function emitTokenWithComment(token: SyntaxKind, pos: number, writer: (s: string) => void, contextNode?: Node) {
            const node = contextNode && getParseTreeNode(contextNode);
            if (node && node.kind === contextNode.kind) {
                pos = skipTrivia(currentSourceFile.text, pos);
            }
            pos = writeToken(token, pos, writer, /*contextNode*/ contextNode);
            if (node && node.kind === contextNode.kind) {
                emitTrailingCommentsOfPosition(pos, /*prefixSpace*/ true);
            }
            return pos;
        }

        function emitReturnStatement(node: ReturnStatement) {
            emitTokenWithComment(SyntaxKind.ReturnKeyword, node.pos, writeKeyword, /*contextNode*/ node);
            emitExpressionWithPrefix(" ", writeSpace, node.expression);
            writePunctuation(";");
        }

        function emitWithStatement(node: WithStatement) {
            writeKeyword("with");
            writeSpace();
            writePunctuation("(");
            emitExpression(node.expression);
            writePunctuation(")");
            emitEmbeddedStatement(node, node.statement);
        }

        function emitSwitchStatement(node: SwitchStatement) {
            const openParenPos = writeToken(SyntaxKind.SwitchKeyword, node.pos, writeKeyword);
            writeSpace();
            writeToken(SyntaxKind.OpenParenToken, openParenPos, writePunctuation);
            emitExpression(node.expression);
            writeToken(SyntaxKind.CloseParenToken, node.expression.end, writePunctuation);
            writeSpace();
            emit(node.caseBlock);
        }

        function emitLabeledStatement(node: LabeledStatement) {
            emit(node.label);
            writePunctuation(":");
            writeSpace();
            emit(node.statement);
        }

        function emitThrowStatement(node: ThrowStatement) {
            writeKeyword("throw");
            emitExpressionWithPrefix(" ", writeSpace, node.expression);
            writePunctuation(";");
        }

        function emitTryStatement(node: TryStatement) {
            writeKeyword("try");
            writeSpace();
            emit(node.tryBlock);
            if (node.catchClause) {
                writeLineOrSpace(node);
                emit(node.catchClause);
            }
            if (node.finallyBlock) {
                writeLineOrSpace(node);
                writeKeyword("finally");
                writeSpace();
                emit(node.finallyBlock);
            }
        }

        function emitDebuggerStatement(node: DebuggerStatement) {
            writeToken(SyntaxKind.DebuggerKeyword, node.pos, writeKeyword);
            writePunctuation(";");
        }

        //
        // Declarations
        //

        function emitVariableDeclaration(node: VariableDeclaration) {
            emit(node.name);
            emitAsTypeAnnotation(node.type);
            emitAsAssignmentTarget(node.initializer);
        }

        function emitVariableDeclarationList(node: VariableDeclarationList) {
            writeKeyword(isLet(node) ? "let" : isConst(node) ? "const" : "var");
            writeSpace();
            emitList(node, node.declarations, ListFormat.VariableDeclarationList);
        }

        function emitFunctionDeclaration(node: FunctionDeclaration) {
            emitFunctionDeclarationOrExpression(node);
        }

        function emitFunctionDeclarationOrExpression(node: FunctionDeclaration | FunctionExpression) {
            emitDecorators(node, node.decorators);
            emitModifiers(node, node.modifiers);
            writeKeyword("function");
            emitIfPresent(node.asteriskToken);
            writeSpace();
            emitIdentifierName(node.name);
            emitSignatureAndBody(node, emitSignatureHead);
        }

        function emitBlockCallback(_hint: EmitHint, body: Node): void {
            emitBlockFunctionBody(<Block>body);
        }

        function emitSignatureAndBody(node: FunctionLikeDeclaration, emitSignatureHead: (node: SignatureDeclaration) => void) {
            const body = node.body;
            if (body) {
                if (isBlock(body)) {
                    const indentedFlag = getEmitFlags(node) & EmitFlags.Indented;
                    if (indentedFlag) {
                        increaseIndent();
                    }

                    if (getEmitFlags(node) & EmitFlags.ReuseTempVariableScope) {
                        emitSignatureHead(node);
                        if (onEmitNode) {
                            onEmitNode(EmitHint.Unspecified, body, emitBlockCallback);
                        }
                        else {
                            emitBlockFunctionBody(body);
                        }
                    }
                    else {
                        pushNameGenerationScope();
                        emitSignatureHead(node);
                        if (onEmitNode) {
                            onEmitNode(EmitHint.Unspecified, body, emitBlockCallback);
                        }
                        else {
                            emitBlockFunctionBody(body);
                        }
                        popNameGenerationScope();
                    }

                    if (indentedFlag) {
                        decreaseIndent();
                    }
                }
                else {
                    emitSignatureHead(node);
                    writeSpace();
                    emitExpression(body);
                }
            }
            else {
                emitSignatureHead(node);
                writePunctuation(";");
            }

        }

        function emitSignatureHead(node: FunctionDeclaration | FunctionExpression | MethodDeclaration | AccessorDeclaration | ConstructorDeclaration) {
            emitTypeParameters(node, node.typeParameters);
            emitParameters(node, node.parameters);
            emitAsTypeAnnotation(node.type);
        }

        function shouldEmitBlockFunctionBodyOnSingleLine(body: Block) {
            // We must emit a function body as a single-line body in the following case:
            // * The body has NodeEmitFlags.SingleLine specified.

            // We must emit a function body as a multi-line body in the following cases:
            // * The body is explicitly marked as multi-line.
            // * A non-synthesized body's start and end position are on different lines.
            // * Any statement in the body starts on a new line.

            if (getEmitFlags(body) & EmitFlags.SingleLine) {
                return true;
            }

            if (body.multiLine) {
                return false;
            }

            if (!nodeIsSynthesized(body) && !rangeIsOnSingleLine(body, currentSourceFile)) {
                return false;
            }

            if (shouldWriteLeadingLineTerminator(body, body.statements, ListFormat.PreserveLines)
                || shouldWriteClosingLineTerminator(body, body.statements, ListFormat.PreserveLines)) {
                return false;
            }

            let previousStatement: Statement;
            for (const statement of body.statements) {
                if (shouldWriteSeparatingLineTerminator(previousStatement, statement, ListFormat.PreserveLines)) {
                    return false;
                }

                previousStatement = statement;
            }

            return true;
        }

        function emitBlockFunctionBody(body: Block) {
            writeSpace();
            writePunctuation("{");
            increaseIndent();

            const emitBlockFunctionBody = shouldEmitBlockFunctionBodyOnSingleLine(body)
                ? emitBlockFunctionBodyOnSingleLine
                : emitBlockFunctionBodyWorker;

            if (emitBodyWithDetachedComments) {
                emitBodyWithDetachedComments(body, body.statements, emitBlockFunctionBody);
            }
            else {
                emitBlockFunctionBody(body);
            }

            decreaseIndent();
            writeToken(SyntaxKind.CloseBraceToken, body.statements.end, writePunctuation, body);
        }

        function emitBlockFunctionBodyOnSingleLine(body: Block) {
            emitBlockFunctionBodyWorker(body, /*emitBlockFunctionBodyOnSingleLine*/ true);
        }

        function emitBlockFunctionBodyWorker(body: Block, emitBlockFunctionBodyOnSingleLine?: boolean) {
            // Emit all the prologue directives (like "use strict").
            const statementOffset = emitPrologueDirectives(body.statements, /*startWithNewLine*/ true);
            const pos = writer.getTextPos();
            emitHelpersIndirect(body);
            if (statementOffset === 0 && pos === writer.getTextPos() && emitBlockFunctionBodyOnSingleLine) {
                decreaseIndent();
                emitList(body, body.statements, ListFormat.SingleLineFunctionBodyStatements);
                increaseIndent();
            }
            else {
                emitList(body, body.statements, ListFormat.MultiLineFunctionBodyStatements, statementOffset);
            }
        }

        function emitClassDeclaration(node: ClassDeclaration) {
            emitClassDeclarationOrExpression(node);
        }

        function emitClassDeclarationOrExpression(node: ClassDeclaration | ClassExpression) {
            emitDecorators(node, node.decorators);
            emitModifiers(node, node.modifiers);
            writeKeyword("class");
            emitNodeWithPrefix(" ", writeSpace, node.name, emitIdentifierName);

            const indentedFlag = getEmitFlags(node) & EmitFlags.Indented;
            if (indentedFlag) {
                increaseIndent();
            }

            emitTypeParameters(node, node.typeParameters);
            emitList(node, node.heritageClauses, ListFormat.ClassHeritageClauses);

            pushNameGenerationScope();
            writeSpace();
            writePunctuation("{");
            emitList(node, node.members, ListFormat.ClassMembers);
            writePunctuation("}");
            popNameGenerationScope();

            if (indentedFlag) {
                decreaseIndent();
            }
        }

        function emitInterfaceDeclaration(node: InterfaceDeclaration) {
            emitDecorators(node, node.decorators);
            emitModifiers(node, node.modifiers);
            writeKeyword("interface");
            writeSpace();
            emit(node.name);
            emitTypeParameters(node, node.typeParameters);
            emitList(node, node.heritageClauses, ListFormat.HeritageClauses);
            writeSpace();
            writePunctuation("{");
            emitList(node, node.members, ListFormat.InterfaceMembers);
            writePunctuation("}");
        }

        function emitTypeAliasDeclaration(node: TypeAliasDeclaration) {
            emitDecorators(node, node.decorators);
            emitModifiers(node, node.modifiers);
            writeKeyword("type");
            writeSpace();
            emit(node.name);
            emitTypeParameters(node, node.typeParameters);
            writeSpace(); writePunctuation("="); writeSpace();
            emit(node.type);
            writePunctuation(";");
        }

        function emitEnumDeclaration(node: EnumDeclaration) {
            emitModifiers(node, node.modifiers);
            writeKeyword("enum");
            writeSpace();
            emit(node.name);
            pushNameGenerationScope();
            writeSpace();
            writePunctuation("{");
            emitList(node, node.members, ListFormat.EnumMembers);
            writePunctuation("}");
            popNameGenerationScope();
        }

        function emitModuleDeclaration(node: ModuleDeclaration) {
            emitModifiers(node, node.modifiers);
            if (~node.flags & NodeFlags.GlobalAugmentation) {
                writeKeyword(node.flags & NodeFlags.Namespace ? "namespace" : "module");
                writeSpace();
            }
            emit(node.name);

            let body = node.body;
            while (body.kind === SyntaxKind.ModuleDeclaration) {
                writePunctuation(".");
                emit((<ModuleDeclaration>body).name);
                body = (<ModuleDeclaration>body).body;
            }

            writeSpace();
            emit(body);
        }

        function emitModuleBlock(node: ModuleBlock) {
            pushNameGenerationScope();
            writePunctuation("{");
            emitBlockStatements(node, /*forceSingleLine*/ isEmptyBlock(node));
            writePunctuation("}");
            popNameGenerationScope();
        }

        function emitCaseBlock(node: CaseBlock) {
            writeToken(SyntaxKind.OpenBraceToken, node.pos, writePunctuation);
            emitList(node, node.clauses, ListFormat.CaseBlockClauses);
            writeToken(SyntaxKind.CloseBraceToken, node.clauses.end, writePunctuation);
        }

        function emitImportEqualsDeclaration(node: ImportEqualsDeclaration) {
            emitModifiers(node, node.modifiers);
            writeKeyword("import");
            writeSpace();
            emit(node.name);
            writeSpace();
            writePunctuation("=");
            writeSpace();
            emitModuleReference(node.moduleReference);
            writePunctuation(";");
        }

        function emitModuleReference(node: ModuleReference) {
            if (node.kind === SyntaxKind.Identifier) {
                emitExpression(<Identifier>node);
            }
            else {
                emit(node);
            }
        }

        function emitImportDeclaration(node: ImportDeclaration) {
            emitModifiers(node, node.modifiers);
            writeKeyword("import");
            writeSpace();
            if (node.importClause) {
                emit(node.importClause);
                writeSpace();
                writeKeyword("from");
                writeSpace();
            }
            emitExpression(node.moduleSpecifier);
            writePunctuation(";");
        }

        function emitImportClause(node: ImportClause) {
            emit(node.name);
            if (node.name && node.namedBindings) {
                writePunctuation(",");
                writeSpace();
            }
            emit(node.namedBindings);
        }

        function emitNamespaceImport(node: NamespaceImport) {
            writePunctuation("*");
            writeSpace();
            writeKeyword("as");
            writeSpace();
            emit(node.name);
        }

        function emitNamedImports(node: NamedImports) {
            emitNamedImportsOrExports(node);
        }

        function emitImportSpecifier(node: ImportSpecifier) {
            emitImportOrExportSpecifier(node);
        }

        function emitExportAssignment(node: ExportAssignment) {
            writeKeyword("export");
            writeSpace();
            if (node.isExportEquals) {
                writeOperator("=");
            }
            else {
                writeKeyword("default");
            }
            writeSpace();
            emitExpression(node.expression);
            writePunctuation(";");
        }

        function emitExportDeclaration(node: ExportDeclaration) {
            writeKeyword("export");
            writeSpace();
            if (node.exportClause) {
                emit(node.exportClause);
            }
            else {
                writePunctuation("*");
            }
            if (node.moduleSpecifier) {
                writeSpace();
                writeKeyword("from");
                writeSpace();
                emitExpression(node.moduleSpecifier);
            }
            writePunctuation(";");
        }

        function emitNamespaceExportDeclaration(node: NamespaceExportDeclaration) {
            writeKeyword("export");
            writeSpace();
            writeKeyword("as");
            writeSpace();
            writeKeyword("namespace");
            writeSpace();
            emit(node.name);
            writePunctuation(";");
        }

        function emitNamedExports(node: NamedExports) {
            emitNamedImportsOrExports(node);
        }

        function emitExportSpecifier(node: ExportSpecifier) {
            emitImportOrExportSpecifier(node);
        }

        function emitNamedImportsOrExports(node: NamedImportsOrExports) {
            writePunctuation("{");
            emitList(node, node.elements, ListFormat.NamedImportsOrExportsElements);
            writePunctuation("}");
        }

        function emitImportOrExportSpecifier(node: ImportOrExportSpecifier) {
            if (node.propertyName) {
                emit(node.propertyName);
                writeSpace();
                writeKeyword("as");
                writeSpace();
            }

            emit(node.name);
        }

        //
        // Module references
        //

        function emitExternalModuleReference(node: ExternalModuleReference) {
            writeKeyword("require");
            writePunctuation("(");
            emitExpression(node.expression);
            writePunctuation(")");
        }

        //
        // JSX
        //

        function emitJsxElement(node: JsxElement) {
            emit(node.openingElement);
            emitList(node, node.children, ListFormat.JsxElementChildren);
            emit(node.closingElement);
        }

        function emitJsxSelfClosingElement(node: JsxSelfClosingElement) {
            writePunctuation("<");
            emitJsxTagName(node.tagName);
            writeSpace();
            // We are checking here so we won't re-enter the emiting pipeline and emit extra sourcemap
            if (node.attributes.properties && node.attributes.properties.length > 0) {
                emit(node.attributes);
            }
            writePunctuation("/>");
        }

        function emitJsxOpeningElement(node: JsxOpeningElement) {
            writePunctuation("<");
            emitJsxTagName(node.tagName);
            writeIfAny(node.attributes.properties, " ", writeSpace);
            // We are checking here so we won't re-enter the emitting pipeline and emit extra sourcemap
            if (node.attributes.properties && node.attributes.properties.length > 0) {
                emit(node.attributes);
            }
            writePunctuation(">");
        }

        function emitJsxText(node: JsxText) {
            commitPendingSemicolon();
            writer.writeLiteral(getTextOfNode(node, /*includeTrivia*/ true));
        }

        function emitJsxClosingElement(node: JsxClosingElement) {
            writePunctuation("</");
            emitJsxTagName(node.tagName);
            writePunctuation(">");
        }

        function emitJsxAttributes(node: JsxAttributes) {
            emitList(node, node.properties, ListFormat.JsxElementAttributes);
        }

        function emitJsxAttribute(node: JsxAttribute) {
            emit(node.name);
            emitWithPrefix("=", writePunctuation, node.initializer);
        }

        function emitJsxSpreadAttribute(node: JsxSpreadAttribute) {
            writePunctuation("{...");
            emitExpression(node.expression);
            writePunctuation("}");
        }

        function emitJsxExpression(node: JsxExpression) {
            if (node.expression) {
                writePunctuation("{");
                emitIfPresent(node.dotDotDotToken);
                emitExpression(node.expression);
                writePunctuation("}");
            }
        }

        function emitJsxTagName(node: JsxTagNameExpression) {
            if (node.kind === SyntaxKind.Identifier) {
                emitExpression(<Identifier>node);
            }
            else {
                emit(node);
            }
        }

        //
        // Clauses
        //

        function emitCaseClause(node: CaseClause) {
            writeKeyword("case");
            writeSpace();
            emitExpression(node.expression);
            writePunctuation(":");

            emitCaseOrDefaultClauseStatements(node, node.statements);
        }

        function emitDefaultClause(node: DefaultClause) {
            writeKeyword("default");
            writePunctuation(":");
            emitCaseOrDefaultClauseStatements(node, node.statements);
        }

        function emitCaseOrDefaultClauseStatements(parentNode: Node, statements: NodeArray<Statement>) {
            const emitAsSingleStatement =
                statements.length === 1 &&
                (
                    // treat synthesized nodes as located on the same line for emit purposes
                    nodeIsSynthesized(parentNode) ||
                    nodeIsSynthesized(statements[0]) ||
                    rangeStartPositionsAreOnSameLine(parentNode, statements[0], currentSourceFile)
                );

            // e.g:
            //      case 0: // Zero
            //      case 1: // One
            //      case 2: // two
            //          return "hi";
            // If there is no statements, emitNodeWithComments of the parentNode which is caseClause will take care of trailing comment.
            // So in example above, comment "// Zero" and "// One" will be emit in emitTrailingComments in emitNodeWithComments.
            // However, for "case 2", because parentNode which is caseClause has an "end" property to be end of the statements (in this case return statement)
            // comment "// two" will not be emitted in emitNodeWithComments.
            // Therefore, we have to do the check here to emit such comment.
            if (statements.length > 0) {
                // We use emitTrailingCommentsOfPosition instead of emitLeadingCommentsOfPosition because leading comments is defined as comments before the node after newline character separating it from previous line
                // Note: we can't use parentNode.end as such position includes statements.
                emitTrailingCommentsOfPosition(statements.pos);
            }

            let format = ListFormat.CaseOrDefaultClauseStatements;
            if (emitAsSingleStatement) {
                writeSpace();
                format &= ~(ListFormat.MultiLine | ListFormat.Indented);
            }
            emitList(parentNode, statements, format);
        }

        function emitHeritageClause(node: HeritageClause) {
            writeSpace();
            writeTokenText(node.token, writeKeyword);
            writeSpace();
            emitList(node, node.types, ListFormat.HeritageClauseTypes);
        }

        function emitCatchClause(node: CatchClause) {
            const openParenPos = writeToken(SyntaxKind.CatchKeyword, node.pos, writeKeyword);
            writeSpace();
            if (node.variableDeclaration) {
                writeToken(SyntaxKind.OpenParenToken, openParenPos, writePunctuation);
                emit(node.variableDeclaration);
                writeToken(SyntaxKind.CloseParenToken, node.variableDeclaration.end, writePunctuation);
                writeSpace();
            }
            emit(node.block);
        }

        //
        // Property assignments
        //

        function emitPropertyAssignment(node: PropertyAssignment) {
            emit(node.name);
            writePunctuation(":");
            writeSpace();
            // This is to ensure that we emit comment in the following case:
            //      For example:
            //          obj = {
            //              id: /*comment1*/ ()=>void
            //          }
            // "comment1" is not considered to be leading comment for node.initializer
            // but rather a trailing comment on the previous node.
            const initializer = node.initializer;
            if (emitTrailingCommentsOfPosition && (getEmitFlags(initializer) & EmitFlags.NoLeadingComments) === 0) {
                const commentRange = getCommentRange(initializer);
                emitTrailingCommentsOfPosition(commentRange.pos);
            }
            emitExpression(initializer);
        }

        function emitShorthandPropertyAssignment(node: ShorthandPropertyAssignment) {
            emit(node.name);
            if (node.objectAssignmentInitializer) {
                writeSpace(); writePunctuation("="); writeSpace();
                emitExpression(node.objectAssignmentInitializer);
            }
        }

        function emitSpreadAssignment(node: SpreadAssignment) {
            if (node.expression) {
                writePunctuation("...");
                emitExpression(node.expression);
            }
        }

        //
        // Enum
        //

        function emitEnumMember(node: EnumMember) {
            emit(node.name);
            emitAsAssignmentTarget(node.initializer);
        }

        //
        // Top-level nodes
        //

        function emitSourceFile(node: SourceFile) {
            writeLine();
            const statements = node.statements;
            if (emitBodyWithDetachedComments) {
                // Emit detached comment if there are no prologue directives or if the first node is synthesized.
                // The synthesized node will have no leading comment so some comments may be missed.
                const shouldEmitDetachedComment = statements.length === 0 ||
                    !isPrologueDirective(statements[0]) ||
                    nodeIsSynthesized(statements[0]);
                if (shouldEmitDetachedComment) {
                    emitBodyWithDetachedComments(node, statements, emitSourceFileWorker);
                    return;
                }
            }
            emitSourceFileWorker(node);
        }

        function emitSourceFileWorker(node: SourceFile) {
            const statements = node.statements;
            pushNameGenerationScope();
            emitHelpersIndirect(node);
            const index = findIndex(statements, statement => !isPrologueDirective(statement));
            emitList(node, statements, ListFormat.MultiLine, index === -1 ? statements.length : index);
            popNameGenerationScope();
        }

        // Transformation nodes

        function emitPartiallyEmittedExpression(node: PartiallyEmittedExpression) {
            emitExpression(node.expression);
        }

        function emitCommaList(node: CommaListExpression) {
            emitExpressionList(node, node.elements, ListFormat.CommaListElements);
        }

        /**
         * Emits any prologue directives at the start of a Statement list, returning the
         * number of prologue directives written to the output.
         */
        function emitPrologueDirectives(statements: ReadonlyArray<Node>, startWithNewLine?: boolean, seenPrologueDirectives?: Map<true>): number {
            for (let i = 0; i < statements.length; i++) {
                const statement = statements[i];
                if (isPrologueDirective(statement)) {
                    const shouldEmitPrologueDirective = seenPrologueDirectives ? !seenPrologueDirectives.has(statement.expression.text) : true;
                    if (shouldEmitPrologueDirective) {
                        if (startWithNewLine || i > 0) {
                            writeLine();
                        }
                        emit(statement);
                        if (seenPrologueDirectives) {
                            seenPrologueDirectives.set(statement.expression.text, true);
                        }
                    }
                }
                else {
                    // return index of the first non prologue directive
                    return i;
                }
            }

            return statements.length;
        }

        function emitPrologueDirectivesIfNeeded(sourceFileOrBundle: Bundle | SourceFile) {
            if (isSourceFile(sourceFileOrBundle)) {
                setSourceFile(sourceFileOrBundle as SourceFile);
                emitPrologueDirectives((sourceFileOrBundle as SourceFile).statements);
            }
            else {
                const seenPrologueDirectives = createMap<true>();
                for (const sourceFile of (sourceFileOrBundle as Bundle).sourceFiles) {
                    setSourceFile(sourceFile);
                    emitPrologueDirectives(sourceFile.statements, /*startWithNewLine*/ true, seenPrologueDirectives);
                }
            }
        }

        function emitShebangIfNeeded(sourceFileOrBundle: Bundle | SourceFile) {
            if (isSourceFile(sourceFileOrBundle)) {
                const shebang = getShebang(sourceFileOrBundle.text);
                if (shebang) {
                    write(shebang);
                    writeLine();
                    return true;
                }
            }
            else {
                for (const sourceFile of sourceFileOrBundle.sourceFiles) {
                    // Emit only the first encountered shebang
                    if (emitShebangIfNeeded(sourceFile)) {
                        break;
                    }
                }
            }
        }

        //
        // Helpers
        //

        function emitModifiers(node: Node, modifiers: NodeArray<Modifier>) {
            if (modifiers && modifiers.length) {
                emitList(node, modifiers, ListFormat.Modifiers);
                writeSpace();
            }
        }

        function emitAsTypeAnnotation(node: Node) {
            if (node) {
                writePunctuation(":");
                writeSpace();
                emit(node);
            }
        }

        function emitAsAssignmentTarget(node: Node) {
            if (node) {
                writeSpace();
                writeOperator("=");
                writeSpace();
                emit(node);
            }
        }

        function emitWithPrefix(prefix: string, writer: (s: string) => void, node: Node) {
            emitNodeWithPrefix(prefix, writer, node, emit);
        }

        function emitExpressionWithPrefix(prefix: string, writer: (s: string) => void, node: Node) {
            emitNodeWithPrefix(prefix, writer, node, emitExpression);
        }

        function emitNodeWithPrefix(prefix: string, writer: (s: string) => void, node: Node, emit: (node: Node) => void) {
            if (node) {
                writer(prefix);
                emit(node);
            }
        }

        function emitWithTrailingSpace(node: Node) {
            if (node) {
                emit(node);
                writeSpace();
            }
        }

        function emitEmbeddedStatement(parent: Node, node: Statement) {
            if (isBlock(node) || getEmitFlags(parent) & EmitFlags.SingleLine) {
                writeSpace();
                emit(node);
            }
            else {
                writeLine();
                increaseIndent();
                emit(node);
                decreaseIndent();
            }
        }

        function emitDecorators(parentNode: Node, decorators: NodeArray<Decorator>) {
            emitList(parentNode, decorators, ListFormat.Decorators);
        }

        function emitTypeArguments(parentNode: Node, typeArguments: NodeArray<TypeNode>) {
            emitList(parentNode, typeArguments, ListFormat.TypeArguments);
        }

        function emitTypeParameters(parentNode: SignatureDeclaration | InterfaceDeclaration | TypeAliasDeclaration | ClassDeclaration | ClassExpression, typeParameters: NodeArray<TypeParameterDeclaration>) {
            if (parentNode.kind !== SyntaxKind.InterfaceDeclaration &&
                parentNode.kind !== SyntaxKind.TypeAliasDeclaration &&
                parentNode.kind !== SyntaxKind.ClassDeclaration &&
                parentNode.kind !== SyntaxKind.ClassExpression &&
                parentNode.typeArguments) { // Quick info uses type arguments in place of type parameters on instantiated signatures
                    return emitTypeArguments(parentNode, parentNode.typeArguments);
                }
            emitList(parentNode, typeParameters, ListFormat.TypeParameters);
        }

        function emitParameters(parentNode: Node, parameters: NodeArray<ParameterDeclaration>) {
            emitList(parentNode, parameters, ListFormat.Parameters);
        }

        function canEmitSimpleArrowHead(parentNode: FunctionTypeNode | ArrowFunction, parameters: NodeArray<ParameterDeclaration>) {
            const parameter = singleOrUndefined(parameters);
            return parameter
                && parameter.pos === parentNode.pos // may not have parsed tokens between parent and parameter
                && !(isArrowFunction(parentNode) && parentNode.type) // arrow function may not have return type annotation
                && !some(parentNode.decorators)     // parent may not have decorators
                && !some(parentNode.modifiers)      // parent may not have modifiers
                && !some(parentNode.typeParameters) // parent may not have type parameters
                && !some(parameter.decorators)      // parameter may not have decorators
                && !some(parameter.modifiers)       // parameter may not have modifiers
                && !parameter.dotDotDotToken        // parameter may not be rest
                && !parameter.questionToken         // parameter may not be optional
                && !parameter.type                  // parameter may not have a type annotation
                && !parameter.initializer           // parameter may not have an initializer
                && isIdentifier(parameter.name);    // parameter name must be identifier
        }

        function emitParametersForArrow(parentNode: FunctionTypeNode | ArrowFunction, parameters: NodeArray<ParameterDeclaration>) {
            if (canEmitSimpleArrowHead(parentNode, parameters)) {
                emitList(parentNode, parameters, ListFormat.Parameters & ~ListFormat.Parenthesis);
            }
            else {
                emitParameters(parentNode, parameters);
            }
        }

        function emitParametersForIndexSignature(parentNode: Node, parameters: NodeArray<ParameterDeclaration>) {
            emitList(parentNode, parameters, ListFormat.IndexSignatureParameters);
        }

        function emitList(parentNode: TextRange, children: NodeArray<Node>, format: ListFormat, start?: number, count?: number) {
            emitNodeList(emit, parentNode, children, format, start, count);
        }

        function emitExpressionList(parentNode: TextRange, children: NodeArray<Node>, format: ListFormat, start?: number, count?: number) {
            emitNodeList(emitExpression, parentNode, children, format, start, count);
        }

        function emitNodeList(emit: (node: Node) => void, parentNode: TextRange, children: NodeArray<Node>, format: ListFormat, start = 0, count = children ? children.length - start : 0) {
            const isUndefined = children === undefined;
            if (isUndefined && format & ListFormat.OptionalIfUndefined) {
                return;
            }

            const isEmpty = isUndefined || start >= children.length || count === 0;
            if (isEmpty && format & ListFormat.OptionalIfEmpty) {
                if (onBeforeEmitNodeArray) {
                    onBeforeEmitNodeArray(children);
                }
                if (onAfterEmitNodeArray) {
                    onAfterEmitNodeArray(children);
                }
                return;
            }

            if (format & ListFormat.BracketsMask) {
                writePunctuation(getOpeningBracket(format));
            }

            if (onBeforeEmitNodeArray) {
                onBeforeEmitNodeArray(children);
            }

            if (isEmpty) {
                // Write a line terminator if the parent node was multi-line
                if (format & ListFormat.MultiLine) {
                    writeLine();
                }
                else if (format & ListFormat.SpaceBetweenBraces && !(format & ListFormat.NoSpaceIfEmpty)) {
                    writeSpace();
                }
            }
            else {
                // Write the opening line terminator or leading whitespace.
                const mayEmitInterveningComments = (format & ListFormat.NoInterveningComments) === 0;
                let shouldEmitInterveningComments = mayEmitInterveningComments;
                if (shouldWriteLeadingLineTerminator(parentNode, children, format)) {
                    writeLine();
                    shouldEmitInterveningComments = false;
                }
                else if (format & ListFormat.SpaceBetweenBraces) {
                    writeSpace();
                }

                // Increase the indent, if requested.
                if (format & ListFormat.Indented) {
                    increaseIndent();
                }

                // Emit each child.
                let previousSibling: Node;
                let shouldDecreaseIndentAfterEmit: boolean;
                const delimiter = getDelimiter(format);
                for (let i = 0; i < count; i++) {
                    const child = children[start + i];

                    // Write the delimiter if this is not the first node.
                    if (previousSibling) {
                        // i.e
                        //      function commentedParameters(
                        //          /* Parameter a */
                        //          a
                        //          /* End of parameter a */ -> this comment isn't considered to be trailing comment of parameter "a" due to newline
                        //          ,
                        if (delimiter && previousSibling.end !== parentNode.end) {
                            emitLeadingCommentsOfPosition(previousSibling.end);
                        }
                        if (delimiter) {
                            if (delimiter.charAt(0) === " ") {
                                writeSpace();
                                writePunctuation(delimiter.charAt(1));
                            }
                            else {
                                writePunctuation(delimiter);
                            }
                        }

                        // Write either a line terminator or whitespace to separate the elements.
                        if (shouldWriteSeparatingLineTerminator(previousSibling, child, format)) {
                            // If a synthesized node in a single-line list starts on a new
                            // line, we should increase the indent.
                            if ((format & (ListFormat.LinesMask | ListFormat.Indented)) === ListFormat.SingleLine) {
                                increaseIndent();
                                shouldDecreaseIndentAfterEmit = true;
                            }

                            writeLine();
                            shouldEmitInterveningComments = false;
                        }
                        else if (previousSibling && format & ListFormat.SpaceBetweenSiblings) {
                            writeSpace();
                        }
                    }

                    // Emit this child.
                    if (shouldEmitInterveningComments) {
                        if (emitTrailingCommentsOfPosition) {
                            const commentRange = getCommentRange(child);
                            emitTrailingCommentsOfPosition(commentRange.pos);
                        }
                    }
                    else {
                        shouldEmitInterveningComments = mayEmitInterveningComments;
                    }

                    emit(child);

                    if (shouldDecreaseIndentAfterEmit) {
                        decreaseIndent();
                        shouldDecreaseIndentAfterEmit = false;
                    }

                    previousSibling = child;
                }

                // Write a trailing comma, if requested.
                const hasTrailingComma = (format & ListFormat.AllowTrailingComma) && children.hasTrailingComma;
                if (format & ListFormat.CommaDelimited && hasTrailingComma) {
                    writePunctuation(",");
                }


                // Emit any trailing comment of the last element in the list
                // i.e
                //       var array = [...
                //          2
                //          /* end of element 2 */
                //       ];
                if (previousSibling && delimiter && previousSibling.end !== parentNode.end && !(getEmitFlags(previousSibling) & EmitFlags.NoTrailingComments)) {
                    emitLeadingCommentsOfPosition(previousSibling.end);
                }

                // Decrease the indent, if requested.
                if (format & ListFormat.Indented) {
                    decreaseIndent();
                }

                // Write the closing line terminator or closing whitespace.
                if (shouldWriteClosingLineTerminator(parentNode, children, format)) {
                    writeLine();
                }
                else if (format & ListFormat.SpaceBetweenBraces) {
                    writeSpace();
                }
            }

            if (onAfterEmitNodeArray) {
                onAfterEmitNodeArray(children);
            }

            if (format & ListFormat.BracketsMask) {
                writePunctuation(getClosingBracket(format));
            }
        }

        function commitPendingSemicolon() {
            if (pendingSemicolon) {
                writer.writePunctuation(";");
            }
            pendingSemicolon = false;
        }

        function writeLiteral(s: string) {
            commitPendingSemicolon();
            writer.writeLiteral(s);
        }

        function writeStringLiteral(s: string) {
            commitPendingSemicolon();
            writer.writeStringLiteral(s);
        }

        function writeBase(s: string) {
            commitPendingSemicolon();
            writer.write(s);
        }

        function writeSymbol(s: string, sym: Symbol) {
            commitPendingSemicolon();
            writer.writeSymbol(s, sym);
        }

        function writePunctuation(s: string) {
            commitPendingSemicolon();
            if (printerOptions.omitTrailingSemicolon && s === ";") {
                pendingSemicolon = true;
                return;
            }
            writer.writePunctuation(s);
        }

        function writeKeyword(s: string) {
            commitPendingSemicolon();
            writer.writeKeyword(s);
        }

        function writeOperator(s: string) {
            commitPendingSemicolon();
            writer.writeOperator(s);
        }

        function writeParameter(s: string) {
            commitPendingSemicolon();
            writer.writeParameter(s);
        }

        function writeSpace() {
            commitPendingSemicolon();
            writer.writeSpace(" ");
        }

        function writeProperty(s: string) {
            commitPendingSemicolon();
            writer.writeProperty(s);
        }

        function writeLine() {
            commitPendingSemicolon();
            writer.writeLine();
        }

        function increaseIndent() {
            commitPendingSemicolon();
            writer.increaseIndent();
        }

        function decreaseIndent() {
            commitPendingSemicolon();
            writer.decreaseIndent();
        }

        function writeIfAny(nodes: NodeArray<Node>, text: string, writer: (s: string) => void) {
            if (some(nodes)) {
                writer(text);
            }
        }

        function writeToken(token: SyntaxKind, pos: number, writer: (s: string) => void, contextNode?: Node) {
            return onEmitSourceMapOfToken
                ? onEmitSourceMapOfToken(contextNode, token, writer, pos, writeTokenText)
                : writeTokenText(token, writer, pos);
        }

        function writeTokenNode(node: Node, writer: (s: string) => void) {
            if (onBeforeEmitToken) {
                onBeforeEmitToken(node);
            }
            writer(tokenToString(node.kind));
            if (onAfterEmitToken) {
                onAfterEmitToken(node);
            }
        }

        function writeTokenText(token: SyntaxKind, writer: (s: string) => void, pos?: number) {
            const tokenString = tokenToString(token);
            writer(tokenString);
            return pos < 0 ? pos : pos + tokenString.length;
        }

        function writeLineOrSpace(node: Node) {
            if (getEmitFlags(node) & EmitFlags.SingleLine) {
                writeSpace();
            }
            else {
                writeLine();
            }
        }

        function writeLines(text: string): void {
            const lines = text.split(/\r\n?|\n/g);
            const indentation = guessIndentation(lines);
            for (let i = 0; i < lines.length; i++) {
                const line = indentation ? lines[i].slice(indentation) : lines[i];
                if (line.length) {
                    writeLine();
                    write(line);
                    writeLine();
                }
            }
        }

        function guessIndentation(lines: string[]) {
            let indentation: number;
            for (const line of lines) {
                for (let i = 0; i < line.length && (indentation === undefined || i < indentation); i++) {
                    if (!isWhiteSpaceLike(line.charCodeAt(i))) {
                        if (indentation === undefined || i < indentation) {
                            indentation = i;
                            break;
                        }
                    }
                }
            }
            return indentation;
        }

        function increaseIndentIf(value: boolean, valueToWriteWhenNotIndenting?: string) {
            if (value) {
                increaseIndent();
                writeLine();
            }
            else if (valueToWriteWhenNotIndenting) {
                write(valueToWriteWhenNotIndenting);
            }
        }

        // Helper function to decrease the indent if we previously indented.  Allows multiple
        // previous indent values to be considered at a time.  This also allows caller to just
        // call this once, passing in all their appropriate indent values, instead of needing
        // to call this helper function multiple times.
        function decreaseIndentIf(value1: boolean, value2?: boolean) {
            if (value1) {
                decreaseIndent();
            }
            if (value2) {
                decreaseIndent();
            }
        }

        function shouldWriteLeadingLineTerminator(parentNode: TextRange, children: NodeArray<Node>, format: ListFormat) {
            if (format & ListFormat.MultiLine) {
                return true;
            }

            if (format & ListFormat.PreserveLines) {
                if (format & ListFormat.PreferNewLine) {
                    return true;
                }

                const firstChild = children[0];
                if (firstChild === undefined) {
                    return !rangeIsOnSingleLine(parentNode, currentSourceFile);
                }
                else if (positionIsSynthesized(parentNode.pos) || nodeIsSynthesized(firstChild)) {
                    return synthesizedNodeStartsOnNewLine(firstChild, format);
                }
                else {
                    return !rangeStartPositionsAreOnSameLine(parentNode, firstChild, currentSourceFile);
                }
            }
            else {
                return false;
            }
        }

        function shouldWriteSeparatingLineTerminator(previousNode: Node, nextNode: Node, format: ListFormat) {
            if (format & ListFormat.MultiLine) {
                return true;
            }
            else if (format & ListFormat.PreserveLines) {
                if (previousNode === undefined || nextNode === undefined) {
                    return false;
                }
                else if (nodeIsSynthesized(previousNode) || nodeIsSynthesized(nextNode)) {
                    return synthesizedNodeStartsOnNewLine(previousNode, format) || synthesizedNodeStartsOnNewLine(nextNode, format);
                }
                else {
                    return !rangeEndIsOnSameLineAsRangeStart(previousNode, nextNode, currentSourceFile);
                }
            }
            else {
                return nextNode.startsOnNewLine;
            }
        }

        function shouldWriteClosingLineTerminator(parentNode: TextRange, children: NodeArray<Node>, format: ListFormat) {
            if (format & ListFormat.MultiLine) {
                return (format & ListFormat.NoTrailingNewLine) === 0;
            }
            else if (format & ListFormat.PreserveLines) {
                if (format & ListFormat.PreferNewLine) {
                    return true;
                }

                const lastChild = lastOrUndefined(children);
                if (lastChild === undefined) {
                    return !rangeIsOnSingleLine(parentNode, currentSourceFile);
                }
                else if (positionIsSynthesized(parentNode.pos) || nodeIsSynthesized(lastChild)) {
                    return synthesizedNodeStartsOnNewLine(lastChild, format);
                }
                else {
                    return !rangeEndPositionsAreOnSameLine(parentNode, lastChild, currentSourceFile);
                }
            }
            else {
                return false;
            }
        }

        function synthesizedNodeStartsOnNewLine(node: Node, format?: ListFormat) {
            if (nodeIsSynthesized(node)) {
                const startsOnNewLine = node.startsOnNewLine;
                if (startsOnNewLine === undefined) {
                    return (format & ListFormat.PreferNewLine) !== 0;
                }

                return startsOnNewLine;
            }

            return (format & ListFormat.PreferNewLine) !== 0;
        }

        function needsIndentation(parent: Node, node1: Node, node2: Node): boolean {
            parent = skipSynthesizedParentheses(parent);
            node1 = skipSynthesizedParentheses(node1);
            node2 = skipSynthesizedParentheses(node2);

            // Always use a newline for synthesized code if the synthesizer desires it.
            if (node2.startsOnNewLine) {
                return true;
            }

            return !nodeIsSynthesized(parent)
                && !nodeIsSynthesized(node1)
                && !nodeIsSynthesized(node2)
                && !rangeEndIsOnSameLineAsRangeStart(node1, node2, currentSourceFile);
        }

        function isEmptyBlock(block: BlockLike) {
            return block.statements.length === 0
                && rangeEndIsOnSameLineAsRangeStart(block, block, currentSourceFile);
        }

        function skipSynthesizedParentheses(node: Node) {
            while (node.kind === SyntaxKind.ParenthesizedExpression && nodeIsSynthesized(node)) {
                node = (<ParenthesizedExpression>node).expression;
            }

            return node;
        }

        function getTextOfNode(node: Node, includeTrivia?: boolean): string {
            if (isGeneratedIdentifier(node)) {
                return generateName(node);
            }
            else if (isIdentifier(node) && (nodeIsSynthesized(node) || !node.parent)) {
                return idText(node);
            }
            else if (node.kind === SyntaxKind.StringLiteral && (<StringLiteral>node).textSourceNode) {
                return getTextOfNode((<StringLiteral>node).textSourceNode, includeTrivia);
            }
            else if (isLiteralExpression(node) && (nodeIsSynthesized(node) || !node.parent)) {
                return node.text;
            }

            return getSourceTextOfNodeFromSourceFile(currentSourceFile, node, includeTrivia);
        }

        function getLiteralTextOfNode(node: LiteralLikeNode): string {
            if (node.kind === SyntaxKind.StringLiteral && (<StringLiteral>node).textSourceNode) {
                const textSourceNode = (<StringLiteral>node).textSourceNode;
                if (isIdentifier(textSourceNode)) {
                    return getEmitFlags(node) & EmitFlags.NoAsciiEscaping ?
                        `"${escapeString(getTextOfNode(textSourceNode))}"` :
                        `"${escapeNonAsciiString(getTextOfNode(textSourceNode))}"`;
                }
                else {
                    return getLiteralTextOfNode(textSourceNode);
                }
            }

            return getLiteralText(node, currentSourceFile);
        }

        /**
         * Push a new name generation scope.
         */
        function pushNameGenerationScope() {
            tempFlagsStack.push(tempFlags);
            tempFlags = 0;
        }

        /**
         * Pop the current name generation scope.
         */
        function popNameGenerationScope() {
            tempFlags = tempFlagsStack.pop();
        }

        /**
         * Generate the text for a generated identifier.
         */
        function generateName(name: GeneratedIdentifier) {
            if (name.autoGenerateKind === GeneratedIdentifierKind.Node) {
                // Node names generate unique names based on their original node
                // and are cached based on that node's id.
                const node = getNodeForGeneratedName(name);
                return generateNameCached(node);
            }
            else {
                // Auto, Loop, and Unique names are cached based on their unique
                // autoGenerateId.
                const autoGenerateId = name.autoGenerateId;
                return autoGeneratedIdToGeneratedName[autoGenerateId] || (autoGeneratedIdToGeneratedName[autoGenerateId] = makeName(name));
            }
        }

        function generateNameCached(node: Node) {
            const nodeId = getNodeId(node);
            return nodeIdToGeneratedName[nodeId] || (nodeIdToGeneratedName[nodeId] = generateNameForNode(node));
        }

        /**
         * Returns a value indicating whether a name is unique globally, within the current file,
         * or within the NameGenerator.
         */
        function isUniqueName(name: string): boolean {
            return !(hasGlobalName && hasGlobalName(name))
                && !currentSourceFile.identifiers.has(name)
                && !generatedNames.has(name);
        }

        /**
         * Returns a value indicating whether a name is unique within a container.
         */
        function isUniqueLocalName(name: string, container: Node): boolean {
            for (let node = container; isNodeDescendantOf(node, container); node = node.nextContainer) {
                if (node.locals) {
                    const local = node.locals.get(escapeLeadingUnderscores(name));
                    // We conservatively include alias symbols to cover cases where they're emitted as locals
                    if (local && local.flags & (SymbolFlags.Value | SymbolFlags.ExportValue | SymbolFlags.Alias)) {
                        return false;
                    }
                }
            }
            return true;
        }

        /**
         * Return the next available name in the pattern _a ... _z, _0, _1, ...
         * TempFlags._i or TempFlags._n may be used to express a preference for that dedicated name.
         * Note that names generated by makeTempVariableName and makeUniqueName will never conflict.
         */
        function makeTempVariableName(flags: TempFlags): string {
            if (flags && !(tempFlags & flags)) {
                const name = flags === TempFlags._i ? "_i" : "_n";
                if (isUniqueName(name)) {
                    tempFlags |= flags;
                    return name;
                }
            }
            while (true) {
                const count = tempFlags & TempFlags.CountMask;
                tempFlags++;
                // Skip over 'i' and 'n'
                if (count !== 8 && count !== 13) {
                    const name = count < 26
                        ? "_" + String.fromCharCode(CharacterCodes.a + count)
                        : "_" + (count - 26);
                    if (isUniqueName(name)) {
                        return name;
                    }
                }
            }
        }

        /**
         * Generate a name that is unique within the current file and doesn't conflict with any names
         * in global scope. The name is formed by adding an '_n' suffix to the specified base name,
         * where n is a positive integer. Note that names generated by makeTempVariableName and
         * makeUniqueName are guaranteed to never conflict.
         */
        function makeUniqueName(baseName: string): string {
            // Find the first unique 'name_n', where n is a positive number
            if (baseName.charCodeAt(baseName.length - 1) !== CharacterCodes._) {
                baseName += "_";
            }
            let i = 1;
            while (true) {
                const generatedName = baseName + i;
                if (isUniqueName(generatedName)) {
                    generatedNames.set(generatedName, true);
                    return generatedName;
                }
                i++;
            }
        }

        /**
         * Generates a unique name for a ModuleDeclaration or EnumDeclaration.
         */
        function generateNameForModuleOrEnum(node: ModuleDeclaration | EnumDeclaration) {
            const name = getTextOfNode(node.name);
            // Use module/enum name itself if it is unique, otherwise make a unique variation
            return isUniqueLocalName(name, node) ? name : makeUniqueName(name);
        }

        /**
         * Generates a unique name for an ImportDeclaration or ExportDeclaration.
         */
        function generateNameForImportOrExportDeclaration(node: ImportDeclaration | ExportDeclaration) {
            const expr = getExternalModuleName(node);
            const baseName = isStringLiteral(expr) ?
                makeIdentifierFromModuleName(expr.text) : "module";
            return makeUniqueName(baseName);
        }

        /**
         * Generates a unique name for a default export.
         */
        function generateNameForExportDefault() {
            return makeUniqueName("default");
        }

        /**
         * Generates a unique name for a class expression.
         */
        function generateNameForClassExpression() {
            return makeUniqueName("class");
        }

        function generateNameForMethodOrAccessor(node: MethodDeclaration | AccessorDeclaration) {
            if (isIdentifier(node.name)) {
                return generateNameCached(node.name);
            }
            return makeTempVariableName(TempFlags.Auto);
        }

        /**
         * Generates a unique name from a node.
         */
        function generateNameForNode(node: Node): string {
            switch (node.kind) {
                case SyntaxKind.Identifier:
                    return makeUniqueName(getTextOfNode(node));
                case SyntaxKind.ModuleDeclaration:
                case SyntaxKind.EnumDeclaration:
                    return generateNameForModuleOrEnum(<ModuleDeclaration | EnumDeclaration>node);
                case SyntaxKind.ImportDeclaration:
                case SyntaxKind.ExportDeclaration:
                    return generateNameForImportOrExportDeclaration(<ImportDeclaration | ExportDeclaration>node);
                case SyntaxKind.FunctionDeclaration:
                case SyntaxKind.ClassDeclaration:
                case SyntaxKind.ExportAssignment:
                    return generateNameForExportDefault();
                case SyntaxKind.ClassExpression:
                    return generateNameForClassExpression();
                case SyntaxKind.MethodDeclaration:
                case SyntaxKind.GetAccessor:
                case SyntaxKind.SetAccessor:
                    return generateNameForMethodOrAccessor(<MethodDeclaration | AccessorDeclaration>node);
                default:
                    return makeTempVariableName(TempFlags.Auto);
            }
        }

        /**
         * Generates a unique identifier for a node.
         */
        function makeName(name: GeneratedIdentifier) {
            switch (name.autoGenerateKind) {
                case GeneratedIdentifierKind.Auto:
                    return makeTempVariableName(TempFlags.Auto);
                case GeneratedIdentifierKind.Loop:
                    return makeTempVariableName(TempFlags._i);
                case GeneratedIdentifierKind.Unique:
                    return makeUniqueName(idText(name));
            }

            Debug.fail("Unsupported GeneratedIdentifierKind.");
        }

        /**
         * Gets the node from which a name should be generated.
         */
        function getNodeForGeneratedName(name: GeneratedIdentifier) {
            const autoGenerateId = name.autoGenerateId;
            let node = name as Node;
            let original = node.original;
            while (original) {
                node = original;

                // if "node" is a different generated name (having a different
                // "autoGenerateId"), use it and stop traversing.
                if (isIdentifier(node)
                    && node.autoGenerateKind === GeneratedIdentifierKind.Node
                    && node.autoGenerateId !== autoGenerateId) {
                    break;
                }

                original = node.original;
            }

            // otherwise, return the original node for the source;
            return node;
        }
    }

    function createDelimiterMap() {
        const delimiters: string[] = [];
        delimiters[ListFormat.None] = "";
        delimiters[ListFormat.CommaDelimited] = ",";
        delimiters[ListFormat.BarDelimited] = " |";
        delimiters[ListFormat.AmpersandDelimited] = " &";
        return delimiters;
    }

    function getDelimiter(format: ListFormat) {
        return delimiters[format & ListFormat.DelimitersMask];
    }

    function createBracketsMap() {
        const brackets: string[][] = [];
        brackets[ListFormat.Braces] = ["{", "}"];
        brackets[ListFormat.Parenthesis] = ["(", ")"];
        brackets[ListFormat.AngleBrackets] = ["<", ">"];
        brackets[ListFormat.SquareBrackets] = ["[", "]"];
        return brackets;
    }

    function getOpeningBracket(format: ListFormat) {
        return brackets[format & ListFormat.BracketsMask][0];
    }

    function getClosingBracket(format: ListFormat) {
        return brackets[format & ListFormat.BracketsMask][1];
    }

    // Flags enum to track count of temp variables and a few dedicated names
    const enum TempFlags {
        Auto = 0x00000000,  // No preferred name
        CountMask = 0x0FFFFFFF,  // Temp variable counter
        _i = 0x10000000,  // Use/preference flag for '_i'
    }

    export const enum ListFormat {
        None = 0,

        // Line separators
        SingleLine = 0,                 // Prints the list on a single line (default).
        MultiLine = 1 << 0,             // Prints the list on multiple lines.
        PreserveLines = 1 << 1,         // Prints the list using line preservation if possible.
        LinesMask = SingleLine | MultiLine | PreserveLines,

        // Delimiters
        NotDelimited = 0,               // There is no delimiter between list items (default).
        BarDelimited = 1 << 2,          // Each list item is space-and-bar (" |") delimited.
        AmpersandDelimited = 1 << 3,    // Each list item is space-and-ampersand (" &") delimited.
        CommaDelimited = 1 << 4,        // Each list item is comma (",") delimited.
        DelimitersMask = BarDelimited | AmpersandDelimited | CommaDelimited,

        AllowTrailingComma = 1 << 5,    // Write a trailing comma (",") if present.

        // Whitespace
        Indented = 1 << 6,              // The list should be indented.
        SpaceBetweenBraces = 1 << 7,    // Inserts a space after the opening brace and before the closing brace.
        SpaceBetweenSiblings = 1 << 8,  // Inserts a space between each sibling node.

        // Brackets/Braces
        Braces = 1 << 9,                // The list is surrounded by "{" and "}".
        Parenthesis = 1 << 10,          // The list is surrounded by "(" and ")".
        AngleBrackets = 1 << 11,        // The list is surrounded by "<" and ">".
        SquareBrackets = 1 << 12,       // The list is surrounded by "[" and "]".
        BracketsMask = Braces | Parenthesis | AngleBrackets | SquareBrackets,

        OptionalIfUndefined = 1 << 13,  // Do not emit brackets if the list is undefined.
        OptionalIfEmpty = 1 << 14,      // Do not emit brackets if the list is empty.
        Optional = OptionalIfUndefined | OptionalIfEmpty,

        // Other
        PreferNewLine = 1 << 15,        // Prefer adding a LineTerminator between synthesized nodes.
        NoTrailingNewLine = 1 << 16,    // Do not emit a trailing NewLine for a MultiLine list.
        NoInterveningComments = 1 << 17, // Do not emit comments between each node

        NoSpaceIfEmpty = 1 << 18,       // If the literal is empty, do not add spaces between braces.
        SingleElement = 1 << 19,

        // Precomputed Formats
        Modifiers = SingleLine | SpaceBetweenSiblings | NoInterveningComments,
        HeritageClauses = SingleLine | SpaceBetweenSiblings,
        SingleLineTypeLiteralMembers = SingleLine | SpaceBetweenBraces | SpaceBetweenSiblings | Indented,
        MultiLineTypeLiteralMembers = MultiLine | Indented,

        TupleTypeElements = CommaDelimited | SpaceBetweenSiblings | SingleLine | Indented,
        UnionTypeConstituents = BarDelimited | SpaceBetweenSiblings | SingleLine,
        IntersectionTypeConstituents = AmpersandDelimited | SpaceBetweenSiblings | SingleLine,
        ObjectBindingPatternElements = SingleLine | AllowTrailingComma | SpaceBetweenBraces | CommaDelimited | SpaceBetweenSiblings,
        ArrayBindingPatternElements = SingleLine | AllowTrailingComma | CommaDelimited | SpaceBetweenSiblings,
        ObjectLiteralExpressionProperties = PreserveLines | CommaDelimited | SpaceBetweenSiblings | SpaceBetweenBraces | Indented | Braces | NoSpaceIfEmpty,
        ArrayLiteralExpressionElements = PreserveLines | CommaDelimited | SpaceBetweenSiblings | AllowTrailingComma | Indented | SquareBrackets,
        CommaListElements = CommaDelimited | SpaceBetweenSiblings | SingleLine,
        CallExpressionArguments = CommaDelimited | SpaceBetweenSiblings | SingleLine | Parenthesis,
        NewExpressionArguments = CommaDelimited | SpaceBetweenSiblings | SingleLine | Parenthesis | OptionalIfUndefined,
        TemplateExpressionSpans = SingleLine | NoInterveningComments,
        SingleLineBlockStatements = SpaceBetweenBraces | SpaceBetweenSiblings | SingleLine,
        MultiLineBlockStatements = Indented | MultiLine,
        VariableDeclarationList = CommaDelimited | SpaceBetweenSiblings | SingleLine,
        SingleLineFunctionBodyStatements = SingleLine | SpaceBetweenSiblings | SpaceBetweenBraces,
        MultiLineFunctionBodyStatements = MultiLine,
        ClassHeritageClauses = SingleLine | SpaceBetweenSiblings,
        ClassMembers = Indented | MultiLine,
        InterfaceMembers = Indented | MultiLine,
        EnumMembers = CommaDelimited | Indented | MultiLine,
        CaseBlockClauses = Indented | MultiLine,
        NamedImportsOrExportsElements = CommaDelimited | SpaceBetweenSiblings | AllowTrailingComma | SingleLine | SpaceBetweenBraces,
        JsxElementChildren = SingleLine | NoInterveningComments,
        JsxElementAttributes = SingleLine | SpaceBetweenSiblings | NoInterveningComments,
        CaseOrDefaultClauseStatements = Indented | MultiLine | NoTrailingNewLine | OptionalIfEmpty,
        HeritageClauseTypes = CommaDelimited | SpaceBetweenSiblings | SingleLine,
        SourceFileStatements = MultiLine | NoTrailingNewLine,
        Decorators = MultiLine | Optional,
        TypeArguments = CommaDelimited | SpaceBetweenSiblings | SingleLine | AngleBrackets | Optional,
        TypeParameters = CommaDelimited | SpaceBetweenSiblings | SingleLine | AngleBrackets | Optional,
        Parameters = CommaDelimited | SpaceBetweenSiblings | SingleLine | Parenthesis,
        IndexSignatureParameters = CommaDelimited | SpaceBetweenSiblings | SingleLine | Indented | SquareBrackets,
    }
}
