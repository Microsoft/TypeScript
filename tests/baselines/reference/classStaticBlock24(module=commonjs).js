//// [classStaticBlock24.ts]
export class C {
  static x: number;
  static {
    C.x = 1;
  }
}


//// [classStaticBlock24.js]
"use strict";
var _C__;
exports.__esModule = true;
exports.C = void 0;
var C = /** @class */ (function () {
    function C() {
    }
    return C;
}());
exports.C = C;
_C__ = { value: (function () {
        C.x = 1;
    })() };
