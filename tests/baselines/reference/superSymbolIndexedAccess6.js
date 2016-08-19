//// [superSymbolIndexedAccess6.ts]
var symbol: any;

class Foo {
    static [symbol]() {
        return 0;
    }
}

class Bar extends Foo {
    static [symbol]() {
        return super[symbol]();
    }
}

//// [superSymbolIndexedAccess6.js]
var __extends = (this && this.__extends) || function (d, b) {
    if (b) Object.setPrototypeOf ? Object.setPrototypeOf(d, b) : d.__proto__ = b;
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var symbol;
var Foo = (function () {
    function Foo() {
    }
    Foo[symbol] = function () {
        return 0;
    };
    return Foo;
}());
var Bar = (function (_super) {
    __extends(Bar, _super);
    function Bar() {
        _super.apply(this, arguments);
    }
    Bar[symbol] = function () {
        return _super[symbol].call(this);
    };
    return Bar;
}(Foo));
