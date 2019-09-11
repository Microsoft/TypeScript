//// [computedPropertyNames38_ES5.ts]
class Foo { x }
class Foo2 { x; y }

class C {
    [s: string]: Foo2;

    // Computed properties
    get [1 << 6]() { return new Foo }
    set [1 << 6](p: Foo2) { }
}

//// [computedPropertyNames38_ES5.js]
var Foo = /** @class */ (function () {
    function Foo() {
    }
    return Foo;
}());
var Foo2 = /** @class */ (function () {
    function Foo2() {
    }
    return Foo2;
}());
var C = /** @class */ (function () {
    function C() {
    }
    var proto_1 = C.prototype;
    Object.defineProperty(proto_1, 1 << 6, {
        // Computed properties
        get: function () { return new Foo; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(proto_1, 1 << 6, {
        set: function (p) { },
        enumerable: true,
        configurable: true
    });
    return C;
}());
