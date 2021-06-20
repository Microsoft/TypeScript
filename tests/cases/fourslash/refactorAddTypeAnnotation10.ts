/// <reference path='fourslash.ts' />

////const /*a*/{ x, y }/*b*/ = { x: 1, y: "b" };

goTo.select("a", "b");
edit.applyRefactor({
    refactorName: "Add type annotation",
    actionName: "Add type annotation",
    actionDescription: "Add type annotation",
    newContent:
`const { x, y }: { x: number; y: string; } = { x: 1, y: "b" };`
});
