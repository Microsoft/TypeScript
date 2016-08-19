//// [optionalParamInOverride.ts]
class Z {
    public func(): void { }
}
class Y extends Z {
    public func(value?: any): void { }
}


//// [optionalParamInOverride.js]
var __extends = (this && this.__extends) || function (d, b) {
    if (b) Object.setPrototypeOf ? Object.setPrototypeOf(d, b) : d.__proto__ = b;
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Z = (function () {
    function Z() {
    }
    Z.prototype.func = function () { };
    return Z;
}());
var Y = (function (_super) {
    __extends(Y, _super);
    function Y() {
        _super.apply(this, arguments);
    }
    Y.prototype.func = function (value) { };
    return Y;
}(Z));
