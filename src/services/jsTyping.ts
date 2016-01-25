// Copyright (c) Microsoft. All rights reserved. Licensed under the Apache License, Version 2.0.
// See LICENSE.txt in the project root for complete license information.

/// <reference path='services.ts' />

/* @internal */
namespace ts.JsTyping {

    interface HostType {
        directoryExists: (path: string) => boolean;
        fileExists: (fileName: string) => boolean;
        readFile: (path: string, encoding?: string) => string;
        readDirectory: (path: string, extension?: string, exclude?: string[], depth?: number) => string[];
        writeFile: (path: string, data: string, writeByteOrderMark?: boolean) => void;
    };

    let _safeList: Map<string>;
    const notFoundTypingNames: string[] = [];

    function tryParseJson(jsonPath: string, host: HostType): any {
        if (host.fileExists(jsonPath)) {
            try {
                // Strip out single-line comments
                const contents = host.readFile(jsonPath).replace(/^\/\/(.*)$/gm, "");
                return JSON.parse(contents);
            }
            catch (e) { }
        }
        return undefined;
    }

    /**
     * @param host is the object provoding I/O related operations.
     * @param fileNames are the file names that belong to the same project.
     * @param globalCachePath is used 1. to get the safe list file path 2. as cachePath if it is not specified.
     * @param cachePath is the actual path to get the cached d.ts files from.
     * @param typingOptions are used for customizing the typing inferring process.
     * @param compilerOptions are used as a source of typing inferring.
     */
    export function discoverTypings(
        host: HostType,
        fileNames: string[],
        globalCachePath: Path,
        projectRootPath: Path,
        typingOptions: TypingOptions,
        compilerOptions?: CompilerOptions)
        : { cachedTypingPaths: string[], newTypingNames: string[], filesToWatch: string[] } {

        // a typing name to typing file path mapping
        const inferredTypings: Map<string> = {};

        if (!typingOptions) {
            return { cachedTypingPaths: [], newTypingNames: [], filesToWatch: [] };
        }

        const cachePath = projectRootPath ? projectRootPath : globalCachePath;
        // Only infer typings for .js and .jsx files
        fileNames = fileNames
            .map(ts.normalizePath)
            .filter(f => fileExtensionIs(f, ".js") || fileExtensionIs(f, "jsx"));

        const safeListFilePath = ts.combinePaths(globalCachePath, "safeList.json");
        if (!_safeList && host.fileExists(safeListFilePath)) {
            _safeList = tryParseJson(safeListFilePath, host);
        }

        const filesToWatch: string[] = [];
        // Directories to search for package.json, bower.json and other typing information
        let searchDirs: string[] = [];
        let exclude: string[] = [];

        mergeTypings(typingOptions.include);
        exclude = typingOptions.exclude ? typingOptions.exclude : [];

        if (typingOptions.enableAutoDiscovery) {
            const possibleSearchDirs = fileNames.map(ts.getDirectoryPath);
            if (projectRootPath !== undefined) {
                possibleSearchDirs.push(projectRootPath);
            }
            searchDirs = ts.deduplicate(possibleSearchDirs);
            for (const searchDir of searchDirs) {
                const packageJsonPath = ts.combinePaths(searchDir, "package.json");
                getTypingNamesFromJson(packageJsonPath, filesToWatch);

                const bowerJsonPath = ts.combinePaths(searchDir, "bower.json");
                getTypingNamesFromJson(bowerJsonPath, filesToWatch);

                const nodeModulesPath = ts.combinePaths(searchDir, "node_modules");
                getTypingNamesFromNodeModuleFolder(nodeModulesPath, filesToWatch);
            }

            getTypingNamesFromSourceFileNames(fileNames);
            getTypingNamesFromCompilerOptions(compilerOptions);
        }

        const typingsPath = ts.combinePaths(cachePath, "typings");
        const tsdJsonPath = ts.combinePaths(cachePath, "tsd.json");
        const tsdJsonDict = tryParseJson(tsdJsonPath, host);
        if (tsdJsonDict) {
            for (const notFoundTypingName of notFoundTypingNames) {
                if (inferredTypings.hasOwnProperty(notFoundTypingName) && !inferredTypings[notFoundTypingName]) {
                    delete inferredTypings[notFoundTypingName];
                }
            }

            // The "installed" property in the tsd.json serves as a registry of installed typings. Each item
            // of this object has a key of the relative file path, and a value that contains the corresponding
            // commit hash.
            if (hasProperty(tsdJsonDict, "installed")) {
                for (const cachedTypingPath in tsdJsonDict.installed) {
                    // Assuming the cachedTypingPath has the format of "[package name]/[file name]"
                    const cachedTypingName = cachedTypingPath.substr(0, cachedTypingPath.indexOf("/"));
                    // If the inferred[cachedTypingName] is already not null, which means we found a corresponding
                    // d.ts file that coming with the package. That one should take higher priority.
                    if (hasProperty(inferredTypings, cachedTypingName) && !inferredTypings[cachedTypingName]) {
                        inferredTypings[cachedTypingName] = ts.combinePaths(typingsPath, cachedTypingPath);
                    }
                }
            }
        }

        // Remove typings that the user has added to the exclude list
        for (const excludeTypingName of exclude) {
            delete inferredTypings[excludeTypingName];
        }

        const newTypingNames: string[] = [];
        const cachedTypingPaths: string[] = [];
        for (const typing in inferredTypings) {
            if (inferredTypings[typing] !== undefined) {
                cachedTypingPaths.push(inferredTypings[typing]);
            }
            else {
                newTypingNames.push(typing);
            }
        }
        return { cachedTypingPaths, newTypingNames, filesToWatch };

        /**
         * Merge a given list of typingNames to the inferredTypings map
         */
        function mergeTypings(typingNames: string[]) {
            if (!typingNames) {
                return;
            }

            for (const typing of typingNames) {
                if (!inferredTypings.hasOwnProperty(typing)) {
                    inferredTypings[typing] = undefined;
                }
            }
        }

        /**
         * Get the typing info from common package manager json files like package.json or bower.json
         */
        function getTypingNamesFromJson(jsonPath: string, filesToWatch: string[]) {
            const jsonDict = tryParseJson(jsonPath, host);
            if (jsonDict) {
                filesToWatch.push(jsonPath);
                if (jsonDict.hasOwnProperty("dependencies")) {
                    mergeTypings(Object.keys(jsonDict.dependencies));
                }
            }
        }

        /**
         * Infer typing names from given file names. For example, the file name "jquery-min.2.3.4.js"
         * should be inferred to the 'jquery' typing name; and "angular-route.1.2.3.js" should be inferred
         * to the 'angular-route' typing name.
         * @param fileNames are the names for source files in the project
         * @param safeList is the list of names that we are confident they are library names that requires typing
         */
        function getTypingNamesFromSourceFileNames(fileNames: string[]) {
            const jsFileNames = fileNames.filter(hasJavaScriptFileExtension);
            const inferredTypingNames = jsFileNames.map(f => ts.removeFileExtension(ts.getBaseFileName(f.toLowerCase())));
            const cleanedTypingNames = inferredTypingNames.map(f => f.replace(/((?:\.|-)min(?=\.|$))|((?:-|\.)\d+)/g, ""));
            _safeList === undefined ? mergeTypings(cleanedTypingNames) : mergeTypings(cleanedTypingNames.filter(f => _safeList.hasOwnProperty(f)));

            const jsxFileNames = fileNames.filter(f => fileExtensionIs(f, ".jsx"));
            if (jsxFileNames.length > 0) {
                mergeTypings(["react"]);
            }
        }

        /**
         * Infer typing names from node_module folder
         * @param nodeModulesPath is the path to the "node_modules" folder
         */
        function getTypingNamesFromNodeModuleFolder(nodeModulesPath: string, filesToWatch: string[]) {
            // Todo: add support for ModuleResolutionHost too
            if (!host.directoryExists(nodeModulesPath)) {
                return;
            }

            const typingNames: string[] = [];
            const packageJsonFiles =
                host.readDirectory(nodeModulesPath, /*extension*/ undefined, /*exclude*/ undefined, /*depth*/ 2).filter(f => ts.getBaseFileName(f) === "package.json");
            for (const packageJsonFile of packageJsonFiles) {
                const packageJsonDict = tryParseJson(packageJsonFile, host);
                if (!packageJsonDict) { continue; }

                filesToWatch.push(packageJsonFile);

                // npm 3 has the package.json contains a "_requiredBy" field
                // we should include all the top level module names for npm 2, and only module names whose
                // "_requiredBy" field starts with "#" or equals "/" for npm 3.
                if (packageJsonDict._requiredBy &&
                    packageJsonDict._requiredBy.filter((r: string) => r[0] === "#" || r === "/").length === 0) {
                    continue;
                }

                // If the package has its own d.ts typings, those will take over. Otherwise the package name will be used
                // to download d.ts files from DefinitelyTyped
                const packageName = packageJsonDict["name"];
                if (packageJsonDict.hasOwnProperty("typings")) {
                    const absPath = ts.getNormalizedAbsolutePath(packageJsonDict.typings, ts.getDirectoryPath(packageJsonFile));
                    inferredTypings[packageName] = absPath;
                }
                else {
                    typingNames.push(packageName);
                }
            }
            mergeTypings(typingNames);
        }

        function getTypingNamesFromCompilerOptions(options: CompilerOptions) {
            const typingNames: string[] = [];
            if (!options) {
                return;
            }

            if (options.jsx === JsxEmit.React) {
                typingNames.push("react");
            }
            if (options.moduleResolution === ModuleResolutionKind.NodeJs) {
                typingNames.push("node");
            }
            mergeTypings(typingNames);
        }
    }

    /**
     * Keep a list of typings names that we knew cannot be obtained at the moment (could be because
     * of network issues or because the package doesn't hava a d.ts files in DefinitelyTyped), so
     * that we won't try again next time within thie session.
     * @param cachedTypingsPaths The list of resolved cached d.ts paths
     * @param newTypings The list of new typings that the host attempted to acquire using TSD
     * @param cachePath The path to the local tsd.json cache
     */
    export function updateNotFoundTypingNames(triedTypingNames: string[], cachePath: string, host: HostType): void {
        const tsdJsonPath = ts.combinePaths(cachePath, "tsd.json");
        const cacheTsdJsonDict = tryParseJson(tsdJsonPath, host);
        if (cacheTsdJsonDict) {
            const installedTypingFiles = hasProperty(cacheTsdJsonDict, "installed")
                ? Object.keys(cacheTsdJsonDict.installed)
                : [];
            const newMissingTypingNames =
                ts.filter(triedTypingNames, name => notFoundTypingNames.indexOf(name) < 0 && !isInstalled(name, installedTypingFiles));
            for (const newMissingTypingName of newMissingTypingNames) {
                notFoundTypingNames.push(newMissingTypingName);
            }
        }
    }

    function isInstalled(typing: string, installedKeys: string[]) {
        const typingPrefix = typing + "/";
        for (const key of installedKeys) {
            if (key.indexOf(typingPrefix) === 0) {
                return true;
            }
        }
        return false;
    }
}