/// <reference path="fourslash.ts" />
// @filename: /dir/a.ts
////declare const p: number[];
////for await (const _ of p);
////export {};
// @filename: /dir/tsconfig.json
////{
////    "compilerOptions": {
////        "target": "es2017"
////    }
////}

verify.not.codeFixAvailable("fixTargetOption");
verify.codeFixAvailable("fixModuleOption");
