/// <reference path='fourslash.ts' />

//// function /*a*/foo/*b*/ (): never {
//// }
//// foo();

goTo.select("a", "b");
verify.not.refactorAvailable("Encapsulate return value");
