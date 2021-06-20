/// <reference path='fourslash.ts' />

////function foo(/*a*/a/*b*/ = "test") {}

goTo.select("a", "b");
edit.applyRefactor({
    refactorName: "Add type annotation",
    actionName: "Add type annotation",
    actionDescription: "Add type annotation",
    newContent:
`function foo(a: string = "test") {}`
});
