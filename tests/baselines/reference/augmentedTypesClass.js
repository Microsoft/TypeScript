//// [augmentedTypesClass.ts]
//// class then var
class c1 { public foo() { } }
var c1 = 1; // error

//// class then enum
class c4 { public foo() { } }
enum c4 { One } // error

//// [augmentedTypesClass.js]
//// class then var
var c1 = (function () {
    function c1() {
    }
    var proto_1 = c1.prototype;
    proto_1.foo = function () { };
    return c1;
}());
var c1 = 1; // error
//// class then enum
var c4 = (function () {
    function c4() {
    }
    var proto_2 = c4.prototype;
    proto_2.foo = function () { };
    return c4;
}());
(function (c4) {
    c4[c4["One"] = 0] = "One";
})(c4 || (c4 = {})); // error
