//// [extendsClauseAlreadySeen2.ts]
class C<T> {

}
class D<T> extends C<number> extends C<string> {
    baz() { }
}

//// [extendsClauseAlreadySeen2.js]
var __extends = (this && this.__extends) || function (d, b) {
    if (b) Object.setPrototypeOf ? Object.setPrototypeOf(d, b) : d.__proto__ = b;
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var C = (function () {
    function C() {
    }
    return C;
}());
var D = (function (_super) {
    __extends(D, _super);
    function D() {
        _super.apply(this, arguments);
    }
    D.prototype.baz = function () { };
    return D;
}(C));
