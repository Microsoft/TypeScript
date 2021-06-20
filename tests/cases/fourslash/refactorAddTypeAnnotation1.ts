/// <reference path='fourslash.ts' />

////function foo(): number {
////    return 1;
////}
////const /*a*/a/*b*/ = foo();

goTo.select("a", "b");
edit.applyRefactor({
    refactorName: "Add type annotation",
    actionName: "Add type annotation",
    actionDescription: "Add type annotation",
    newContent:
`function foo(): number {
    return 1;
}
const a: number = foo();`
});
