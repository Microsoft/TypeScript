//// [superCallInsideClassExpression.ts]
class A {
}

class C {
}

class B extends A {
    constructor() {

        var D = class extends C {
            constructor() {
                super();
            }
        }
    }
}

//// [superCallInsideClassExpression.js]
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var A = /** @class */ (function () {
    function A() {
    }
    return A;
}());
var C = /** @class */ (function () {
    function C() {
    }
    return C;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        var _this = this;
        var D = /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                return _super.call(this) || this;
            }
            return class_1;
        }(C));
        return _this;
    }
    return B;
}(A));
