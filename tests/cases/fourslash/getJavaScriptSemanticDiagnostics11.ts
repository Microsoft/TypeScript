/// <reference path="fourslash.ts" />

// @jsExtensions: js
// @Filename: a.js
//// function F(): number { }

verify.getSemanticDiagnostics(`[
  {
    "message": "'types' can only be used in a .ts file.",
    "start": 14,
    "length": 6,
    "category": "error",
    "code": 8010
  }
]`);