//// [implicitAnyDeclareFunctionExprWithoutFormalType.ts]
// these should be errors for implicit any parameter
var lambda = (l1) => { };       // Error at "l1"
var lambd2 = (ll1, ll2: string) => { }  // Error at "ll1"
var lamda3 = function myLambda3(myParam) { }
var lamda4 = () => { return null };

// these should be error for implicit any return type
var lambda5 = function temp() { return null; }
var lambda6 = () => { return null; }
var lambda7 = function temp() { return undefined; }
var lambda8 = () => { return undefined; }

// this shouldn't be an error
var lambda9 = () => { return 5; }
var lambda10 = function temp1() { return 5; }



//// [implicitAnyDeclareFunctionExprWithoutFormalType.js]
// these should be errors for implicit any parameter
var lambda = function lambda(l1) { }; // Error at "l1"
var lambd2 = function lambd2(ll1, ll2) { }; // Error at "ll1"
var lamda3 = function myLambda3(myParam) { };
var lamda4 = function lamda4() { return null; };
// these should be error for implicit any return type
var lambda5 = function temp() { return null; };
var lambda6 = function lambda6() { return null; };
var lambda7 = function temp() { return undefined; };
var lambda8 = function lambda8() { return undefined; };
// this shouldn't be an error
var lambda9 = function lambda9() { return 5; };
var lambda10 = function temp1() { return 5; };
