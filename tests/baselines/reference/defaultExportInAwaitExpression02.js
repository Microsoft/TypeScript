//// [tests/cases/conformance/es6/modules/defaultExportInAwaitExpression02.ts] ////

//// [a.ts]
const x = new Promise( ( resolve, reject ) => { resolve( {} ); } );
export default x;

//// [b.ts]
import x from './a';

( async function() {
    const value = await x;
}() );


//// [a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const x = new Promise((resolve, reject) => { resolve({}); });
exports.default = x;
//// [b.js]
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const a_1 = __importDefault(require("./a"));
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        const value = yield a_1.default;
    });
}());
