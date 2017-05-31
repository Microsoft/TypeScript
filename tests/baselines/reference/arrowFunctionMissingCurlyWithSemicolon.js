//// [arrowFunctionMissingCurlyWithSemicolon.ts]
// Should error at semicolon.
var f = () => ;
var b = 1 * 2 * 3 * 4;
var square = (x: number) => x * x;

//// [arrowFunctionMissingCurlyWithSemicolon.js]
// Should error at semicolon.
var f = function f() { return ; };
var b = 1 * 2 * 3 * 4;
var square = function square(x) { return x * x; };
