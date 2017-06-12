//// [returnInConstructor1.ts]
class A {
    foo() { }
    constructor() {
        return;
    }
}

class B {
    foo() { }
    constructor() {
        return 1; // error
    }
}

class C {
    foo() { }
    constructor() {
        return this;
    }
}

class D {
    foo() { }
    constructor() {
        return "test"; // error
    }
}

class E {
    public foo: number;
    constructor() {
        return { foo: 1 };
    }
}

class F {
    public foo: string;
    constructor() {
        return { foo: 1 }; //error
    }
}

class G {
    private test: number;
    public test1() { }
    foo() { }
    constructor() {
        this.test = 2;
    }
}

class H extends F {
    constructor() {
        super();
        return new G(); //error
    }
}

class I extends G {
    constructor() {
        super();
        return new G();
    }
}



//// [returnInConstructor1.js]
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
        return;
    }
    var proto_1 = A.prototype;
    proto_1.foo = function () { };
    return A;
}());
var B = (function () {
    function B() {
        return 1; // error
    }
    var proto_2 = B.prototype;
    proto_2.foo = function () { };
    return B;
}());
var C = (function () {
    function C() {
        return this;
    }
    var proto_3 = C.prototype;
    proto_3.foo = function () { };
    return C;
}());
var D = (function () {
    function D() {
        return "test"; // error
    }
    var proto_4 = D.prototype;
    proto_4.foo = function () { };
    return D;
}());
var E = (function () {
    function E() {
        return { foo: 1 };
    }
    return E;
}());
var F = (function () {
    function F() {
        return { foo: 1 }; //error
    }
    return F;
}());
var G = (function () {
    function G() {
        this.test = 2;
    }
    var proto_5 = G.prototype;
    proto_5.test1 = function () { };
    proto_5.foo = function () { };
    return G;
}());
var H = (function (_super) {
    __extends(H, _super);
    function H() {
        var _this = _super.call(this) || this;
        return new G(); //error
    }
    return H;
}(F));
var I = (function (_super) {
    __extends(I, _super);
    function I() {
        var _this = _super.call(this) || this;
        return new G();
    }
    return I;
}(G));
