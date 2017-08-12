//// [decoratorOnClassMethod12.ts]
module M {
    class S {
        decorator(target: Object, key: string): void { }
    }
    class C extends S {
        @super.decorator
        method() { }
    }
}

//// [decoratorOnClassMethod12.js]
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var M;
(function (M) {
    var S = (function () {
        function S() {
        }
        var proto_1 = S.prototype;
        proto_1.decorator = function (target, key) { };
        return S;
    }());
    var C = (function (_super) {
        __extends(C, _super);
        function C() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        var proto_2 = C.prototype;
        proto_2.method = function () { };
        __decorate([
            _super.decorator
        ], C.prototype, "method", null);
        return C;
    }(S));
})(M || (M = {}));
