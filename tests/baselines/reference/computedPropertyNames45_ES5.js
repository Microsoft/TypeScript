//// [computedPropertyNames45_ES5.ts]
class Foo { x }
class Foo2 { x; y }

class C {
    get ["get1"]() { return new Foo }
}

class D extends C {
    // No error when the indexer is in a class more derived than the computed property
    [s: string]: Foo2;
    set ["set1"](p: Foo) { }
}

//// [computedPropertyNames45_ES5.js]
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
var Foo = (function () {
    function Foo() {
    }
    return Foo;
}());
var Foo2 = (function () {
    function Foo2() {
    }
    return Foo2;
}());
var C = (function () {
    function C() {
    }
    var proto_1 = C.prototype;
    Object.defineProperty(proto_1, "get1", {
        get: function () { return new Foo; },
        enumerable: true,
        configurable: true
    });
    return C;
}());
var D = (function (_super) {
    __extends(D, _super);
    function D() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    var proto_2 = D.prototype;
    Object.defineProperty(proto_2, "set1", {
        set: function (p) { },
        enumerable: true,
        configurable: true
    });
    return D;
}(C));
