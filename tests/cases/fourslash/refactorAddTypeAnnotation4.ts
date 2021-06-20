/// <reference path='fourslash.ts' />

////class Foo<T1, T2> {}
////function foo() {
////    return new Foo<string, number>();
////}
////const /*a*/a/*b*/ = foo();

goTo.select("a", "b");
edit.applyRefactor({
    refactorName: "Add type annotation",
    actionName: "Add type annotation",
    actionDescription: "Add type annotation",
    newContent:
`class Foo<T1, T2> {}
function foo() {
    return new Foo<string, number>();
}
const a: Foo<string, number> = foo();`
});
