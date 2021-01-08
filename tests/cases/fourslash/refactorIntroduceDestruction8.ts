/// <reference path='fourslash.ts' />

//// const item = {
////     a: 1, b: () => 1
//// }
//// /*a*/item/*b*/.a = 2
//// call(item.a, /*c*/item/*d*/.b(), (((/*e*/item/*f*/.b)))())

goTo.select("a", "b");
verify.not.refactorAvailable("Convert to destruction")
goTo.select("c", "d");
verify.not.refactorAvailable("Convert to destruction")
goTo.select("e", "f");
verify.not.refactorAvailable("Introduce destruction")
