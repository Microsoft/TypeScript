/// <reference path='fourslash.ts' />

//// namespace n1 {
//// /*0*/class C1 {
////    private x:number;
////    constructor(){}
////    public f1<T extends number>(){}
//// }/*1*/
//// }

verify.codeRefactor(`
namespace n1 {
interface newInterface_C1 {
    f1<T extends number>();
}
class C1 implements newInterface_C1{
    private x:number;
    constructor(){}
    public f1<T extends number>(){}
}
}
`);