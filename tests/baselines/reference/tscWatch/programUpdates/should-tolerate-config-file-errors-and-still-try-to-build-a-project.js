/a/lib/tsc.js -w -p /a/b/tsconfig.json
//// [/a/b/commonFile1.ts]
let x = 1

//// [/a/b/commonFile2.ts]
let y = 1

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

//// [/a/b/tsconfig.json]
{
                        "compilerOptions": {
                            "module": "none",
                            "allowAnything": true
                        },
                        "someOtherProperty": {}
                    }

//// [/a/b/commonFile1.js]
var x = 1;


//// [/a/b/commonFile2.js]
var y = 1;



Output::
>> Screen clear
12:00:17 AM - Starting compilation in watch mode...


a/b/tsconfig.json(4,29): error TS5023: Unknown compiler option 'allowAnything'.


12:00:22 AM - Found 1 error. Watching for file changes.


Program root files: ["/a/b/commonFile1.ts","/a/b/commonFile2.ts"]
Program options: {"module":0,"watch":true,"project":"/a/b/tsconfig.json","configFilePath":"/a/b/tsconfig.json"}
Program files::
/a/lib/lib.d.ts
/a/b/commonFile1.ts
/a/b/commonFile2.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/b/commonFile1.ts
/a/b/commonFile2.ts

WatchedFiles::
/a/b/tsconfig.json:
  {"pollingInterval":250}
/a/b/commonfile1.ts:
  {"pollingInterval":250}
/a/b/commonfile2.ts:
  {"pollingInterval":250}
/a/lib/lib.d.ts:
  {"pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/a/b/node_modules/@types:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/a/b:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined
