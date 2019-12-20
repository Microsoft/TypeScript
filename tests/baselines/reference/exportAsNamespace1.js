//// [tests/cases/conformance/es2020/modules/exportAsNamespace1.ts] ////

//// [0.ts]
export const a = 1;
export const b = 2;

//// [1.ts]
export * as ns from './0';
ns.a;
ns.b;

//// [2.ts]
import * as foo from './1'

foo.ns.a;
foo.ns.b;

//// [0.js]
"use strict";
exports.__esModule = true;
exports.a = 1;
exports.b = 2;
//// [1.js]
"use strict";
exports.__esModule = true;
var ns = require("./0");
exports.ns = ns;
ns.a;
ns.b;
//// [2.js]
"use strict";
exports.__esModule = true;
var foo = require("./1");
foo.ns.a;
foo.ns.b;


//// [0.d.ts]
export declare const a = 1;
export declare const b = 2;
//// [1.d.ts]
export * as ns from './0';
//// [2.d.ts]
export {};
