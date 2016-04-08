//// [tests/cases/compiler/outModuleConcatCommonjs.ts] ////

//// [a.ts]

// This should be an error

export class A { }

//// [b.ts]
import {A} from "./ref/a";
export class B extends A { }

//// [all.js]
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// This should be an error
"use strict";
var A = (function () {
    function A() {
    }
    return A;
}());
exports.A = A;
"use strict";
var a_1 = require("./ref/a");
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        _super.apply(this, arguments);
    }
    return B;
}(a_1.A));
exports.B = B;
//# sourceMappingURL=all.js.map

//// [all.d.ts]
declare module "ref/a" {
    export class A {
    }
}
declare module "b" {
    import { A } from "ref/a";
    export class B extends A {
    }
}
