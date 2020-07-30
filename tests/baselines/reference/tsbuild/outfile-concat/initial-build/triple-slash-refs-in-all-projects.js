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

//// [/src/first/first_PART1.ts]
interface TheFirst {
    none: any;
}

const s = "Hello, world";

interface NoJsForHereEither {
    none: any;
}

console.log(s);


//// [/src/first/first_part2.ts]
///<reference path="./tripleRef.d.ts"/>
const first_part2Const = new firstfirst_part2();
console.log(f());


//// [/src/first/first_part3.ts]
function f() {
    return "JS does hoists";
}

//// [/src/first/tripleRef.d.ts]
declare class firstfirst_part2 { }

//// [/src/first/tsconfig.json]
{
  "compilerOptions": {
    "target": "es5",
    "composite": true,
    "removeComments": true,
    "strict": false,
    "sourceMap": true,
    "declarationMap": true,
    "outFile": "./bin/first-output.js",
    "skipDefaultLibCheck": true
  },
  "files": [
    "first_PART1.ts",
    "first_part2.ts",
    "first_part3.ts"
  ],
  "references": [
  ]
}


//// [/src/second/second_part1.ts]
///<reference path="./tripleRef.d.ts"/>
const second_part1Const = new secondsecond_part1();
namespace N {
    // Comment text
}

namespace N {
    function f() {
        console.log('testing');
    }

    f();
}


//// [/src/second/second_part2.ts]
class C {
    doSomething() {
        console.log("something got done");
    }
}


//// [/src/second/tripleRef.d.ts]
declare class secondsecond_part1 { }

//// [/src/second/tsconfig.json]
{
  "compilerOptions": {
    "target": "es5",
    "composite": true,
    "removeComments": true,
    "strict": false,
    "sourceMap": true,
    "declarationMap": true,
    "declaration": true,
    "outFile": "../2/second-output.js",
    "skipDefaultLibCheck": true
  },
  "references": [
  ]
}


//// [/src/third/third_part1.ts]
///<reference path="./tripleRef.d.ts"/>
const third_part1Const = new thirdthird_part1();
var c = new C();
c.doSomething();


//// [/src/third/tripleRef.d.ts]
declare class thirdthird_part1 { }

//// [/src/third/tsconfig.json]
{
  "compilerOptions": {
    "target": "es5",
    "composite": true,
    "removeComments": true,
    "strict": false,
    "sourceMap": true,
    "declarationMap": true,
    "declaration": true,
    "outFile": "./thirdjs/output/third-output.js",
    "skipDefaultLibCheck": true
  },
  "files": [
    "third_part1.ts"
  ],
  "references": [
    { "path": "../first", "prepend": true },
    { "path": "../second", "prepend": true },
  ]
}




Output::
/lib/tsc --b /src/third --verbose
[[90m12:01:00 AM[0m] Projects in this build: 
    * src/first/tsconfig.json
    * src/second/tsconfig.json
    * src/third/tsconfig.json

[[90m12:01:00 AM[0m] Project 'src/first/tsconfig.json' is out of date because output file 'src/first/bin/first-output.js' does not exist

[[90m12:01:00 AM[0m] Building project '/src/first/tsconfig.json'...

[96msrc/first/tsconfig.json[0m:[93m9[0m:[93m5[0m - [91merror[0m[90m TS1390: [0mThe `bundledPackageName` option must be provided when using outFile and node module resolution with declaration emit.

[7m9[0m     "outFile": "./bin/first-output.js",
[7m [0m [91m    ~~~~~~~~~[0m

[[90m12:01:00 AM[0m] Project 'src/second/tsconfig.json' is out of date because output file 'src/2/second-output.js' does not exist

[[90m12:01:00 AM[0m] Building project '/src/second/tsconfig.json'...

[96msrc/second/tsconfig.json[0m:[93m10[0m:[93m5[0m - [91merror[0m[90m TS1390: [0mThe `bundledPackageName` option must be provided when using outFile and node module resolution with declaration emit.

[7m10[0m     "outFile": "../2/second-output.js",
[7m  [0m [91m    ~~~~~~~~~[0m

[[90m12:01:00 AM[0m] Project 'src/third/tsconfig.json' can't be built because its dependency 'src/first' has errors

[[90m12:01:00 AM[0m] Skipping build of project '/src/third/tsconfig.json' because its dependency '/src/first' has errors


Found 2 errors.

exitCode:: ExitStatus.DiagnosticsPresent_OutputsSkipped
readFiles:: {
 "/src/third/tsconfig.json": 1,
 "/src/first/tsconfig.json": 1,
 "/src/second/tsconfig.json": 1,
 "/src/first/first_PART1.ts": 1,
 "/src/first/first_part2.ts": 1,
 "/src/first/tripleRef.d.ts": 1,
 "/src/first/first_part3.ts": 1,
 "/src/second/second_part1.ts": 1,
 "/src/second/tripleRef.d.ts": 1,
 "/src/second/second_part2.ts": 1
} 

