namespace ts {
    export type LintErrorMethod = {
        /**
         * @param {string} err The error message to report
         */
        (err: string): void;
        /**
         * @param {string} err The error message to report
         * @param {Node} span The node on which to position the error
         */
        (err: string, span: Node): void;
        /**
         * @param {string} err The error message to report
         * @param {number} start The start position of the error span
         * @param {number} length The length of the error span
         */
        (err: string, start: number, length: number): void;
        /**
         * @param {string} shortname A short code uniquely identifying the error within the lint
         * @param {string} err The error message to report
         */
        (shortname: string, err: string): void;
        /**
         * @param {string} shortname A short code uniquely identifying the error within the lint
         * @param {string} err The error message to report
         * @param {Node} span The node on which to position the error
         */
        (shortname: string, err: string, span: Node): void;
        /**
         * @param {string} shortname A short code uniquely identifying the error within the lint
         * @param {string} err The error message to report
         * @param {number} start The start position of the error span
         * @param {number} length The length of the error span
         */
        (shortname: string, err: string, start: number, length: number): void;
        /**
         * @param {DiagnosticCategory} level The error level to report this error as (Message, Warning, or Error)
         * @param {string} err The error message to report
         */
        (level: DiagnosticCategory, err: string): void;
        /**
         * @param {DiagnosticCategory} level The error level to report this error as (Message, Warning, or Error)
         * @param {string} err The error message to report
         * @param {Node} span The node on which to position the error
         */
        (level: DiagnosticCategory, err: string, span: Node): void;
        /**
         * @param {DiagnosticCategory} level The error level to report this error as (Message, Warning, or Error)
         * @param {string} err The error message to report
         * @param {number} start The start position of the error span
         * @param {number} length The length of the error span
         */
        (level: DiagnosticCategory, err: string, start: number, length: number): void;
        /**
         * @param {DiagnosticCategory} level The error level to report this error as (Message, Warning, or Error)
         * @param {string} shortname A short code uniquely identifying the error within the lint
         * @param {string} err The error message to report
         */
        (level: DiagnosticCategory, shortname: string, err: string): void;
        /**
         * @param {DiagnosticCategory} level The error level to report this error as (Message, Warning, or Error)
         * @param {string} shortname A short code uniquely identifying the error within the lint
         * @param {string} err The error message to report
         * @param {Node} span The node on which to position the error
         */
        (level: DiagnosticCategory, shortname: string, err: string, span: Node): void;
        /**
         * @param {DiagnosticCategory} level The error level to report this error as (Message, Warning, or Error)
         * @param {string} shortname A short code uniquely identifying the error within the lint
         * @param {string} err The error message to report
         * @param {number} start The start position of the error span
         * @param {number} length The length of the error span
         */
        (level: DiagnosticCategory, shortname: string, err: string, start: number, length: number): void;
    };

    /*
    * Walkers call stop to halt recursion into the node's children
    * Walkers call error to add errors to the output.
    */
    export interface LintWalker {
        /**
         * @param {Node} node The current node being visited (starts at every SourceFile and recurs into their children)
         * @param {LintErrorMethod} error A callback to add errors to the output
         * @returns boolean true if this lint no longer needs to recur into the active node
         */
        visit(node: Node, error: LintErrorMethod): boolean | void;
        /**
         * Yar
         * @param {Node} node The current node which has just finished being visited
         * @param {LintErrorMethod} error A callback to add errors to the output
         */
        afterVisit?(node: Node, error: LintErrorMethod): void;
    }

    export interface BaseProviderStatic {
        readonly ["extension-kind"]: ExtensionKind;
    }

    export interface SyntacticLintProviderStatic extends BaseProviderStatic {
        readonly ["extension-kind"]: ExtensionKind.SyntacticLint;
        new (state: {ts: typeof ts, args: any, host: CompilerHost, program: Program}): LintWalker;
    }

    export interface SemanticLintProviderStatic extends BaseProviderStatic {
        readonly ["extension-kind"]: ExtensionKind.SemanticLint;
        new (state: {ts: typeof ts, args: any, host: CompilerHost, program: Program, checker: TypeChecker}): LintWalker;
    }

    export interface LanguageServiceHost {} // The members for these interfaces are provided in the services layer
    export interface LanguageService {}
    export interface LanguageServiceProvider {}
    export interface DocumentRegistry {}

    export interface LanguageServiceProviderStatic extends BaseProviderStatic {
        readonly ["extension-kind"]: ExtensionKind.LanguageService;
        new (state: { ts: typeof ts, args: any, host: LanguageServiceHost, service: LanguageService, registry: DocumentRegistry }): LanguageServiceProvider;
    }

    export namespace ExtensionKind {
        export const SemanticLint: "semantic-lint" = "semantic-lint";
        export type SemanticLint = "semantic-lint";
        export const SyntacticLint: "syntactic-lint" = "syntactic-lint";
        export type SyntacticLint = "syntactic-lint";
        export const LanguageService: "language-service" = "language-service";
        export type LanguageService = "language-service";
        export const TypeDiscovery: "type-discovery" = "type-discovery";
        export type TypeDiscovery = "type-discovery";
    }
    export type ExtensionKind = ExtensionKind.SemanticLint | ExtensionKind.SyntacticLint | ExtensionKind.LanguageService | ExtensionKind.TypeDiscovery;

    export interface ExtensionCollectionMap {
        "syntactic-lint"?: SyntacticLintExtension[];
        "semantic-lint"?: SemanticLintExtension[];
        "language-service"?: LanguageServiceExtension[];
        "type-discovery"?: TypeDiscoveryExtension[];
        [index: string]: Extension[] | undefined;
    }

    export interface ExtensionBase {
        name: string;
        args: any;
        kind: ExtensionKind;
    }

    export interface ProfileData {
        globalBucket: string;
        task: string;
        start: number;
        length?: number;
    }

    export interface SyntacticLintExtension extends ExtensionBase {
        kind: ExtensionKind.SyntacticLint;
        ctor: SyntacticLintProviderStatic;
    }

    export interface SemanticLintExtension extends ExtensionBase {
        kind: ExtensionKind.SemanticLint;
        ctor: SemanticLintProviderStatic;
    }

    export interface LanguageServiceExtension extends ExtensionBase {
        kind: ExtensionKind.LanguageService;
        ctor: LanguageServiceProviderStatic;
    }

    export interface TypeDiscoveryExtension extends ExtensionBase {
        kind: ExtensionKind.TypeDiscovery;
        lookup: (searchDir: string, args: any) => string[];
    }

    export type Extension = SyntacticLintExtension | SemanticLintExtension | LanguageServiceExtension | TypeDiscoveryExtension;

    export interface ExtensionCache {
        getCompilerExtensions(): ExtensionCollectionMap;
        getExtensionLoadingDiagnostics(): Diagnostic[];
    }

    export interface ExtensionHost extends ModuleResolutionHost {
        loadExtension?(name: string): any;
    }

    export interface Program {
        /**
         * Gets a map of loaded compiler extensions
         */
        getCompilerExtensions(): ExtensionCollectionMap;
    }

    /* @internal */
    export interface TypeCheckerHost {
        getCompilerExtensions(): ExtensionCollectionMap;
    }

    export const perfTraces: Map<ProfileData> = {};

    function getExtensionRootName(qualifiedName: string) {
        return qualifiedName.substring(0, qualifiedName.indexOf("[")) || qualifiedName;
    }

    function createTaskName(qualifiedName: string, task: string) {
        return `${task}|${qualifiedName}`;
    }

    export function startProfile(enabled: boolean, key: string, bucket?: string) {
        if (!enabled) return;
        performance.emit(`start|${key}`);
        perfTraces[key] = {
            task: key,
            start: performance.mark(),
            length: undefined,
            globalBucket: bucket
        };
    }

    export function completeProfile(enabled: boolean, key: string) {
        if (!enabled) return;
        Debug.assert(!!perfTraces[key], "Completed profile did not have a corresponding start.");
        perfTraces[key].length = performance.measure(perfTraces[key].globalBucket, perfTraces[key].start);
        performance.emit(`end|${key}`);
    }

    export function startExtensionProfile(enabled: boolean, qualifiedName: string, task: string) {
        if (!enabled) return;
        const longTask = createTaskName(qualifiedName, task);
        startProfile(/*enabled*/true, longTask, getExtensionRootName(qualifiedName));
    }

    export function completeExtensionProfile(enabled: boolean, qualifiedName: string, task: string) {
        if (!enabled) return;
        const longTask = createTaskName(qualifiedName, task);
        completeProfile(/*enabled*/true, longTask);
    }

    function verifyType(thing: any, type: string, diagnostics: Diagnostic[], extName: string, extMember: string, extKind: ExtensionKind) {
        if (typeof thing !== type) {
            diagnostics.push(createCompilerDiagnostic(
                Diagnostics.Extension_0_exported_member_1_has_extension_kind_2_but_was_type_3_when_type_4_was_expected,
                extName,
                extMember,
                extKind,
                typeof thing,
                type
            ));
            return false;
        }
        return true;
    }

    export function createExtensionCache(options: CompilerOptions, host: ExtensionHost, resolvedExtensionNames?: Map<string>): ExtensionCache {

        const diagnostics: Diagnostic[] = [];
        const extOptions = options.extensions;
        const extensionNames = (extOptions instanceof Array) ? extOptions : getKeys(extOptions);
        // Eagerly evaluate extension paths, but lazily execute their contents
        resolvedExtensionNames = resolvedExtensionNames || resolveExtensionNames();
        let extensions: ExtensionCollectionMap;

        const cache: ExtensionCache = {
            getCompilerExtensions: () => {
                if (!extensions) {
                    extensions = collectCompilerExtensions();
                }
                return extensions;
            },
            getExtensionLoadingDiagnostics: () => {
                // To get extension loading diagnostics, we need to make sure we've actually loaded them
                cache.getCompilerExtensions();
                return diagnostics;
            },
        };
        return cache;

        function resolveExtensionNames(): Map<string> {
            const currentDirectory = host.getCurrentDirectory ? host.getCurrentDirectory() : "";
            const extMap: Map<string> = {};
            forEach(extensionNames, name => {
                const resolved = resolveModuleName(name, combinePaths(currentDirectory, "tsconfig.json"), options, host, /*loadJs*/true).resolvedModule;
                if (resolved) {
                    extMap[name] = resolved.resolvedFileName;
                }
            });
            return extMap;
        }

        function collectCompilerExtensions(): ExtensionCollectionMap {
            const profilingEnabled = options.extendedDiagnostics;
            const extensionLoadResults = map(extensionNames, (name) => {
                const resolved = resolvedExtensionNames[name];
                let result: any;
                let error: any;
                if (!resolved) {
                    error = new Error(`Host could not locate extension '${name}'.`);
                }
                if (resolved && host.loadExtension) {
                    try {
                        startProfile(profilingEnabled, name, name);
                        result = host.loadExtension(resolved);
                        completeProfile(profilingEnabled, name);
                    }
                    catch (e) {
                        error = e;
                    }
                }
                else if (!host.loadExtension) {
                    error = new Error("Extension loading not implemented in host!");
                }
                if (error) {
                    diagnostics.push(createCompilerDiagnostic(Diagnostics.Extension_loading_failed_with_error_0, error));
                }
                return { name, result, error };
            });
            const successfulExtensionLoadResults = filter(extensionLoadResults, res => !res.error);
            const preparedExtensionObjects = map(successfulExtensionLoadResults, res => {
                if (!res.result) {
                    return [];
                }
                const aggregate: Extension[] = [];
                forEachKey(res.result, key => {
                    const potentialExtension = res.result[key] as BaseProviderStatic;
                    if (!potentialExtension) {
                        return; // Avoid errors on explicitly exported null/undefined (why would someone do that, though?)
                    }
                    const annotatedKind = potentialExtension["extension-kind"];
                    if (typeof annotatedKind !== "string") {
                        return;
                    }
                    const ext: ExtensionBase = {
                        name: key !== "default" ? `${res.name}[${key}]` : res.name,
                        args: extensionNames === extOptions ? undefined : (extOptions as Map<any>)[res.name],
                        kind: annotatedKind,
                    };
                    switch (ext.kind) {
                        case ExtensionKind.SemanticLint:
                        case ExtensionKind.SyntacticLint:
                        case ExtensionKind.LanguageService: {
                            const verified = verifyType(potentialExtension, "function", diagnostics, res.name, key, annotatedKind);
                            if (!verified) return;
                            (ext as (SemanticLintExtension | SyntacticLintExtension | LanguageServiceExtension)).ctor = potentialExtension as (SemanticLintProviderStatic | SyntacticLintProviderStatic | LanguageServiceProviderStatic);
                            break;
                        }
                        case ExtensionKind.TypeDiscovery: {
                            const verified = verifyType(potentialExtension, "function", diagnostics, res.name, key, annotatedKind);
                            if (!verified) return;
                            (ext as TypeDiscoveryExtension).lookup = potentialExtension as any;
                            break;
                        }
                        default:
                            // Include a default case which just puts the extension unchecked onto the base extension
                            // This can allow language service extensions to query for custom extension kinds
                            (ext as any).__extension =  potentialExtension;
                            break;
                    }
                    aggregate.push(ext as Extension);
                });
                return aggregate;
            });
            return groupBy(flatten(preparedExtensionObjects), elem => elem.kind) || {};
        }
    }
}