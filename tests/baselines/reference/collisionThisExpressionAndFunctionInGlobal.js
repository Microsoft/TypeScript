//// [collisionThisExpressionAndFunctionInGlobal.ts]
function _this() { //Error
    return 10;
}
var f = () => this;

//// [collisionThisExpressionAndFunctionInGlobal.js]
var _this = this;
function _this() {
    return 10;
}
var f = function f() { return _this; };
