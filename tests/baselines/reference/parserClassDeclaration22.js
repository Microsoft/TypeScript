//// [parserClassDeclaration22.ts]
class C {
    "foo"();
    "bar"() { }
}

//// [parserClassDeclaration22.js]
var C = (function () {
    function C() {
    }
    var proto_1 = C.prototype;
    proto_1["bar"] = function () { };
    return C;
}());
