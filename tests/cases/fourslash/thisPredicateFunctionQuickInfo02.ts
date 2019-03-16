/// <reference path="fourslash.ts" />

//// interface Sundries {
////     broken: boolean;
//// }
////
//// interface Supplies {
////     spoiled: boolean;
//// }
////
//// interface Crate<T> {
////     contents: T;
////     /*1*/isSundries(): this is Crate<Sundries>;
////     /*2*/isSupplies(): this is Crate<Supplies>;
////     /*3*/isPackedTight<U>(this: this & Crate<U>): this is {extraContents: U};
//// }
//// const crate: Crate<any>;
//// if (crate.isPackedTight/*4*/()) {
////     crate.;
//// }
//// if (crate.isSundries/*5*/()) {
////     crate.contents.;
////     if (crate.isPackedTight/*6*/()) {
////        crate.;
////     }
//// }
//// if (crate.isSupplies/*7*/()) {
////     crate.contents.;
////     if (crate.isPackedTight/*8*/()) {
////        crate.;
////     }
//// }

verify.quickInfos({
    1: "(method) Crate<T>.isSundries(): this is Crate<Sundries>",
    2: "(method) Crate<T>.isSupplies(): this is Crate<Supplies>",
    3: `(method) Crate<T>.isPackedTight<U>(this: this & Crate<U>): this is {
    extraContents: U;
}`,
    4: `(method) Crate<any>.isPackedTight<any>(this: Crate<any>): this is {
    extraContents: any;
}`,
    5: "(method) Crate<any>.isSundries(): this is Crate<Sundries>",
    6: `(method) Crate<Sundries>.isPackedTight<Sundries>(this: Crate<Sundries>): this is {
    extraContents: Sundries;
}`,
    7: "(method) Crate<any>.isSupplies(): this is Crate<Supplies>",
    8: `(method) Crate<Supplies>.isPackedTight<Supplies>(this: Crate<Supplies>): this is {
    extraContents: Supplies;
}`
});
