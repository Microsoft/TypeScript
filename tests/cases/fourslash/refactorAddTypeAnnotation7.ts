/// <reference path='fourslash.ts' />

////const /*a*/a/*b*/ = { a: 1, b: "" };

goTo.select("a", "b");
edit.applyRefactor({
    refactorName: "Add type annotation",
    actionName: "Add type annotation",
    actionDescription: "Add type annotation",
    newContent:
`const a: { a: number; b: string; } = { a: 1, b: "" };`
});
