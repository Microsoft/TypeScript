//// [tests/cases/compiler/jsFileCompilationErrorOnDeclarationsWithJsFileReferenceWithOutDir.ts] ////

//// [a.ts]
class c {
}

//// [b.ts]
/// <reference path="c.js"/>
// b.d.ts should have c.js as the reference path since we dont emit declarations for js files
function foo() {
}

//// [c.js]
function bar() {
}

//// [a.js]
var c = /** @class */ (function () {
    function c() {
    }
    return c;
}());
//// [c.js]
function bar() {
}
//// [b.js]
/// <reference path="c.js"/>
// b.d.ts should have c.js as the reference path since we dont emit declarations for js files
function foo() {
}


//// [a.d.ts]
declare class c {
}
//// [c.d.ts]
declare function bar(): void;
//// [b.d.ts]
/// <reference path="c.d.ts" />
declare function foo(): void;
