/// <reference path='fourslash.ts' />

////let a = { b: { c: 0 } };
////a && a.b && /*a*//*b*/a.b.c;

// Only offer refactor for empty span if explicity requested
goTo.select("a", "b");
verify.not.refactorAvailableForTriggerReason("implicit", "Convert to optional chain expression");
verify.refactorAvailableForTriggerReason("invoked", "Convert to optional chain expression");
