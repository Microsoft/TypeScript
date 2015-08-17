//// [tests/cases/conformance/es6/modules/exportsAndImportsWithContextualKeywordNames01.ts] ////

//// [t1.ts]

let set = {
    set foo(x: number) {
    }
}
let get = 10;

export { set, get };

//// [t2.ts]
import * as set from "./t1";

//// [t3.ts]
import { set as yield } from "./t1";

//// [t4.ts]
import { get } from "./t1";

//// [t1.js]
var set = {
    set foo(x) {
    }
};
var get = 10;
exports.set = set;
exports.get = get;
//// [t2.js]
//// [t3.js]
//// [t4.js]
