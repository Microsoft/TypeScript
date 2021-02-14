/// <reference path='fourslash.ts' />

////interface I { x: number; }
////export default class implements I {[| |]}

verify.codeFix({
    description: [ts.Diagnostics.Implement_all_members_of_interface_0.message, "I"],
    index: 1,
    newFileContent:
`interface I { x: number; }
export default class implements I {
    x: number;
}`,
});
