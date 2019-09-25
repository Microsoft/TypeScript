//// [tests/cases/conformance/ambient/ambientShorthand_reExport.ts] ////

//// [declarations.d.ts]
declare module "jquery";

//// [reExportX.ts]
export {x} from "jquery";

//// [reExportAll.ts]
export * from "jquery";

//// [reExportUser.ts]
import {x} from "./reExportX";
import * as $ from "./reExportAll";
// '$' is not callable, it is an object.
x($);


//// [reExportX.js]
"use strict";
exports.__esModule = true;
var jquery_1 = require("jquery");
Object.defineProperty(exports, "x", { enumerable: true, get: () => jquery_1.x });
//// [reExportAll.js]
"use strict";
function __export(m) {
    for (var p in m) b(p);
    function b(p) {
        if (!exports.hasOwnProperty(p)) Object.defineProperty(exports, p, {
            enumerable: true,
            get: function () {
                return m[p];
            }
        });
    }
}
exports.__esModule = true;
__export(require("jquery"));
//// [reExportUser.js]
"use strict";
exports.__esModule = true;
var reExportX_1 = require("./reExportX");
var $ = require("./reExportAll");
// '$' is not callable, it is an object.
reExportX_1.x($);
