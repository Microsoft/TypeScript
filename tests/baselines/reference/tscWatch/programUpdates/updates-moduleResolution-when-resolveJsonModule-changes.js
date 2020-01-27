/a/lib/tsc.js -w
//// [/user/username/projects/myproject/a.ts]
import * as data from './data.json'

//// [/user/username/projects/myproject/data.json]
{ "foo": 1 }

//// [/user/username/projects/myproject/tsconfig.json]
{"compilerOptions":{"moduleResolution":"node"}}

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

//// [/user/username/projects/myproject/a.js]
"use strict";
exports.__esModule = true;



Output::
>> Screen clear
12:00:23 AM - Starting compilation in watch mode...


a.ts(1,23): error TS2732: Cannot find module './data.json'. Consider using '--resolveJsonModule' to import module with '.json' extension


12:00:26 AM - Found 1 error. Watching for file changes.


Program root files: ["/user/username/projects/myproject/a.ts"]
Program options: {"moduleResolution":2,"watch":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts

WatchedFiles::
/user/username/projects/myproject/tsconfig.json:
  {"pollingInterval":250}
/user/username/projects/myproject/a.ts:
  {"pollingInterval":250}
/a/lib/lib.d.ts:
  {"pollingInterval":250}

FsWatches::
/user/username/projects/myproject:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

FsWatchesRecursive::
/user/username/projects/myproject/data.json:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/node_modules/@types:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

Change:: Enable resolveJsonModule

//// [/user/username/projects/myproject/tsconfig.json]
{"compilerOptions":{"moduleResolution":"node","resolveJsonModule":true}}

//// [/user/username/projects/myproject/a.js] file written with same contents

Output::
>> Screen clear
12:00:30 AM - File change detected. Starting incremental compilation...



12:00:34 AM - Found 0 errors. Watching for file changes.


Program root files: ["/user/username/projects/myproject/a.ts"]
Program options: {"moduleResolution":2,"resolveJsonModule":true,"watch":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/data.json
/user/username/projects/myproject/a.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/data.json
/user/username/projects/myproject/a.ts

WatchedFiles::
/user/username/projects/myproject/tsconfig.json:
  {"pollingInterval":250}
/user/username/projects/myproject/a.ts:
  {"pollingInterval":250}
/a/lib/lib.d.ts:
  {"pollingInterval":250}
/user/username/projects/myproject/data.json:
  {"pollingInterval":250}

FsWatches::
/user/username/projects/myproject:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

FsWatchesRecursive::
/user/username/projects/myproject:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/data.json:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/node_modules/@types:
  {"fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined
