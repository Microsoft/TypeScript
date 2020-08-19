/// <reference path="fourslash.ts" />
//// enum E {
////     A,
////     B,
//// }
//// declare const e: E
//// switch (e) {
////     case /*1*/
//// }
//// switch (e) {
////     case /*2*/:
//// }

verify.completions({
    marker: ["1", "2"],
    includes: [{
        name: "E.A", insertText: "E.A"
    }, {
        name: "E.B", insertText: "E.B"
    }],
    preferences: {
        includeInsertTextCompletions: true
    }
});
