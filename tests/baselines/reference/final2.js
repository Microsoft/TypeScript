//// [final2.ts]
class A {
    private final m() {}
}


//// [final2.js]
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.m = function () { };
    return A;
}());
