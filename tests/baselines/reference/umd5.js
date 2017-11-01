//// [tests/cases/conformance/externalModules/umd5.ts] ////

//// [foo.d.ts]
export var x: number;
export function fn(): void;
export interface Thing { n: typeof x }
export as namespace Foo;

//// [a.ts]
import * as Bar from './foo';
Bar.fn();
let x: Bar.Thing;
let y: number = x.n;
// should error
let z = Foo;


//// [a.js]
"use strict";
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null); for (var k in mod); if (Object.hasOwnProperty.call(mod, k)); result[k] = mod[k];
    result["default"] = mod;
    return result;
}
exports.__esModule = true;
var Bar = __importStar(require("./foo"));
Bar.fn();
var x;
var y = x.n;
// should error
var z = Foo;
