//// [inOperatorWithFunction.ts]
var fn = function (val: boolean) { return val; }
fn("a" in { "a": true });


//// [inOperatorWithFunction.js]
var fn = function fn(val) { return val; };
fn("a" in { "a": true });
