//// [tests/cases/conformance/externalModules/typeOnly/importClause_default.ts] ////

//// [a.ts]
export default class A { a!: string }

//// [b.ts]
import type A from './a';
new A();
let a: A = { a: '' };


//// [a.js]
"use strict";
exports.__esModule = true;
var A = /** @class */ (function () {
    function A() {
    }
    return A;
}());
exports["default"] = A;
//// [b.js]
"use strict";
exports.__esModule = true;
new a_1["default"]();
var a = { a: '' };
