Input::
//// [/a/lib/lib.d.ts]
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

//// [/user/username/projects/sample1/core/tsconfig.json]
{"compilerOptions":{"composite":true,"declaration":true},"references":[{"path":"../tests","circular":true}]}

//// [/user/username/projects/sample1/core/index.ts]
export const someString: string = "HELLO WORLD";
export function leftPad(s: string, n: number) { return s + n; }
export function multiply(a: number, b: number) { return a * b; }


//// [/user/username/projects/sample1/core/anotherModule.ts]
export const World = "hello";


//// [/user/username/projects/sample1/logic/tsconfig.json]
{
    "compilerOptions": {
        "composite": true,
        "declaration": true,
        "sourceMap": true,
        "forceConsistentCasingInFileNames": true,
        "skipDefaultLibCheck": true
    },
    "references": [
        { "path": "../core" }
    ]
}


//// [/user/username/projects/sample1/logic/index.ts]
import * as c from '../core/index';
export function getSecondsInDay() {
    return c.multiply(10, 15);
}
import * as mod from '../core/anotherModule';
export const m = mod;


//// [/user/username/projects/sample1/tests/tsconfig.json]
{
    "references": [
        { "path": "../core" },
        { "path": "../logic" }
    ],
    "files": ["index.ts"],
    "compilerOptions": {
        "composite": true,
        "declaration": true,
        "forceConsistentCasingInFileNames": true,
        "skipDefaultLibCheck": true
    }
}

//// [/user/username/projects/sample1/tests/index.ts]
import * as c from '../core/index';
import * as logic from '../logic/index';

c.leftPad("", 10);
logic.getSecondsInDay();

import * as mod from '../core/anotherModule';
export const m = mod;



/a/lib/tsc.js -b -w sample1/tests
Output::
>> Screen clear
[[90m12:00:39 AM[0m] Starting compilation in watch mode...

[[90m12:01:10 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/sample1/core/anotherModule.ts","/user/username/projects/sample1/core/index.ts"]
Program options: {"composite":true,"declaration":true,"watch":true,"configFilePath":"/user/username/projects/sample1/core/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/sample1/core/anotherModule.ts
/user/username/projects/sample1/core/index.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/sample1/core/anotherModule.ts
/user/username/projects/sample1/core/index.ts

Program root files: ["/user/username/projects/sample1/logic/index.ts"]
Program options: {"composite":true,"declaration":true,"sourceMap":true,"forceConsistentCasingInFileNames":true,"skipDefaultLibCheck":true,"watch":true,"configFilePath":"/user/username/projects/sample1/logic/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/sample1/core/index.d.ts
/user/username/projects/sample1/core/anotherModule.d.ts
/user/username/projects/sample1/logic/index.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/sample1/core/index.d.ts
/user/username/projects/sample1/core/anotherModule.d.ts
/user/username/projects/sample1/logic/index.ts

Program root files: ["/user/username/projects/sample1/tests/index.ts"]
Program options: {"composite":true,"declaration":true,"forceConsistentCasingInFileNames":true,"skipDefaultLibCheck":true,"watch":true,"configFilePath":"/user/username/projects/sample1/tests/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/sample1/core/index.d.ts
/user/username/projects/sample1/core/anotherModule.d.ts
/user/username/projects/sample1/logic/index.d.ts
/user/username/projects/sample1/tests/index.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/sample1/core/index.d.ts
/user/username/projects/sample1/core/anotherModule.d.ts
/user/username/projects/sample1/logic/index.d.ts
/user/username/projects/sample1/tests/index.ts

WatchedFiles::
/user/username/projects/sample1/core/tsconfig.json:
  {"fileName":"/user/username/projects/sample1/core/tsconfig.json","pollingInterval":250}
/user/username/projects/sample1/core/anothermodule.ts:
  {"fileName":"/user/username/projects/sample1/core/anotherModule.ts","pollingInterval":250}
/user/username/projects/sample1/core/index.ts:
  {"fileName":"/user/username/projects/sample1/core/index.ts","pollingInterval":250}
/user/username/projects/sample1/logic/tsconfig.json:
  {"fileName":"/user/username/projects/sample1/logic/tsconfig.json","pollingInterval":250}
/user/username/projects/sample1/logic/index.ts:
  {"fileName":"/user/username/projects/sample1/logic/index.ts","pollingInterval":250}
/user/username/projects/sample1/tests/tsconfig.json:
  {"fileName":"/user/username/projects/sample1/tests/tsconfig.json","pollingInterval":250}
/user/username/projects/sample1/tests/index.ts:
  {"fileName":"/user/username/projects/sample1/tests/index.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/sample1/core:
  {"directoryName":"/user/username/projects/sample1/core","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/sample1/logic:
  {"directoryName":"/user/username/projects/sample1/logic","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/sample1/core/anotherModule.js]
"use strict";
exports.__esModule = true;
exports.World = void 0;
exports.World = "hello";


//// [/user/username/projects/sample1/core/anotherModule.d.ts]
export declare const World = "hello";


//// [/user/username/projects/sample1/core/index.js]
"use strict";
exports.__esModule = true;
exports.multiply = exports.leftPad = exports.someString = void 0;
exports.someString = "HELLO WORLD";
function leftPad(s, n) { return s + n; }
exports.leftPad = leftPad;
function multiply(a, b) { return a * b; }
exports.multiply = multiply;


//// [/user/username/projects/sample1/core/index.d.ts]
export declare const someString: string;
export declare function leftPad(s: string, n: number): string;
export declare function multiply(a: number, b: number): number;


//// [/user/username/projects/sample1/core/tsconfig.tsbuildinfo]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "./anothermodule.ts",
      "./index.ts"
    ],
    "fileInfos": [
      {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      {
        "version": "-2676574883-export const World = \"hello\";\r\n",
        "signature": "-9234818176-export declare const World = \"hello\";\n",
        "affectsGlobalScope": false
      },
      {
        "version": "-18749805970-export const someString: string = \"HELLO WORLD\";\r\nexport function leftPad(s: string, n: number) { return s + n; }\r\nexport function multiply(a: number, b: number) { return a * b; }\r\n",
        "signature": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n",
        "affectsGlobalScope": false
      }
    ],
    "options": {
      "composite": true,
      "declaration": true,
      "watch": true,
      "configFilePath": "./tsconfig.json"
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      0,
      1,
      2
    ]
  },
  "version": "FakeTSVersion"
}

//// [/user/username/projects/sample1/core/tsconfig.tsbuildinfo.program.baseline.txt]
{
 "program": {
  "fileInfos": {
   "../../../../../a/lib/lib.d.ts": {
    "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
    "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
    "affectsGlobalScope": true
   },
   "./anothermodule.ts": {
    "version": "-2676574883-export const World = \"hello\";\r\n",
    "signature": "-9234818176-export declare const World = \"hello\";\n",
    "affectsGlobalScope": false
   },
   "./index.ts": {
    "version": "-18749805970-export const someString: string = \"HELLO WORLD\";\r\nexport function leftPad(s: string, n: number) { return s + n; }\r\nexport function multiply(a: number, b: number) { return a * b; }\r\n",
    "signature": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n",
    "affectsGlobalScope": false
   }
  },
  "options": {
   "composite": true,
   "declaration": true,
   "watch": true,
   "configFilePath": "./tsconfig.json"
  },
  "referencedMap": {},
  "exportedModulesMap": {},
  "semanticDiagnosticsPerFile": [
   "../../../../../a/lib/lib.d.ts",
   "./anothermodule.ts",
   "./index.ts"
  ]
 }
}

//// [/user/username/projects/sample1/logic/index.js.map]
{"version":3,"file":"index.js","sourceRoot":"","sources":["index.ts"],"names":[],"mappings":";;;AAAA,iCAAmC;AACnC,SAAgB,eAAe;IAC3B,OAAO,CAAC,CAAC,QAAQ,CAAC,EAAE,EAAE,EAAE,CAAC,CAAC;AAC9B,CAAC;AAFD,0CAEC;AACD,2CAA6C;AAChC,QAAA,CAAC,GAAG,GAAG,CAAC"}

//// [/user/username/projects/sample1/logic/index.js]
"use strict";
exports.__esModule = true;
exports.m = exports.getSecondsInDay = void 0;
var c = require("../core/index");
function getSecondsInDay() {
    return c.multiply(10, 15);
}
exports.getSecondsInDay = getSecondsInDay;
var mod = require("../core/anotherModule");
exports.m = mod;
//# sourceMappingURL=index.js.map

//// [/user/username/projects/sample1/logic/index.d.ts]
export declare function getSecondsInDay(): number;
import * as mod from '../core/anotherModule';
export declare const m: typeof mod;


//// [/user/username/projects/sample1/logic/tsconfig.tsbuildinfo]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "../core/index.d.ts",
      "../core/anothermodule.d.ts",
      "./index.ts"
    ],
    "fileInfos": [
      {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      {
        "version": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n",
        "signature": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n",
        "affectsGlobalScope": false
      },
      {
        "version": "-9234818176-export declare const World = \"hello\";\n",
        "signature": "-9234818176-export declare const World = \"hello\";\n",
        "affectsGlobalScope": false
      },
      {
        "version": "-5786964698-import * as c from '../core/index';\r\nexport function getSecondsInDay() {\r\n    return c.multiply(10, 15);\r\n}\r\nimport * as mod from '../core/anotherModule';\r\nexport const m = mod;\r\n",
        "signature": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
        "affectsGlobalScope": false
      }
    ],
    "options": {
      "composite": true,
      "declaration": true,
      "sourceMap": true,
      "forceConsistentCasingInFileNames": true,
      "skipDefaultLibCheck": true,
      "watch": true,
      "configFilePath": "./tsconfig.json"
    },
    "referencedMap": {
      "./index.ts": [
        "../core/anothermodule.d.ts",
        "../core/index.d.ts"
      ]
    },
    "exportedModulesMap": {
      "./index.ts": [
        "../core/anothermodule.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      0,
      2,
      1,
      3
    ]
  },
  "version": "FakeTSVersion"
}

//// [/user/username/projects/sample1/logic/tsconfig.tsbuildinfo.program.baseline.txt]
{
 "program": {
  "fileInfos": {
   "../../../../../a/lib/lib.d.ts": {
    "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
    "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
    "affectsGlobalScope": true
   },
   "../core/index.d.ts": {
    "version": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n",
    "signature": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n",
    "affectsGlobalScope": false
   },
   "../core/anothermodule.d.ts": {
    "version": "-9234818176-export declare const World = \"hello\";\n",
    "signature": "-9234818176-export declare const World = \"hello\";\n",
    "affectsGlobalScope": false
   },
   "./index.ts": {
    "version": "-5786964698-import * as c from '../core/index';\r\nexport function getSecondsInDay() {\r\n    return c.multiply(10, 15);\r\n}\r\nimport * as mod from '../core/anotherModule';\r\nexport const m = mod;\r\n",
    "signature": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
    "affectsGlobalScope": false
   }
  },
  "options": {
   "composite": true,
   "declaration": true,
   "sourceMap": true,
   "forceConsistentCasingInFileNames": true,
   "skipDefaultLibCheck": true,
   "watch": true,
   "configFilePath": "./tsconfig.json"
  },
  "referencedMap": {
   "./index.ts": [
    "../core/anothermodule.d.ts",
    "../core/index.d.ts"
   ]
  },
  "exportedModulesMap": {
   "./index.ts": [
    "../core/anothermodule.d.ts"
   ]
  },
  "semanticDiagnosticsPerFile": [
   "../../../../../a/lib/lib.d.ts",
   "../core/anothermodule.d.ts",
   "../core/index.d.ts",
   "./index.ts"
  ]
 }
}

//// [/user/username/projects/sample1/tests/index.js]
"use strict";
exports.__esModule = true;
exports.m = void 0;
var c = require("../core/index");
var logic = require("../logic/index");
c.leftPad("", 10);
logic.getSecondsInDay();
var mod = require("../core/anotherModule");
exports.m = mod;


//// [/user/username/projects/sample1/tests/index.d.ts]
import * as mod from '../core/anotherModule';
export declare const m: typeof mod;


//// [/user/username/projects/sample1/tests/tsconfig.tsbuildinfo]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "../core/index.d.ts",
      "../core/anothermodule.d.ts",
      "../logic/index.d.ts",
      "./index.ts"
    ],
    "fileInfos": [
      {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      {
        "version": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n",
        "signature": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n",
        "affectsGlobalScope": false
      },
      {
        "version": "-9234818176-export declare const World = \"hello\";\n",
        "signature": "-9234818176-export declare const World = \"hello\";\n",
        "affectsGlobalScope": false
      },
      {
        "version": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
        "signature": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
        "affectsGlobalScope": false
      },
      {
        "version": "12336236525-import * as c from '../core/index';\r\nimport * as logic from '../logic/index';\r\n\r\nc.leftPad(\"\", 10);\r\nlogic.getSecondsInDay();\r\n\r\nimport * as mod from '../core/anotherModule';\r\nexport const m = mod;\r\n",
        "signature": "2702201019-import * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
        "affectsGlobalScope": false
      }
    ],
    "options": {
      "composite": true,
      "declaration": true,
      "forceConsistentCasingInFileNames": true,
      "skipDefaultLibCheck": true,
      "watch": true,
      "configFilePath": "./tsconfig.json"
    },
    "referencedMap": {
      "../logic/index.d.ts": [
        "../core/anothermodule.d.ts"
      ],
      "./index.ts": [
        "../core/anothermodule.d.ts",
        "../core/index.d.ts",
        "../logic/index.d.ts"
      ]
    },
    "exportedModulesMap": {
      "../logic/index.d.ts": [
        "../core/anothermodule.d.ts"
      ],
      "./index.ts": [
        "../core/anothermodule.d.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      0,
      2,
      1,
      3,
      4
    ]
  },
  "version": "FakeTSVersion"
}

//// [/user/username/projects/sample1/tests/tsconfig.tsbuildinfo.program.baseline.txt]
{
 "program": {
  "fileInfos": {
   "../../../../../a/lib/lib.d.ts": {
    "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
    "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
    "affectsGlobalScope": true
   },
   "../core/index.d.ts": {
    "version": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n",
    "signature": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n",
    "affectsGlobalScope": false
   },
   "../core/anothermodule.d.ts": {
    "version": "-9234818176-export declare const World = \"hello\";\n",
    "signature": "-9234818176-export declare const World = \"hello\";\n",
    "affectsGlobalScope": false
   },
   "../logic/index.d.ts": {
    "version": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
    "signature": "-9659407152-export declare function getSecondsInDay(): number;\nimport * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
    "affectsGlobalScope": false
   },
   "./index.ts": {
    "version": "12336236525-import * as c from '../core/index';\r\nimport * as logic from '../logic/index';\r\n\r\nc.leftPad(\"\", 10);\r\nlogic.getSecondsInDay();\r\n\r\nimport * as mod from '../core/anotherModule';\r\nexport const m = mod;\r\n",
    "signature": "2702201019-import * as mod from '../core/anotherModule';\nexport declare const m: typeof mod;\n",
    "affectsGlobalScope": false
   }
  },
  "options": {
   "composite": true,
   "declaration": true,
   "forceConsistentCasingInFileNames": true,
   "skipDefaultLibCheck": true,
   "watch": true,
   "configFilePath": "./tsconfig.json"
  },
  "referencedMap": {
   "../logic/index.d.ts": [
    "../core/anothermodule.d.ts"
   ],
   "./index.ts": [
    "../core/anothermodule.d.ts",
    "../core/index.d.ts",
    "../logic/index.d.ts"
   ]
  },
  "exportedModulesMap": {
   "../logic/index.d.ts": [
    "../core/anothermodule.d.ts"
   ],
   "./index.ts": [
    "../core/anothermodule.d.ts"
   ]
  },
  "semanticDiagnosticsPerFile": [
   "../../../../../a/lib/lib.d.ts",
   "../core/anothermodule.d.ts",
   "../core/index.d.ts",
   "../logic/index.d.ts",
   "./index.ts"
  ]
 }
}


Change:: Change to new File and build core

Input::
//// [/user/username/projects/sample1/core/newfile.ts]
export const newFileConst = 30;


Output::
>> Screen clear
[[90m12:01:13 AM[0m] File change detected. Starting incremental compilation...



Program root files: ["/user/username/projects/sample1/core/anotherModule.ts","/user/username/projects/sample1/core/index.ts","/user/username/projects/sample1/core/newfile.ts"]
Program options: {"composite":true,"declaration":true,"watch":true,"configFilePath":"/user/username/projects/sample1/core/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/sample1/core/anotherModule.ts
/user/username/projects/sample1/core/index.ts
/user/username/projects/sample1/core/newfile.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/sample1/core/newfile.ts

WatchedFiles::
/user/username/projects/sample1/core/tsconfig.json:
  {"fileName":"/user/username/projects/sample1/core/tsconfig.json","pollingInterval":250}
/user/username/projects/sample1/core/anothermodule.ts:
  {"fileName":"/user/username/projects/sample1/core/anotherModule.ts","pollingInterval":250}
/user/username/projects/sample1/core/index.ts:
  {"fileName":"/user/username/projects/sample1/core/index.ts","pollingInterval":250}
/user/username/projects/sample1/logic/tsconfig.json:
  {"fileName":"/user/username/projects/sample1/logic/tsconfig.json","pollingInterval":250}
/user/username/projects/sample1/logic/index.ts:
  {"fileName":"/user/username/projects/sample1/logic/index.ts","pollingInterval":250}
/user/username/projects/sample1/tests/tsconfig.json:
  {"fileName":"/user/username/projects/sample1/tests/tsconfig.json","pollingInterval":250}
/user/username/projects/sample1/tests/index.ts:
  {"fileName":"/user/username/projects/sample1/tests/index.ts","pollingInterval":250}
/user/username/projects/sample1/core/newfile.ts:
  {"fileName":"/user/username/projects/sample1/core/newfile.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/sample1/core:
  {"directoryName":"/user/username/projects/sample1/core","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/sample1/logic:
  {"directoryName":"/user/username/projects/sample1/logic","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/sample1/core/anotherModule.js] file changed its modified time
//// [/user/username/projects/sample1/core/anotherModule.d.ts] file changed its modified time
//// [/user/username/projects/sample1/core/index.js] file changed its modified time
//// [/user/username/projects/sample1/core/index.d.ts] file changed its modified time
//// [/user/username/projects/sample1/core/tsconfig.tsbuildinfo]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "./anothermodule.ts",
      "./index.ts",
      "./newfile.ts"
    ],
    "fileInfos": [
      {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      {
        "version": "-2676574883-export const World = \"hello\";\r\n",
        "signature": "-9234818176-export declare const World = \"hello\";\n",
        "affectsGlobalScope": false
      },
      {
        "version": "-18749805970-export const someString: string = \"HELLO WORLD\";\r\nexport function leftPad(s: string, n: number) { return s + n; }\r\nexport function multiply(a: number, b: number) { return a * b; }\r\n",
        "signature": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n",
        "affectsGlobalScope": false
      },
      {
        "version": "-16320201030-export const newFileConst = 30;",
        "signature": "-22941483372-export declare const newFileConst = 30;\n",
        "affectsGlobalScope": false
      }
    ],
    "options": {
      "composite": true,
      "declaration": true,
      "watch": true,
      "configFilePath": "./tsconfig.json"
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      0,
      1,
      2,
      3
    ]
  },
  "version": "FakeTSVersion"
}

//// [/user/username/projects/sample1/core/tsconfig.tsbuildinfo.program.baseline.txt]
{
 "program": {
  "fileInfos": {
   "../../../../../a/lib/lib.d.ts": {
    "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
    "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
    "affectsGlobalScope": true
   },
   "./anothermodule.ts": {
    "version": "-2676574883-export const World = \"hello\";\r\n",
    "signature": "-9234818176-export declare const World = \"hello\";\n",
    "affectsGlobalScope": false
   },
   "./index.ts": {
    "version": "-18749805970-export const someString: string = \"HELLO WORLD\";\r\nexport function leftPad(s: string, n: number) { return s + n; }\r\nexport function multiply(a: number, b: number) { return a * b; }\r\n",
    "signature": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n",
    "affectsGlobalScope": false
   },
   "./newfile.ts": {
    "version": "-16320201030-export const newFileConst = 30;",
    "signature": "-22941483372-export declare const newFileConst = 30;\n",
    "affectsGlobalScope": false
   }
  },
  "options": {
   "composite": true,
   "declaration": true,
   "watch": true,
   "configFilePath": "./tsconfig.json"
  },
  "referencedMap": {},
  "exportedModulesMap": {},
  "semanticDiagnosticsPerFile": [
   "../../../../../a/lib/lib.d.ts",
   "./anothermodule.ts",
   "./index.ts",
   "./newfile.ts"
  ]
 }
}

//// [/user/username/projects/sample1/core/newfile.js]
"use strict";
exports.__esModule = true;
exports.newFileConst = void 0;
exports.newFileConst = 30;


//// [/user/username/projects/sample1/core/newfile.d.ts]
export declare const newFileConst = 30;



Change:: Build logic or update time stamps

Input::

Output::

Program root files: ["/user/username/projects/sample1/logic/index.ts"]
Program options: {"composite":true,"declaration":true,"sourceMap":true,"forceConsistentCasingInFileNames":true,"skipDefaultLibCheck":true,"watch":true,"configFilePath":"/user/username/projects/sample1/logic/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/sample1/core/index.d.ts
/user/username/projects/sample1/core/anotherModule.d.ts
/user/username/projects/sample1/logic/index.ts

Semantic diagnostics in builder refreshed for::

WatchedFiles::
/user/username/projects/sample1/core/tsconfig.json:
  {"fileName":"/user/username/projects/sample1/core/tsconfig.json","pollingInterval":250}
/user/username/projects/sample1/core/anothermodule.ts:
  {"fileName":"/user/username/projects/sample1/core/anotherModule.ts","pollingInterval":250}
/user/username/projects/sample1/core/index.ts:
  {"fileName":"/user/username/projects/sample1/core/index.ts","pollingInterval":250}
/user/username/projects/sample1/logic/tsconfig.json:
  {"fileName":"/user/username/projects/sample1/logic/tsconfig.json","pollingInterval":250}
/user/username/projects/sample1/logic/index.ts:
  {"fileName":"/user/username/projects/sample1/logic/index.ts","pollingInterval":250}
/user/username/projects/sample1/tests/tsconfig.json:
  {"fileName":"/user/username/projects/sample1/tests/tsconfig.json","pollingInterval":250}
/user/username/projects/sample1/tests/index.ts:
  {"fileName":"/user/username/projects/sample1/tests/index.ts","pollingInterval":250}
/user/username/projects/sample1/core/newfile.ts:
  {"fileName":"/user/username/projects/sample1/core/newfile.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/sample1/core:
  {"directoryName":"/user/username/projects/sample1/core","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/sample1/logic:
  {"directoryName":"/user/username/projects/sample1/logic","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/sample1/logic/index.js.map] file changed its modified time
//// [/user/username/projects/sample1/logic/index.js] file changed its modified time
//// [/user/username/projects/sample1/logic/index.d.ts] file changed its modified time
//// [/user/username/projects/sample1/logic/tsconfig.tsbuildinfo] file changed its modified time

Change:: Build Tests

Input::

Output::
[[90m12:01:27 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/sample1/tests/index.ts"]
Program options: {"composite":true,"declaration":true,"forceConsistentCasingInFileNames":true,"skipDefaultLibCheck":true,"watch":true,"configFilePath":"/user/username/projects/sample1/tests/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/sample1/core/index.d.ts
/user/username/projects/sample1/core/anotherModule.d.ts
/user/username/projects/sample1/logic/index.d.ts
/user/username/projects/sample1/tests/index.ts

Semantic diagnostics in builder refreshed for::

WatchedFiles::
/user/username/projects/sample1/core/tsconfig.json:
  {"fileName":"/user/username/projects/sample1/core/tsconfig.json","pollingInterval":250}
/user/username/projects/sample1/core/anothermodule.ts:
  {"fileName":"/user/username/projects/sample1/core/anotherModule.ts","pollingInterval":250}
/user/username/projects/sample1/core/index.ts:
  {"fileName":"/user/username/projects/sample1/core/index.ts","pollingInterval":250}
/user/username/projects/sample1/logic/tsconfig.json:
  {"fileName":"/user/username/projects/sample1/logic/tsconfig.json","pollingInterval":250}
/user/username/projects/sample1/logic/index.ts:
  {"fileName":"/user/username/projects/sample1/logic/index.ts","pollingInterval":250}
/user/username/projects/sample1/tests/tsconfig.json:
  {"fileName":"/user/username/projects/sample1/tests/tsconfig.json","pollingInterval":250}
/user/username/projects/sample1/tests/index.ts:
  {"fileName":"/user/username/projects/sample1/tests/index.ts","pollingInterval":250}
/user/username/projects/sample1/core/newfile.ts:
  {"fileName":"/user/username/projects/sample1/core/newfile.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/sample1/core:
  {"directoryName":"/user/username/projects/sample1/core","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/sample1/logic:
  {"directoryName":"/user/username/projects/sample1/logic","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/sample1/tests/index.js] file changed its modified time
//// [/user/username/projects/sample1/tests/index.d.ts] file changed its modified time
//// [/user/username/projects/sample1/tests/tsconfig.tsbuildinfo] file changed its modified time

Change:: Change to new File and build core

Input::
//// [/user/username/projects/sample1/core/newfile.ts]
export const newFileConst = 30;
export class someClass2 { }


Output::
>> Screen clear
[[90m12:01:31 AM[0m] File change detected. Starting incremental compilation...



Program root files: ["/user/username/projects/sample1/core/anotherModule.ts","/user/username/projects/sample1/core/index.ts","/user/username/projects/sample1/core/newfile.ts"]
Program options: {"composite":true,"declaration":true,"watch":true,"configFilePath":"/user/username/projects/sample1/core/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/sample1/core/anotherModule.ts
/user/username/projects/sample1/core/index.ts
/user/username/projects/sample1/core/newfile.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/sample1/core/newfile.ts

WatchedFiles::
/user/username/projects/sample1/core/tsconfig.json:
  {"fileName":"/user/username/projects/sample1/core/tsconfig.json","pollingInterval":250}
/user/username/projects/sample1/core/anothermodule.ts:
  {"fileName":"/user/username/projects/sample1/core/anotherModule.ts","pollingInterval":250}
/user/username/projects/sample1/core/index.ts:
  {"fileName":"/user/username/projects/sample1/core/index.ts","pollingInterval":250}
/user/username/projects/sample1/logic/tsconfig.json:
  {"fileName":"/user/username/projects/sample1/logic/tsconfig.json","pollingInterval":250}
/user/username/projects/sample1/logic/index.ts:
  {"fileName":"/user/username/projects/sample1/logic/index.ts","pollingInterval":250}
/user/username/projects/sample1/tests/tsconfig.json:
  {"fileName":"/user/username/projects/sample1/tests/tsconfig.json","pollingInterval":250}
/user/username/projects/sample1/tests/index.ts:
  {"fileName":"/user/username/projects/sample1/tests/index.ts","pollingInterval":250}
/user/username/projects/sample1/core/newfile.ts:
  {"fileName":"/user/username/projects/sample1/core/newfile.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/sample1/core:
  {"directoryName":"/user/username/projects/sample1/core","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/sample1/logic:
  {"directoryName":"/user/username/projects/sample1/logic","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/sample1/core/anotherModule.js] file changed its modified time
//// [/user/username/projects/sample1/core/anotherModule.d.ts] file changed its modified time
//// [/user/username/projects/sample1/core/index.js] file changed its modified time
//// [/user/username/projects/sample1/core/index.d.ts] file changed its modified time
//// [/user/username/projects/sample1/core/tsconfig.tsbuildinfo]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "./anothermodule.ts",
      "./index.ts",
      "./newfile.ts"
    ],
    "fileInfos": [
      {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      {
        "version": "-2676574883-export const World = \"hello\";\r\n",
        "signature": "-9234818176-export declare const World = \"hello\";\n",
        "affectsGlobalScope": false
      },
      {
        "version": "-18749805970-export const someString: string = \"HELLO WORLD\";\r\nexport function leftPad(s: string, n: number) { return s + n; }\r\nexport function multiply(a: number, b: number) { return a * b; }\r\n",
        "signature": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n",
        "affectsGlobalScope": false
      },
      {
        "version": "-9703836816-export const newFileConst = 30;\nexport class someClass2 { }",
        "signature": "-12384508924-export declare const newFileConst = 30;\nexport declare class someClass2 {\n}\n",
        "affectsGlobalScope": false
      }
    ],
    "options": {
      "composite": true,
      "declaration": true,
      "watch": true,
      "configFilePath": "./tsconfig.json"
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      0,
      1,
      2,
      3
    ]
  },
  "version": "FakeTSVersion"
}

//// [/user/username/projects/sample1/core/tsconfig.tsbuildinfo.program.baseline.txt]
{
 "program": {
  "fileInfos": {
   "../../../../../a/lib/lib.d.ts": {
    "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
    "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
    "affectsGlobalScope": true
   },
   "./anothermodule.ts": {
    "version": "-2676574883-export const World = \"hello\";\r\n",
    "signature": "-9234818176-export declare const World = \"hello\";\n",
    "affectsGlobalScope": false
   },
   "./index.ts": {
    "version": "-18749805970-export const someString: string = \"HELLO WORLD\";\r\nexport function leftPad(s: string, n: number) { return s + n; }\r\nexport function multiply(a: number, b: number) { return a * b; }\r\n",
    "signature": "-7362568283-export declare const someString: string;\nexport declare function leftPad(s: string, n: number): string;\nexport declare function multiply(a: number, b: number): number;\n",
    "affectsGlobalScope": false
   },
   "./newfile.ts": {
    "version": "-9703836816-export const newFileConst = 30;\nexport class someClass2 { }",
    "signature": "-12384508924-export declare const newFileConst = 30;\nexport declare class someClass2 {\n}\n",
    "affectsGlobalScope": false
   }
  },
  "options": {
   "composite": true,
   "declaration": true,
   "watch": true,
   "configFilePath": "./tsconfig.json"
  },
  "referencedMap": {},
  "exportedModulesMap": {},
  "semanticDiagnosticsPerFile": [
   "../../../../../a/lib/lib.d.ts",
   "./anothermodule.ts",
   "./index.ts",
   "./newfile.ts"
  ]
 }
}

//// [/user/username/projects/sample1/core/newfile.js]
"use strict";
exports.__esModule = true;
exports.someClass2 = exports.newFileConst = void 0;
exports.newFileConst = 30;
var someClass2 = /** @class */ (function () {
    function someClass2() {
    }
    return someClass2;
}());
exports.someClass2 = someClass2;


//// [/user/username/projects/sample1/core/newfile.d.ts]
export declare const newFileConst = 30;
export declare class someClass2 {
}



Change:: Build logic or update time stamps

Input::

Output::

Program root files: ["/user/username/projects/sample1/logic/index.ts"]
Program options: {"composite":true,"declaration":true,"sourceMap":true,"forceConsistentCasingInFileNames":true,"skipDefaultLibCheck":true,"watch":true,"configFilePath":"/user/username/projects/sample1/logic/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/sample1/core/index.d.ts
/user/username/projects/sample1/core/anotherModule.d.ts
/user/username/projects/sample1/logic/index.ts

Semantic diagnostics in builder refreshed for::

WatchedFiles::
/user/username/projects/sample1/core/tsconfig.json:
  {"fileName":"/user/username/projects/sample1/core/tsconfig.json","pollingInterval":250}
/user/username/projects/sample1/core/anothermodule.ts:
  {"fileName":"/user/username/projects/sample1/core/anotherModule.ts","pollingInterval":250}
/user/username/projects/sample1/core/index.ts:
  {"fileName":"/user/username/projects/sample1/core/index.ts","pollingInterval":250}
/user/username/projects/sample1/logic/tsconfig.json:
  {"fileName":"/user/username/projects/sample1/logic/tsconfig.json","pollingInterval":250}
/user/username/projects/sample1/logic/index.ts:
  {"fileName":"/user/username/projects/sample1/logic/index.ts","pollingInterval":250}
/user/username/projects/sample1/tests/tsconfig.json:
  {"fileName":"/user/username/projects/sample1/tests/tsconfig.json","pollingInterval":250}
/user/username/projects/sample1/tests/index.ts:
  {"fileName":"/user/username/projects/sample1/tests/index.ts","pollingInterval":250}
/user/username/projects/sample1/core/newfile.ts:
  {"fileName":"/user/username/projects/sample1/core/newfile.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/sample1/core:
  {"directoryName":"/user/username/projects/sample1/core","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/sample1/logic:
  {"directoryName":"/user/username/projects/sample1/logic","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/sample1/logic/index.js.map] file changed its modified time
//// [/user/username/projects/sample1/logic/index.js] file changed its modified time
//// [/user/username/projects/sample1/logic/index.d.ts] file changed its modified time
//// [/user/username/projects/sample1/logic/tsconfig.tsbuildinfo] file changed its modified time

Change:: Build Tests

Input::

Output::
[[90m12:01:47 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/sample1/tests/index.ts"]
Program options: {"composite":true,"declaration":true,"forceConsistentCasingInFileNames":true,"skipDefaultLibCheck":true,"watch":true,"configFilePath":"/user/username/projects/sample1/tests/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/sample1/core/index.d.ts
/user/username/projects/sample1/core/anotherModule.d.ts
/user/username/projects/sample1/logic/index.d.ts
/user/username/projects/sample1/tests/index.ts

Semantic diagnostics in builder refreshed for::

WatchedFiles::
/user/username/projects/sample1/core/tsconfig.json:
  {"fileName":"/user/username/projects/sample1/core/tsconfig.json","pollingInterval":250}
/user/username/projects/sample1/core/anothermodule.ts:
  {"fileName":"/user/username/projects/sample1/core/anotherModule.ts","pollingInterval":250}
/user/username/projects/sample1/core/index.ts:
  {"fileName":"/user/username/projects/sample1/core/index.ts","pollingInterval":250}
/user/username/projects/sample1/logic/tsconfig.json:
  {"fileName":"/user/username/projects/sample1/logic/tsconfig.json","pollingInterval":250}
/user/username/projects/sample1/logic/index.ts:
  {"fileName":"/user/username/projects/sample1/logic/index.ts","pollingInterval":250}
/user/username/projects/sample1/tests/tsconfig.json:
  {"fileName":"/user/username/projects/sample1/tests/tsconfig.json","pollingInterval":250}
/user/username/projects/sample1/tests/index.ts:
  {"fileName":"/user/username/projects/sample1/tests/index.ts","pollingInterval":250}
/user/username/projects/sample1/core/newfile.ts:
  {"fileName":"/user/username/projects/sample1/core/newfile.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/sample1/core:
  {"directoryName":"/user/username/projects/sample1/core","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/sample1/logic:
  {"directoryName":"/user/username/projects/sample1/logic","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/sample1/tests/index.js] file changed its modified time
//// [/user/username/projects/sample1/tests/index.d.ts] file changed its modified time
//// [/user/username/projects/sample1/tests/tsconfig.tsbuildinfo] file changed its modified time
