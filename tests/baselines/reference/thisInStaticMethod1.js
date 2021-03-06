//// [thisInStaticMethod1.ts]
class foo {
 static x = 3;
 static bar() {
  return this.x;
 } 
} 
var x = foo.bar();

//// [thisInStaticMethod1.js]
var foo = /** @class */ (function () {
    function foo() {
    }
    foo.bar = function () {
        return this.x;
    };
    (function () {
        foo.x = 3;
    }).call(foo);
    return foo;
}());
var x = foo.bar();
