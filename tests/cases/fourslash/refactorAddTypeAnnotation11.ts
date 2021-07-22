/// <reference path='fourslash.ts' />

// @filename: /a.ts
////export interface A { x: number };
////export function fn(): A {
////    return { x: 1 }
////}
// @filename: /b.ts
////import { fn } from "./a";
////const /*a*/a/*b*/ = fn();

goTo.file("/b.ts");
goTo.select("a", "b");
edit.applyRefactor({
    refactorName: "Add type annotation",
    actionName: "Add type annotation",
    actionDescription: "Add type annotation",
    newContent:
`import { A, fn } from "./a";
const a: A = fn();`
});
