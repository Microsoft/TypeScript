//// [superCallParameterContextualTyping2.ts]

class A<T1, T2> {
    constructor(private map: (value: T1) => T2) {

    }
}

class C extends A<number, string> {
    // Ensure 'value' is not of type 'any' by invoking it with type arguments.
    constructor() { super(value => String(value<string>())); }
}

//// [superCallParameterContextualTyping2.js]
var __extends = (this && this.__extends) || function (d, b) {
    if (b) Object.setPrototypeOf ? Object.setPrototypeOf(d, b) : d.__proto__ = b;
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var A = (function () {
    function A(map) {
        this.map = map;
    }
    return A;
}());
var C = (function (_super) {
    __extends(C, _super);
    // Ensure 'value' is not of type 'any' by invoking it with type arguments.
    function C() {
        _super.call(this, function (value) { return String(value()); });
    }
    return C;
}(A));
