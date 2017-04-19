/// <reference path='fourslash.ts' />

// @allowNonTsExtensions: true
// @Filename: test123.js
//// [|var foo = function() { };
//// foo.prototype.instanceMethod1 = function() { return "this is name"; };
//// foo.prototype.instanceMethod2 = () => { return "this is name"; };
//// foo.prototype.instanceProp1 = "hello";
//// foo.prototype.instanceProp2 = undefined;
//// foo.staticProp = "world";
//// foo.staticMethod1 = function() { return "this is static name"; };
//// foo.staticMethod2 = () => "this is static name";|]


verify.codeFixAvailable();
verify.rangeAfterCodeFix(
`class foo {
    constructor() { }
    instanceMethod1() { return "this is name"; }
    instanceMethod2() { return "this is name"; }
    instanceProp1 = "hello";
    instanceProp2 = undefined;
    static staticProp = "world";
    static staticMethod1() { return "this is static name"; }
    static staticMethod2() { return "this is static name"; }
}
`, /*includeWhiteSpace*/ true, /*errorCode*/ undefined, /*index*/ 0);