/// <reference path="fourslash.ts" />

// @Filename: /a.d.ts
////declare namespace N {
////    export const foo = 0;
////}
////export = N;

// @Filename: /b.ts
////f/**/;

goTo.marker("");
verify.completionListContains({ name: "foo", source: "/a" }, "const N.foo: 0", "", "const", /*spanIndex*/ undefined, /*hasAction*/ true, {
    includeExternalModuleExports: true,
    sourceDisplay: "./a",
});

verify.applyCodeActionFromCompletion("", {
    name: "foo",
    source: "/a",
    description: `Import 'foo' from module "./a"`,
    // TODO: GH#18445
    newFileContent: `import { foo } from "./a";\r
\r
f;`,
});
