/// <reference path='fourslash.ts' />

// @lib: es2017

////enum E { a,b,c }
////interface I {
////    x: E;
////    y: E.a
////    z: symbol;
////    w: object;
////}
////class C implements I {}

verify.codeFix({
    description: [ts.Diagnostics.Implement_all_members_of_interface_0.message, "I"],
    index: 1,
    newFileContent:
`enum E { a,b,c }
interface I {
    x: E;
    y: E.a
    z: symbol;
    w: object;
}
class C implements I {
    x: E;
    y: E.a;
    z: symbol;
    w: object;
}`,
});
