//// [/lib/initial-buildOutput.txt]
/lib/tsc --b /src/src/main --verbose
12:00:00 AM - Projects in this build: 
    * src/src/other/tsconfig.json
    * src/src/main/tsconfig.json

12:00:00 AM - Project 'src/src/other/tsconfig.json' is out of date because output file 'src/dist/other.js' does not exist

12:00:00 AM - Building project '/src/src/other/tsconfig.json'...

12:00:00 AM - Project 'src/src/main/tsconfig.json' is out of date because output file 'src/dist/a.js' does not exist

12:00:00 AM - Building project '/src/src/main/tsconfig.json'...

src/src/main/tsconfig.json(4,5): error TS6377: Cannot write file '/src/dist/tsconfig.tsbuildinfo' because it will overwrite '.tsbuildinfo' file generated by referenced project '/src/src/other'
exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated


//// [/src/dist/other.d.ts]
export declare const Other = 0;


//// [/src/dist/other.js]
"use strict";
exports.__esModule = true;
exports.Other = void 0;
exports.Other = 0;


//// [/src/dist/tsconfig.tsbuildinfo]
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };"
      },
      "../src/other/other.ts": {
        "version": "-2951227185-export const Other = 0;\r\n",
        "signature": "-7996259489-export declare const Other = 0;\r\n"
      }
    },
    "options": {
      "composite": true,
      "declaration": true,
      "outDir": "./",
      "skipDefaultLibCheck": true,
      "configFilePath": "../src/other/tsconfig.json"
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "../src/other/other.ts"
    ]
  },
  "version": "FakeTSVersion"
}

//// [/src/tsconfig.base.json]
{
  "compilerOptions": {
    "composite": true,
    "declaration": true,
    
    "outDir": "./dist/",
    "skipDefaultLibCheck": true
  },
  "exclude": [
    "node_modules"
  ]
}

