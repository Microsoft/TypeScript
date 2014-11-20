//// [collisionCodeGenModuleWithFunctionChildren.ts]
module M {
    export var x = 3;
    function fn(M, p = x) { }
}

module M {
    function fn2() {
        var M;
        var p = x;
    }
}

module M {
    function fn3() {
        function M() {
            var p = x;
        }
    }
}

//// [collisionCodeGenModuleWithFunctionChildren.js]
var M;
(function (_M) {
    _M.x = 3;
    function fn(M) {
        var p = (arguments[1] === void 0) ? _M.x : arguments[1];
    }
})(M || (M = {}));
var M;
(function (_M) {
    function fn2() {
        var M;
        var p = _M.x;
    }
})(M || (M = {}));
var M;
(function (_M) {
    function fn3() {
        function M() {
            var p = _M.x;
        }
    }
})(M || (M = {}));
