/// <reference path='fourslash.ts' />
// @ESMInterop: true
// @Filename: foo.d.ts
////declare function foo(): void;
////declare namespace foo {}
////export = foo;

// @Filename: index.ts
////[|import * as foo from "./foo";|]
////foo();

goTo.file(1);
verify.codeFix({
    description: `Replace import with 'import foo = require("./foo");'.`,
    newRangeContent: `import foo = require("./foo");`,
    index: 0,
});
