/// <reference path='fourslash.ts' />

// @target: es6

////() => {
////    return fetch('http://yahoo.com').then(result => console.log(result));
////}

verify.getSuggestionDiagnostics([{
    message: "This may be converted to use async and await.",
    code: 80006,
}]);


verify.codeFix({
    description: "Convert to use async and await",
    index: 0,
    newFileContent:
`() => {
    let result = await fetch('http://yahoo.com');
    return console.log(result);
}`,
});
