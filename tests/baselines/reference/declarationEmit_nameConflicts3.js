//// [declarationEmit_nameConflicts3.ts]
module M {
    export interface D { }
    export module D {
        export function f() { }
    }
    export module C {
        export function f() { }
    }
    export module E {
        export function f() { }
    }
}

module M.P {
    export class C {
        static f() { }
    }
    export class E extends C { }
    export enum D {
        f
    }
    export var v: M.D; // ok
    export var w = M.D.f; // error, should be typeof M.D.f
    export var x = M.C.f; // error, should be typeof M.C.f
    export var x = M.E.f; // error, should be typeof M.E.f
}

//// [declarationEmit_nameConflicts3.js]
var __extends = (this && this.__extends) || function (d, b) {
    if (b) Object.setPrototypeOf ? Object.setPrototypeOf(d, b) : d.__proto__ = b;
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var M;
(function (M) {
    var D;
    (function (D) {
        function f() { }
        D.f = f;
    })(D = M.D || (M.D = {}));
    var C;
    (function (C) {
        function f() { }
        C.f = f;
    })(C = M.C || (M.C = {}));
    var E;
    (function (E) {
        function f() { }
        E.f = f;
    })(E = M.E || (M.E = {}));
})(M || (M = {}));
var M;
(function (M) {
    var P;
    (function (P) {
        var C = (function () {
            function C() {
            }
            C.f = function () { };
            return C;
        }());
        P.C = C;
        var E = (function (_super) {
            __extends(E, _super);
            function E() {
                _super.apply(this, arguments);
            }
            return E;
        }(C));
        P.E = E;
        (function (D) {
            D[D["f"] = 0] = "f";
        })(P.D || (P.D = {}));
        var D = P.D;
        P.w = M.D.f; // error, should be typeof M.D.f
        P.x = M.C.f; // error, should be typeof M.C.f
        P.x = M.E.f; // error, should be typeof M.E.f
    })(P = M.P || (M.P = {}));
})(M || (M = {}));


//// [declarationEmit_nameConflicts3.d.ts]
declare module M {
    interface D {
    }
    module D {
        function f(): void;
    }
    module C {
        function f(): void;
    }
    module E {
        function f(): void;
    }
}
declare module M.P {
    class C {
        static f(): void;
    }
    class E extends C {
    }
    enum D {
        f = 0,
    }
    var v: M.D;
    var w: typeof M.D.f;
    var x: typeof M.C.f;
    var x: typeof M.C.f;
}
