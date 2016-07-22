/// <reference path='fourslash.ts' />

// @Target: ES3
// @Filename: file1.ts
//// class C1 {
////    public /*0*/x/*1*/: string;
//// }


verify.codeRefactor({
    description: "Encapsulate Field",
    expectedFileChanges: [{
    fileName: "file1.ts",
    expectedText: `
class C1 {
    private _x: string;

    function setx(newx : string) {
        this._x = newx;
    }

    function getx() : string {
        return this._x;
    }
}
`
}]});