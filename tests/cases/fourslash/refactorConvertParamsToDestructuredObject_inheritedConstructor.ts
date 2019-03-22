/// <reference path='fourslash.ts' />

////class Foo {
////    /*a*/constructor/*b*/(t: string, s: string) { }
////}
////class Bar extends Foo { }
////var bar = new Bar("a", "b");
////var foo = new Foo("c", "d");

goTo.select("a", "b");
/*  The expected new content is currently wrong.
    `new Bar("a", "b")` should be modified by the refactor to be `new Bar({ t: "a", s: "b" })`
*/
edit.applyRefactor({
    refactorName: "Convert parameters to destructured object",
    actionName: "Convert parameters to destructured object",
    actionDescription: "Convert parameters to destructured object",
    newContent: `class Foo {
    constructor({ t, s }: { t: string; s: string; }) { }
}
class Bar extends Foo { }
var bar = new Bar("a", "b");
var foo = new Foo({ t: "c", s: "d" });`
});