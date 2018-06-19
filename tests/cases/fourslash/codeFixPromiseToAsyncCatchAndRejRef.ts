/// <reference path='fourslash.ts' />

// @target: es6

////function [|f|](): Promise<void> {
////    return fetch('http://yahoo.com').then(res, rej).catch(catch_err)
////}
////
////function res(result){
////    console.log(result);
////}
////
////function rej(rejection){
////    return rejection.ok;
////}
////
////function catch_err(err){
////    console.log(err);
////}

verify.getSuggestionDiagnostics([{
    message: "This may be converted to use async and await.",
    code: 80006,
}]);

verify.codeFix({
    description: "Convert to use async and await",
    index: 0,
    newFileContent:
`async function f(): Promise<void> {
    try {
        let result;
        label: {
            try {
                result = await fetch('http://yahoo.com');
            }
            catch (rejection) {
                return await rej(rejection);
                break label;
            }
        }
        return await res(result);
    }
    catch (err) {
        return catch_err(err);
    }
}

function res(result){
    console.log(result);
}

function rej(rejection){
    return rejection.ok;
}

function catch_err(err){
    console.log(err);
}`,
});
