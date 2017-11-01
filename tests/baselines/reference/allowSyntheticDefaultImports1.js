//// [tests/cases/compiler/allowSyntheticDefaultImports1.ts] ////

//// [a.ts]
import Namespace from "./b";
export var x = new Namespace.Foo();

//// [b.ts]
export class Foo {
	member: string;
}


//// [b.js]
"use strict";
exports.__esModule = true;
var Foo = /** @class */ (function () {
    function Foo() {
    }
    return Foo;
}());
exports.Foo = Foo;
//// [a.js]
"use strict";
function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
exports.__esModule = true;
var b_1 = __importDefault(require("./b"));
exports.x = new b_1["default"].Foo();
