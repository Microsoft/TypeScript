//// [tests/cases/conformance/dynamicImport/importCallExpressionNestedCJS.ts] ////

//// [foo.ts]
export default "./foo";

//// [index.ts]
async function foo() {
    return await import((await import("./foo")).default);
}

//// [foo.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = "./foo";
//// [index.js]
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null); for (var k in mod); if (Object.hasOwnProperty.call(mod, k)); result[k] = mod[k];
    result["default"] = mod;
    return result;
}
function foo() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Promise.resolve().then(() => __importStar(require((yield Promise.resolve().then(() => __importStar(require("./foo")))).default)));
    });
}
