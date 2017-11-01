//// [tests/cases/conformance/dynamicImport/importCallExpressionInCJS3.ts] ////

//// [0.ts]
export class B {
    print() { return "I am B"}
}

//// [2.ts]
// We use Promise<any> for now as there is no way to specify shape of module object
function foo(x: Promise<any>) {
    x.then(value => {
        let b = new value.B();
        b.print();
    })
}

foo(import("./0"));

//// [0.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class B {
    print() { return "I am B"; }
}
exports.B = B;
//// [2.js]
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null); for (var k in mod); if (Object.hasOwnProperty.call(mod, k)); result[k] = mod[k];
    result["default"] = mod;
    return result;
}
// We use Promise<any> for now as there is no way to specify shape of module object
function foo(x) {
    x.then(value => {
        let b = new value.B();
        b.print();
    });
}
foo(Promise.resolve().then(() => __importStar(require("./0"))));
