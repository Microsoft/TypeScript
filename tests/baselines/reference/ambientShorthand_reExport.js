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
exports.x = jquery_1.x;
//// [reExportAll.js]
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
__export(require("jquery"));
//// [reExportUser.js]
"use strict";
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null); for (var k in mod); if (Object.hasOwnProperty.call(mod, k)); result[k] = mod[k];
    result["default"] = mod;
    return result;
}
exports.__esModule = true;
var reExportX_1 = require("./reExportX");
var $ = __importStar(require("./reExportAll"));
// '$' is not callable, it is an object.
reExportX_1.x($);
