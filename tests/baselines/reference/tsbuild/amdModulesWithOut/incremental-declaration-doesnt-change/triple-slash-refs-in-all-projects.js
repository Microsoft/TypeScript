//// [/lib/incremental-declaration-doesnt-changeOutput.txt]
/lib/tsc --b /src/app --verbose
[[90m12:04:00 AM[0m] Projects in this build: 
    * src/lib/tsconfig.json
    * src/app/tsconfig.json

[[90m12:04:00 AM[0m] Project 'src/lib/tsconfig.json' is out of date because oldest output 'src/lib/module.js' is older than newest input 'src/lib/file1.ts'

[[90m12:04:00 AM[0m] Building project '/src/lib/tsconfig.json'...

[[90m12:04:00 AM[0m] Project 'src/app/tsconfig.json' is out of date because output of its dependency 'src/lib' has changed

[[90m12:04:00 AM[0m] Updating output of project '/src/app/tsconfig.json'...

[[90m12:04:00 AM[0m] Updating unchanged output timestamps of project '/src/app/tsconfig.json'...

exitCode:: ExitStatus.Success


//// [/src/app/module.js]
///<reference path="./tripleRef.d.ts"/>
var file0Const = new libfile0();
var myGlob = 20;
define("file1", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = void 0;
    exports.x = 10;console.log(exports.x);
});
define("file2", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.y = void 0;
    exports.y = 20;
});
var globalConst = 10;
define("file3", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.z = void 0;
    exports.z = 30;
});
///<reference path="./tripleRef.d.ts"/>
var file4Const = new appfile4();
var myVar = 30;
//# sourceMappingURL=module.js.map

//// [/src/app/module.js.map]
{"version":3,"file":"module.js","sourceRoot":"","sources":["../lib/file0.ts","../lib/file1.ts","../lib/file2.ts","../lib/global.ts","file3.ts","file4.ts"],"names":[],"mappings":"AAAA,uCAAuC;AACvC,IAAM,UAAU,GAAG,IAAI,QAAQ,EAAE,CAAC;AAClC,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;ICFL,QAAA,CAAC,GAAG,EAAE,CAAC,OAAO,CAAC,GAAG,CAAC,SAAC,CAAC,CAAC;;;;;;ICAtB,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,WAAW,GAAG,EAAE,CAAC;;;;;ICAV,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,uCAAuC;AACvC,IAAM,UAAU,GAAG,IAAI,QAAQ,EAAE,CAAC;AAClC,IAAM,KAAK,GAAG,EAAE,CAAC"}

//// [/src/app/module.js.map.baseline.txt]
===================================================================
JsFile: module.js
mapUrl: module.js.map
sourceRoot: 
sources: ../lib/file0.ts,../lib/file1.ts,../lib/file2.ts,../lib/global.ts,file3.ts,file4.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:../lib/file0.ts
-------------------------------------------------------------------
>>>///<reference path="./tripleRef.d.ts"/>
1 >
2 >^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
1 >
2 >///<reference path="./tripleRef.d.ts"/>
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 40) Source(1, 40) + SourceIndex(0)
---
>>>var file0Const = new libfile0();
1 >
2 >^^^^
3 >    ^^^^^^^^^^
4 >              ^^^
5 >                 ^^^^
6 >                     ^^^^^^^^
7 >                             ^^
8 >                               ^
1 >
  >
2 >const 
3 >    file0Const
4 >               = 
5 >                 new 
6 >                     libfile0
7 >                             ()
8 >                               ;
1 >Emitted(2, 1) Source(2, 1) + SourceIndex(0)
2 >Emitted(2, 5) Source(2, 7) + SourceIndex(0)
3 >Emitted(2, 15) Source(2, 17) + SourceIndex(0)
4 >Emitted(2, 18) Source(2, 20) + SourceIndex(0)
5 >Emitted(2, 22) Source(2, 24) + SourceIndex(0)
6 >Emitted(2, 30) Source(2, 32) + SourceIndex(0)
7 >Emitted(2, 32) Source(2, 34) + SourceIndex(0)
8 >Emitted(2, 33) Source(2, 35) + SourceIndex(0)
---
>>>var myGlob = 20;
1 >
2 >^^^^
3 >    ^^^^^^
4 >          ^^^
5 >             ^^
6 >               ^
7 >                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >const 
3 >    myGlob
4 >           = 
5 >             20
6 >               ;
1 >Emitted(3, 1) Source(3, 1) + SourceIndex(0)
2 >Emitted(3, 5) Source(3, 7) + SourceIndex(0)
3 >Emitted(3, 11) Source(3, 13) + SourceIndex(0)
4 >Emitted(3, 14) Source(3, 16) + SourceIndex(0)
5 >Emitted(3, 16) Source(3, 18) + SourceIndex(0)
6 >Emitted(3, 17) Source(3, 19) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:../lib/file1.ts
-------------------------------------------------------------------
>>>define("file1", ["require", "exports"], function (require, exports) {
>>>    "use strict";
>>>    Object.defineProperty(exports, "__esModule", { value: true });
>>>    exports.x = void 0;
>>>    exports.x = 10;console.log(exports.x);
1->^^^^
2 >    ^^^^^^^^
3 >            ^
4 >             ^^^
5 >                ^^
6 >                  ^
7 >                   ^^^^^^^
8 >                          ^
9 >                           ^^^
10>                              ^
11>                               ^^^^^^^^^
12>                                        ^
13>                                         ^
1->export const 
2 >    
3 >            x
4 >              = 
5 >                10
6 >                  ;
7 >                   console
8 >                          .
9 >                           log
10>                              (
11>                               x
12>                                        )
13>                                         ;
1->Emitted(8, 5) Source(1, 14) + SourceIndex(1)
2 >Emitted(8, 13) Source(1, 14) + SourceIndex(1)
3 >Emitted(8, 14) Source(1, 15) + SourceIndex(1)
4 >Emitted(8, 17) Source(1, 18) + SourceIndex(1)
5 >Emitted(8, 19) Source(1, 20) + SourceIndex(1)
6 >Emitted(8, 20) Source(1, 21) + SourceIndex(1)
7 >Emitted(8, 27) Source(1, 28) + SourceIndex(1)
8 >Emitted(8, 28) Source(1, 29) + SourceIndex(1)
9 >Emitted(8, 31) Source(1, 32) + SourceIndex(1)
10>Emitted(8, 32) Source(1, 33) + SourceIndex(1)
11>Emitted(8, 41) Source(1, 34) + SourceIndex(1)
12>Emitted(8, 42) Source(1, 35) + SourceIndex(1)
13>Emitted(8, 43) Source(1, 36) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:../lib/file2.ts
-------------------------------------------------------------------
>>>});
>>>define("file2", ["require", "exports"], function (require, exports) {
>>>    "use strict";
>>>    Object.defineProperty(exports, "__esModule", { value: true });
>>>    exports.y = void 0;
>>>    exports.y = 20;
1 >^^^^
2 >    ^^^^^^^^
3 >            ^
4 >             ^^^
5 >                ^^
6 >                  ^
1 >export const 
2 >    
3 >            y
4 >              = 
5 >                20
6 >                  ;
1 >Emitted(14, 5) Source(1, 14) + SourceIndex(2)
2 >Emitted(14, 13) Source(1, 14) + SourceIndex(2)
3 >Emitted(14, 14) Source(1, 15) + SourceIndex(2)
4 >Emitted(14, 17) Source(1, 18) + SourceIndex(2)
5 >Emitted(14, 19) Source(1, 20) + SourceIndex(2)
6 >Emitted(14, 20) Source(1, 21) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:../lib/global.ts
-------------------------------------------------------------------
>>>});
>>>var globalConst = 10;
1 >
2 >^^^^
3 >    ^^^^^^^^^^^
4 >               ^^^
5 >                  ^^
6 >                    ^
7 >                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >const 
3 >    globalConst
4 >                = 
5 >                  10
6 >                    ;
1 >Emitted(16, 1) Source(1, 1) + SourceIndex(3)
2 >Emitted(16, 5) Source(1, 7) + SourceIndex(3)
3 >Emitted(16, 16) Source(1, 18) + SourceIndex(3)
4 >Emitted(16, 19) Source(1, 21) + SourceIndex(3)
5 >Emitted(16, 21) Source(1, 23) + SourceIndex(3)
6 >Emitted(16, 22) Source(1, 24) + SourceIndex(3)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:file3.ts
-------------------------------------------------------------------
>>>define("file3", ["require", "exports"], function (require, exports) {
>>>    "use strict";
>>>    Object.defineProperty(exports, "__esModule", { value: true });
>>>    exports.z = void 0;
>>>    exports.z = 30;
1->^^^^
2 >    ^^^^^^^^
3 >            ^
4 >             ^^^
5 >                ^^
6 >                  ^
1->export const 
2 >    
3 >            z
4 >              = 
5 >                30
6 >                  ;
1->Emitted(21, 5) Source(1, 14) + SourceIndex(4)
2 >Emitted(21, 13) Source(1, 14) + SourceIndex(4)
3 >Emitted(21, 14) Source(1, 15) + SourceIndex(4)
4 >Emitted(21, 17) Source(1, 18) + SourceIndex(4)
5 >Emitted(21, 19) Source(1, 20) + SourceIndex(4)
6 >Emitted(21, 20) Source(1, 21) + SourceIndex(4)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:file4.ts
-------------------------------------------------------------------
>>>});
>>>///<reference path="./tripleRef.d.ts"/>
1 >
2 >^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
1 >
2 >///<reference path="./tripleRef.d.ts"/>
1 >Emitted(23, 1) Source(1, 1) + SourceIndex(5)
2 >Emitted(23, 40) Source(1, 40) + SourceIndex(5)
---
>>>var file4Const = new appfile4();
1 >
2 >^^^^
3 >    ^^^^^^^^^^
4 >              ^^^
5 >                 ^^^^
6 >                     ^^^^^^^^
7 >                             ^^
8 >                               ^
1 >
  >
2 >const 
3 >    file4Const
4 >               = 
5 >                 new 
6 >                     appfile4
7 >                             ()
8 >                               ;
1 >Emitted(24, 1) Source(2, 1) + SourceIndex(5)
2 >Emitted(24, 5) Source(2, 7) + SourceIndex(5)
3 >Emitted(24, 15) Source(2, 17) + SourceIndex(5)
4 >Emitted(24, 18) Source(2, 20) + SourceIndex(5)
5 >Emitted(24, 22) Source(2, 24) + SourceIndex(5)
6 >Emitted(24, 30) Source(2, 32) + SourceIndex(5)
7 >Emitted(24, 32) Source(2, 34) + SourceIndex(5)
8 >Emitted(24, 33) Source(2, 35) + SourceIndex(5)
---
>>>var myVar = 30;
1 >
2 >^^^^
3 >    ^^^^^
4 >         ^^^
5 >            ^^
6 >              ^
7 >               ^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >const 
3 >    myVar
4 >          = 
5 >            30
6 >              ;
1 >Emitted(25, 1) Source(3, 1) + SourceIndex(5)
2 >Emitted(25, 5) Source(3, 7) + SourceIndex(5)
3 >Emitted(25, 10) Source(3, 12) + SourceIndex(5)
4 >Emitted(25, 13) Source(3, 15) + SourceIndex(5)
5 >Emitted(25, 15) Source(3, 17) + SourceIndex(5)
6 >Emitted(25, 16) Source(3, 18) + SourceIndex(5)
---
>>>//# sourceMappingURL=module.js.map

//// [/src/app/module.tsbuildinfo]
{
  "bundle": {
    "commonSourceDirectory": "./",
    "sourceFiles": [
      "./file3.ts",
      "./file4.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 555,
          "kind": "prepend",
          "data": "../lib/module.js",
          "texts": [
            {
              "pos": 0,
              "end": 555,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 557,
          "end": 856,
          "kind": "text"
        }
      ]
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 39,
          "kind": "reference",
          "data": "tripleRef.d.ts"
        },
        {
          "pos": 41,
          "end": 87,
          "kind": "reference",
          "data": "../lib/tripleRef.d.ts"
        },
        {
          "pos": 89,
          "end": 297,
          "kind": "prepend",
          "data": "../lib/module.d.ts",
          "texts": [
            {
              "pos": 89,
              "end": 297,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 297,
          "end": 416,
          "kind": "text"
        }
      ]
    }
  },
  "version": "FakeTSVersion"
}

//// [/src/app/module.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/app/module.js
----------------------------------------------------------------------
prepend: (0-555):: ../lib/module.js texts:: 1
>>--------------------------------------------------------------------
text: (0-555)
///<reference path="./tripleRef.d.ts"/>
var file0Const = new libfile0();
var myGlob = 20;
define("file1", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = void 0;
    exports.x = 10;console.log(exports.x);
});
define("file2", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.y = void 0;
    exports.y = 20;
});
var globalConst = 10;
----------------------------------------------------------------------
text: (557-856)
define("file3", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.z = void 0;
    exports.z = 30;
});
///<reference path="./tripleRef.d.ts"/>
var file4Const = new appfile4();
var myVar = 30;
======================================================================
======================================================================
File:: /src/app/module.d.ts
----------------------------------------------------------------------
reference: (0-39):: tripleRef.d.ts
/// <reference path="tripleRef.d.ts" />
----------------------------------------------------------------------
reference: (41-87):: ../lib/tripleRef.d.ts
/// <reference path="../lib/tripleRef.d.ts" />
----------------------------------------------------------------------
prepend: (89-297):: ../lib/module.d.ts texts:: 1
>>--------------------------------------------------------------------
text: (89-297)
declare const file0Const: libfile0;
declare const myGlob = 20;
declare module "file1" {
    export const x = 10;
}
declare module "file2" {
    export const y = 20;
}
declare const globalConst = 10;

----------------------------------------------------------------------
text: (297-416)
declare module "file3" {
    export const z = 30;
}
declare const file4Const: appfile4;
declare const myVar = 30;

======================================================================

//// [/src/lib/file1.ts]
export const x = 10;console.log(x);

//// [/src/lib/module.d.ts] file written with same contents
//// [/src/lib/module.d.ts.map] file written with same contents
//// [/src/lib/module.d.ts.map.baseline.txt] file written with same contents
//// [/src/lib/module.js]
///<reference path="./tripleRef.d.ts"/>
var file0Const = new libfile0();
var myGlob = 20;
define("file1", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = void 0;
    exports.x = 10;console.log(exports.x);
});
define("file2", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.y = void 0;
    exports.y = 20;
});
var globalConst = 10;
//# sourceMappingURL=module.js.map

//// [/src/lib/module.js.map]
{"version":3,"file":"module.js","sourceRoot":"","sources":["file0.ts","file1.ts","file2.ts","global.ts"],"names":[],"mappings":"AAAA,uCAAuC;AACvC,IAAM,UAAU,GAAG,IAAI,QAAQ,EAAE,CAAC;AAClC,IAAM,MAAM,GAAG,EAAE,CAAC;;;;;ICFL,QAAA,CAAC,GAAG,EAAE,CAAC,OAAO,CAAC,GAAG,CAAC,SAAC,CAAC,CAAC;;;;;;ICAtB,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,WAAW,GAAG,EAAE,CAAC"}

//// [/src/lib/module.js.map.baseline.txt]
===================================================================
JsFile: module.js
mapUrl: module.js.map
sourceRoot: 
sources: file0.ts,file1.ts,file2.ts,global.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/lib/module.js
sourceFile:file0.ts
-------------------------------------------------------------------
>>>///<reference path="./tripleRef.d.ts"/>
1 >
2 >^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
1 >
2 >///<reference path="./tripleRef.d.ts"/>
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 40) Source(1, 40) + SourceIndex(0)
---
>>>var file0Const = new libfile0();
1 >
2 >^^^^
3 >    ^^^^^^^^^^
4 >              ^^^
5 >                 ^^^^
6 >                     ^^^^^^^^
7 >                             ^^
8 >                               ^
1 >
  >
2 >const 
3 >    file0Const
4 >               = 
5 >                 new 
6 >                     libfile0
7 >                             ()
8 >                               ;
1 >Emitted(2, 1) Source(2, 1) + SourceIndex(0)
2 >Emitted(2, 5) Source(2, 7) + SourceIndex(0)
3 >Emitted(2, 15) Source(2, 17) + SourceIndex(0)
4 >Emitted(2, 18) Source(2, 20) + SourceIndex(0)
5 >Emitted(2, 22) Source(2, 24) + SourceIndex(0)
6 >Emitted(2, 30) Source(2, 32) + SourceIndex(0)
7 >Emitted(2, 32) Source(2, 34) + SourceIndex(0)
8 >Emitted(2, 33) Source(2, 35) + SourceIndex(0)
---
>>>var myGlob = 20;
1 >
2 >^^^^
3 >    ^^^^^^
4 >          ^^^
5 >             ^^
6 >               ^
7 >                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >const 
3 >    myGlob
4 >           = 
5 >             20
6 >               ;
1 >Emitted(3, 1) Source(3, 1) + SourceIndex(0)
2 >Emitted(3, 5) Source(3, 7) + SourceIndex(0)
3 >Emitted(3, 11) Source(3, 13) + SourceIndex(0)
4 >Emitted(3, 14) Source(3, 16) + SourceIndex(0)
5 >Emitted(3, 16) Source(3, 18) + SourceIndex(0)
6 >Emitted(3, 17) Source(3, 19) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/lib/module.js
sourceFile:file1.ts
-------------------------------------------------------------------
>>>define("file1", ["require", "exports"], function (require, exports) {
>>>    "use strict";
>>>    Object.defineProperty(exports, "__esModule", { value: true });
>>>    exports.x = void 0;
>>>    exports.x = 10;console.log(exports.x);
1->^^^^
2 >    ^^^^^^^^
3 >            ^
4 >             ^^^
5 >                ^^
6 >                  ^
7 >                   ^^^^^^^
8 >                          ^
9 >                           ^^^
10>                              ^
11>                               ^^^^^^^^^
12>                                        ^
13>                                         ^
1->export const 
2 >    
3 >            x
4 >              = 
5 >                10
6 >                  ;
7 >                   console
8 >                          .
9 >                           log
10>                              (
11>                               x
12>                                        )
13>                                         ;
1->Emitted(8, 5) Source(1, 14) + SourceIndex(1)
2 >Emitted(8, 13) Source(1, 14) + SourceIndex(1)
3 >Emitted(8, 14) Source(1, 15) + SourceIndex(1)
4 >Emitted(8, 17) Source(1, 18) + SourceIndex(1)
5 >Emitted(8, 19) Source(1, 20) + SourceIndex(1)
6 >Emitted(8, 20) Source(1, 21) + SourceIndex(1)
7 >Emitted(8, 27) Source(1, 28) + SourceIndex(1)
8 >Emitted(8, 28) Source(1, 29) + SourceIndex(1)
9 >Emitted(8, 31) Source(1, 32) + SourceIndex(1)
10>Emitted(8, 32) Source(1, 33) + SourceIndex(1)
11>Emitted(8, 41) Source(1, 34) + SourceIndex(1)
12>Emitted(8, 42) Source(1, 35) + SourceIndex(1)
13>Emitted(8, 43) Source(1, 36) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/lib/module.js
sourceFile:file2.ts
-------------------------------------------------------------------
>>>});
>>>define("file2", ["require", "exports"], function (require, exports) {
>>>    "use strict";
>>>    Object.defineProperty(exports, "__esModule", { value: true });
>>>    exports.y = void 0;
>>>    exports.y = 20;
1 >^^^^
2 >    ^^^^^^^^
3 >            ^
4 >             ^^^
5 >                ^^
6 >                  ^
1 >export const 
2 >    
3 >            y
4 >              = 
5 >                20
6 >                  ;
1 >Emitted(14, 5) Source(1, 14) + SourceIndex(2)
2 >Emitted(14, 13) Source(1, 14) + SourceIndex(2)
3 >Emitted(14, 14) Source(1, 15) + SourceIndex(2)
4 >Emitted(14, 17) Source(1, 18) + SourceIndex(2)
5 >Emitted(14, 19) Source(1, 20) + SourceIndex(2)
6 >Emitted(14, 20) Source(1, 21) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/lib/module.js
sourceFile:global.ts
-------------------------------------------------------------------
>>>});
>>>var globalConst = 10;
1 >
2 >^^^^
3 >    ^^^^^^^^^^^
4 >               ^^^
5 >                  ^^
6 >                    ^
7 >                     ^^^^^^^^^^^^->
1 >
2 >const 
3 >    globalConst
4 >                = 
5 >                  10
6 >                    ;
1 >Emitted(16, 1) Source(1, 1) + SourceIndex(3)
2 >Emitted(16, 5) Source(1, 7) + SourceIndex(3)
3 >Emitted(16, 16) Source(1, 18) + SourceIndex(3)
4 >Emitted(16, 19) Source(1, 21) + SourceIndex(3)
5 >Emitted(16, 21) Source(1, 23) + SourceIndex(3)
6 >Emitted(16, 22) Source(1, 24) + SourceIndex(3)
---
>>>//# sourceMappingURL=module.js.map

//// [/src/lib/module.tsbuildinfo]
{
  "bundle": {
    "commonSourceDirectory": "./",
    "sourceFiles": [
      "./file0.ts",
      "./file1.ts",
      "./file2.ts",
      "./global.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 555,
          "kind": "text"
        }
      ]
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 39,
          "kind": "reference",
          "data": "tripleRef.d.ts"
        },
        {
          "pos": 41,
          "end": 249,
          "kind": "text"
        }
      ]
    }
  },
  "version": "FakeTSVersion"
}

//// [/src/lib/module.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/lib/module.js
----------------------------------------------------------------------
text: (0-555)
///<reference path="./tripleRef.d.ts"/>
var file0Const = new libfile0();
var myGlob = 20;
define("file1", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = void 0;
    exports.x = 10;console.log(exports.x);
});
define("file2", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.y = void 0;
    exports.y = 20;
});
var globalConst = 10;
======================================================================
======================================================================
File:: /src/lib/module.d.ts
----------------------------------------------------------------------
reference: (0-39):: tripleRef.d.ts
/// <reference path="tripleRef.d.ts" />
----------------------------------------------------------------------
text: (41-249)
declare const file0Const: libfile0;
declare const myGlob = 20;
declare module "file1" {
    export const x = 10;
}
declare module "file2" {
    export const y = 20;
}
declare const globalConst = 10;

======================================================================

