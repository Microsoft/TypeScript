//// [tests/cases/compiler/moduleAugmentationImportsAndExports3.ts] ////

//// [f1.ts]
export class A {}

//// [f2.ts]
export class B {
    n: number;
}

//// [f3.ts]
import {A} from "./f1";

A.prototype.foo = function () { return undefined; }

namespace N {
    export interface Ifc { a }
    export interface Cls { a }
}

declare module "./f1" {
    import {B} from "./f2";
    import I = N.Ifc;
    import C = N.Cls;
    interface A {
        foo(): B;
        bar(): I;
        baz(): C;
    }
}

//// [f4.ts]
import {A} from "./f1";
import "./f3";

let a: A;
let b = a.foo().n;

//// [f1.js]
"use strict";
exports.__esModule = true;
var A = /** @class */ (function () {
    function A() {
    }
    return A;
}());
exports.A = A;
//// [f2.js]
"use strict";
exports.__esModule = true;
var B = /** @class */ (function () {
    function B() {
    }
    return B;
}());
exports.B = B;
//// [f3.js]
"use strict";
exports.__esModule = true;
var f1_1 = require("./f1");
f1_1.A.prototype.foo = function () { return undefined; };
//// [f4.js]
"use strict";
exports.__esModule = true;
require("./f3");
var a;
var b = a.foo().n;
