//// [tests/cases/compiler/exportEqualsDefaultProperty.ts] ////

//// [exp.ts]
var x = {
    "greeting": "hello, world",
    "default": 42
};

export = x

//// [imp.ts]
import foo from "./exp";
foo.toExponential(2);


//// [exp.js]
"use strict";
var x = {
    "greeting": "hello, world",
    "default": 42
};
module.exports = x;
//// [imp.js]
"use strict";
function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
exports.__esModule = true;
var exp_1 = __importDefault(require("./exp"));
exp_1["default"].toExponential(2);
