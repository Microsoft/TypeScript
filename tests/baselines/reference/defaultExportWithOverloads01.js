//// [defaultExportWithOverloads01.ts]
export default function f();
export default function f(x: string);
export default function f(...args: any[]) {
}

//// [defaultExportWithOverloads01.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function f() {
}
exports.default = f;
