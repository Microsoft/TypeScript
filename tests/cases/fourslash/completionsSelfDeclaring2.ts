/// <reference path="fourslash.ts" />

////function f1<T>(x: T) {}
////f1({ abc/*1*/ });
////
////function f2<T extends { xyz: number }>(x: T) {}
////f2({ x/*2*/ });


verify.completions({
  marker: "1",
  includes: [{
    name: "Object",
    sortText: completion.SortText.GlobalsOrKeywords
  }]
});

verify.completions({
  marker: "2",
  exact: ["xyz"]
});
