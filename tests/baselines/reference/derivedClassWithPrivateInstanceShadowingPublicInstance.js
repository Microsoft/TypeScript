//// [derivedClassWithPrivateInstanceShadowingPublicInstance.ts]
class Base {
    public x: string;
    public fn(): string {
        return '';
    }

    public get a() { return 1; }
    public set a(v) { }
}

// error, not a subtype
class Derived extends Base {
    private x: string; 
    private fn(): string {
        return '';
    }

    private get a() { return 1; }
    private set a(v) { }
}

var r = Base.x; // ok
var r2 = Derived.x; // error

var r3 = Base.fn(); // ok
var r4 = Derived.fn(); // error

var r5 = Base.a; // ok
Base.a = 2; // ok

var r6 = Derived.a; // error
Derived.a = 2; // error

//// [derivedClassWithPrivateInstanceShadowingPublicInstance.js]
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Base = /** @class */ (function () {
    function Base() {
    }
    var proto_1 = Base.prototype;
    proto_1.fn = function () {
        return '';
    };
    Object.defineProperty(proto_1, "a", {
        get: function () { return 1; },
        set: function (v) { },
        enumerable: false,
        configurable: true
    });
    return Base;
}());
// error, not a subtype
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    var proto_2 = Derived.prototype;
    proto_2.fn = function () {
        return '';
    };
    Object.defineProperty(proto_2, "a", {
        get: function () { return 1; },
        set: function (v) { },
        enumerable: false,
        configurable: true
    });
    return Derived;
}(Base));
var r = Base.x; // ok
var r2 = Derived.x; // error
var r3 = Base.fn(); // ok
var r4 = Derived.fn(); // error
var r5 = Base.a; // ok
Base.a = 2; // ok
var r6 = Derived.a; // error
Derived.a = 2; // error
