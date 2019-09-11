//// [anyIdenticalToItself.ts]
function foo(x: any);
function foo(x: any);
function foo(x: any, y: number) { }

class C {
    get X(): any {
        var y: any;
        return y;
    }
    set X(v: any) {
    }
}

//// [anyIdenticalToItself.js]
function foo(x, y) { }
var C = /** @class */ (function () {
    function C() {
    }
    var proto_1 = C.prototype;
    Object.defineProperty(proto_1, "X", {
        get: function () {
            var y;
            return y;
        },
        set: function (v) {
        },
        enumerable: true,
        configurable: true
    });
    return C;
}());
