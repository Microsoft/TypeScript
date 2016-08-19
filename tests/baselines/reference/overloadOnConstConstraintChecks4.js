//// [overloadOnConstConstraintChecks4.ts]
class Z { }
class A extends Z { private x = 1 }
class B extends A {}
class C extends A {
    public foo() { }
}
function foo(name: 'hi'): B;
function foo(name: 'bye'): C;
function foo(name: string): A;
function foo(name: any): Z {
    return null;
}


//// [overloadOnConstConstraintChecks4.js]
var __extends = (this && this.__extends) || function (d, b) {
    if (b) Object.setPrototypeOf ? Object.setPrototypeOf(d, b) : d.__proto__ = b;
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Z = (function () {
    function Z() {
    }
    return Z;
}());
var A = (function (_super) {
    __extends(A, _super);
    function A() {
        _super.apply(this, arguments);
        this.x = 1;
    }
    return A;
}(Z));
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        _super.apply(this, arguments);
    }
    return B;
}(A));
var C = (function (_super) {
    __extends(C, _super);
    function C() {
        _super.apply(this, arguments);
    }
    C.prototype.foo = function () { };
    return C;
}(A));
function foo(name) {
    return null;
}
