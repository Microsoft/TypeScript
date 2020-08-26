/// <reference path='fourslash.ts' />

//// function /*a*/foo/*b*/ () {
////     if (Math.random() < 0.5) {
////         return 233;
////     }
////     return 42;
//// }
//// foo();

goTo.select("a", "b");
edit.applyRefactor({
    refactorName: "Encapsulate return value",
    actionName: "Wrap return value into object",
    actionDescription: "Wrap return value into object",
    newContent: `function foo () {
    if (Math.random() < 0.5) {
        return { /*RENAME*/value: 233 };
    }
    return { value: 42 };
}
foo().value;`,
});

