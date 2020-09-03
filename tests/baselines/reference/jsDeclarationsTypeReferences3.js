//// [tests/cases/conformance/jsdoc/declarations/jsDeclarationsTypeReferences3.ts] ////

//// [index.d.ts]
declare module "fs" {
    export class Something {}
}
//// [index.js]
/// <reference types="node" />

const Something = require("fs").Something;
module.exports.A = {}
module.exports.A.B = {
    thing: new Something()
}


//// [index.js]
/// <reference types="node" />
var Something = require("fs").Something;
module.exports.A = {};
module.exports.A.B = {
    thing: new Something()
};


//// [index.d.ts]
/// <reference types="node" />
export namespace A {
    namespace B {
        const thing: Something;
    }
}
import fs_1 = require("fs");
import Something = fs_1.Something;
