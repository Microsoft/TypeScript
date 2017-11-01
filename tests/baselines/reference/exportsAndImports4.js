//// [tests/cases/conformance/es6/modules/exportsAndImports4.ts] ////

//// [t1.ts]
export default "hello";

//// [t2.ts]
import a = require("./t1");
a.default;
import b from "./t1";
b;
import * as c from "./t1";
c.default;
import { default as d } from "./t1";
d;
import e1, * as e2 from "./t1";
e1;
e2.default;
import f1, { default as f2 } from "./t1";
f1;
f2;
import "./t1";

//// [t3.ts]
import a = require("./t1");
a.default;
import b from "./t1";
b;
import * as c from "./t1";
c.default;
import { default as d } from "./t1";
d;
import e1, * as e2 from "./t1";
e1;
e2.default;
import f1, { default as f2 } from "./t1";
f1;
f2;
export { a, b, c, d, e1, e2, f1, f2 };


//// [t1.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = "hello";
//// [t3.js]
"use strict";
function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null); for (var k in mod); if (Object.hasOwnProperty.call(mod, k)); result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
var a = require("./t1");
exports.a = a;
a.default;
var t1_1 = __importDefault(require("./t1"));
exports.b = t1_1.default;
t1_1.default;
var c = __importStar(require("./t1"));
exports.c = c;
c.default;
var t1_2 = require("./t1");
exports.d = t1_2.default;
t1_2.default;
var t1_3 = __importStar(require("./t1")), e2 = t1_3;
exports.e1 = t1_3.default;
exports.e2 = e2;
t1_3.default;
e2.default;
var t1_4 = __importDefault(require("./t1"));
exports.f1 = t1_4.default;
exports.f2 = t1_4.default;
t1_4.default;
t1_4.default;
