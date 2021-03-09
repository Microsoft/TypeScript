Input::
//// [/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/src/project/src/main.ts]
export const x = 10;

//// [/src/project/tsconfig.json]
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
    },
    "include": [
        "src/**/*.ts"
    ]
}



Output::
/lib/tsc --incremental --p src/project --tsBuildInfoFile src/project/.tsbuildinfo --explainFiles
lib/lib.d.ts
  Default library for target 'es5'
src/project/src/main.ts
  Matched by include pattern 'src/**/*.ts' in 'src/project/tsconfig.json'
exitCode:: ExitStatus.Success


//// [/src/project/.tsbuildinfo]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "./src/main.ts"
    ],
    "fileInfos": [
      {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      {
        "version": "-10726455937-export const x = 10;",
        "signature": "-6057683066-export declare const x = 10;\r\n",
        "affectsGlobalScope": false
      }
    ],
    "options": {
      "target": 1,
      "module": 1,
      "incremental": true,
      "project": "./",
      "tsBuildInfoFile": "./.tsbuildinfo",
      "explainFiles": true,
      "configFilePath": "./tsconfig.json"
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      0,
      1
    ]
  },
  "version": "FakeTSVersion"
}

//// [/src/project/.tsbuildinfo.program.baseline.txt]
{
 "program": {
  "fileInfos": {
   "../../lib/lib.d.ts": {
    "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
    "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
    "affectsGlobalScope": true
   },
   "./src/main.ts": {
    "version": "-10726455937-export const x = 10;",
    "signature": "-6057683066-export declare const x = 10;\r\n",
    "affectsGlobalScope": false
   }
  },
  "options": {
   "target": 1,
   "module": 1,
   "incremental": true,
   "project": "./",
   "tsBuildInfoFile": "./.tsbuildinfo",
   "explainFiles": true,
   "configFilePath": "./tsconfig.json"
  },
  "referencedMap": {},
  "exportedModulesMap": {},
  "semanticDiagnosticsPerFile": [
   "../../lib/lib.d.ts",
   "./src/main.ts"
  ]
 }
}

//// [/src/project/src/main.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 10;




Change:: no-change-run
Input::


Output::
/lib/tsc --incremental --p src/project --tsBuildInfoFile src/project/.tsbuildinfo --explainFiles
lib/lib.d.ts
  Default library for target 'es5'
src/project/src/main.ts
  Matched by include pattern 'src/**/*.ts' in 'src/project/tsconfig.json'
exitCode:: ExitStatus.Success


