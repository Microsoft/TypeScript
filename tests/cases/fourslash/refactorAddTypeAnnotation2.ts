/// <reference path='fourslash.ts' />

////class Foo {
////    private /*a*/a/*b*/ = "test";
////}

goTo.select("a", "b");
edit.applyRefactor({
    refactorName: "Add type annotation",
    actionName: "Add type annotation",
    actionDescription: "Add type annotation",
    newContent:
`class Foo {
    private a: string = "test";
}`
});
