//// [parserErrantSemicolonInClass1.ts]
class a {
    //constructor ();
    constructor (n: number);
    constructor (s: string);
    constructor (ns: any) {

    }

    public pgF() { };

    public pv;
    public get d() {
        return 30;
    }
    public set d() {
    }

    public static get p2() {
        return { x: 30, y: 40 };
    }

    private static d2() {
    }
    private static get p3() {
        return "string";
    }
    private pv3;

    private foo(n: number): string;
    private foo(s: string): string;
    private foo(ns: any) {
        return ns.toString();
    }
}


//// [parserErrantSemicolonInClass1.js]
var a = /** @class */ (function () {
    function a(ns) {
    }
    var proto_1 = a.prototype;
    proto_1.pgF = function () { };
    ;
    Object.defineProperty(proto_1, "d", {
        get: function () {
            return 30;
        },
        set: function () {
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(a, "p2", {
        get: function () {
            return { x: 30, y: 40 };
        },
        enumerable: false,
        configurable: true
    });
    a.d2 = function () {
    };
    Object.defineProperty(a, "p3", {
        get: function () {
            return "string";
        },
        enumerable: false,
        configurable: true
    });
    proto_1.foo = function (ns) {
        return ns.toString();
    };
    return a;
}());
