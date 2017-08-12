//// [superCallInsideObjectLiteralExpression.ts]
class A {
    foo() {
    }
}

class B extends A {
    constructor() {
        var x = {
            x: super()
        }
    }
}

//// [superCallInsideObjectLiteralExpression.js]
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var A = (function () {
    function A() {
    }
    var proto_1 = A.prototype;
    proto_1.foo = function () {
    };
    return A;
}());
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        var _this = this;
        var x = {
            x: _this = _super.call(this) || this
        };
        return _this;
    }
    return B;
}(A));
