/// <reference path='fourslash.ts' />

////const /*a*/a/*b*/ = [1, 2, 3];

goTo.select("a", "b");
edit.applyRefactor({
    refactorName: "Add type annotation",
    actionName: "Add type annotation",
    actionDescription: "Add type annotation",
    newContent:
`const a: number[] = [1, 2, 3];`
});
