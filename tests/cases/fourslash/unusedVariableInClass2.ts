/// <reference path='fourslash.ts' />

// @noUnusedLocals: true
////class greeter {
////    [|public greeting1;
////    private greeting: string;|]
////}

verify.codeFixAtPosition("public greeting1;");
