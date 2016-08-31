/// <reference path='fourslash.ts' />

// @Filename: file1.ts
////    export module m1 {
////    export class C1 {
////        private _x: string;
////
////        set x(newx: string) {
////            this._x = newx;
////        }
////
////        /*0*/get x(): string {
////            return this._x;
////        }/*1*/
////    }
//// }
// @Filename: file2.ts
//// import { m1 } from './file1'
//// export namespace ts {
////    export function f1() {
////        let c1: m1.C1 = new m1.C1();
////        c1.x = "dummy";
////        let dummyString = c1.x + "dummy2" + c1.x ;
////    }
//// }


verify.codeRefactor({
    description: "Convert Get property to Method",
    expectedFileChanges: [
        {
            fileName: "file1.ts",
            expectedText: `
export module m1 {
    export class C1 {
        private _x: string;

        set x(newx: string) {
            this._x = newx;
        }

        public getx(): string {
            return this._x;
        }
    }
}
`
        },
        {
            fileName: "file2.ts",
            expectedText: `
import { m1 } from './file1'
export namespace ts {
    export function f1() {
        let c1: m1.C1 = new m1.C1();
        c1.x = "dummy";
        let dummyString = c1.getx() + "dummy2" + c1.getx() ;
    }
}
`
        }
    ]
});