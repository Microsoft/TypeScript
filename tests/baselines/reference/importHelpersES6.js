//// [tests/cases/compiler/importHelpersES6.ts] ////

//// [a.ts]
declare var dec: any;
@dec export class A {

}

const o = { a: 1 };
const y = { ...o };

//// [tslib.d.ts]
export declare function __extends(d: Function, b: Function): void;
export declare function __decorate(decorators: Function[], target: any, key?: string | symbol, desc?: any): any;
export declare function __param(paramIndex: number, decorator: Function): Function;
export declare function __metadata(metadataKey: any, metadataValue: any): Function;
export declare function __awaiter(thisArg: any, _arguments: any, P: Function, generator: Function): any;


//// [a.js]
import { __decorate } from "tslib";
const A = /** @class */ (() => {
    let A = class A {
    };
    A = __decorate([
        dec
    ], A);
    return A;
})();
export { A };
const o = { a: 1 };
const y = Object.assign({}, o);
