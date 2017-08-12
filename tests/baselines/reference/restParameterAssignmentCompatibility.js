//// [restParameterAssignmentCompatibility.ts]
class T {
    m(...p3) {

    }
}

class S {
    m(p1, p2) {

    }
}

var t: T;
var s: S;
// M is a non - specialized call or construct signature and S' contains a call or construct signature N where,
//  the number of non-optional parameters in N is less than or equal to the total number of parameters in M,
t = s; // Should be valid (rest params correspond to an infinite expansion of parameters)

class T1 {
    m(p1?, p2?) {

    }
}
var t1: T1;
// When comparing call or construct signatures, parameter names are ignored and rest parameters correspond to an unbounded expansion of optional parameters of the rest parameter element type.
t1 = s; // Similar to above, but optionality does not matter here.

//// [restParameterAssignmentCompatibility.js]
var T = (function () {
    function T() {
    }
    var proto_1 = T.prototype;
    proto_1.m = function () {
        var p3 = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p3[_i] = arguments[_i];
        }
    };
    return T;
}());
var S = (function () {
    function S() {
    }
    var proto_2 = S.prototype;
    proto_2.m = function (p1, p2) {
    };
    return S;
}());
var t;
var s;
// M is a non - specialized call or construct signature and S' contains a call or construct signature N where,
//  the number of non-optional parameters in N is less than or equal to the total number of parameters in M,
t = s; // Should be valid (rest params correspond to an infinite expansion of parameters)
var T1 = (function () {
    function T1() {
    }
    var proto_3 = T1.prototype;
    proto_3.m = function (p1, p2) {
    };
    return T1;
}());
var t1;
// When comparing call or construct signatures, parameter names are ignored and rest parameters correspond to an unbounded expansion of optional parameters of the rest parameter element type.
t1 = s; // Similar to above, but optionality does not matter here.
