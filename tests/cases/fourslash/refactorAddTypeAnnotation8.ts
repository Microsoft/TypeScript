/// <reference path='fourslash.ts' />

////interface Foo {
////    a: number;
////}
////interface Bar {
////    b: number;
////}
////function foo(x: boolean) {
////    return x ? { b: 1 } as Bar : { a: 1 } as Foo;
////}
////const /*a*/a/*b*/ = foo(true);

goTo.select("a", "b");
edit.applyRefactor({
    refactorName: "Add type annotation",
    actionName: "Add type annotation",
    actionDescription: "Add type annotation",
    newContent:
`interface Foo {
    a: number;
}
interface Bar {
    b: number;
}
function foo(x: boolean) {
    return x ? { b: 1 } as Bar : { a: 1 } as Foo;
}
const a: Bar | Foo = foo(true);`
});
