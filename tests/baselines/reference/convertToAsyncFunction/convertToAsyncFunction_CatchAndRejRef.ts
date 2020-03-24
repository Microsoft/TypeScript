// ==ORIGINAL==

function /*[#|*/f/*|]*/():Promise<void> {
    return fetch('https://typescriptlang.org').then(res, rej).catch(catch_err)
}
function res(result){
    console.log(result);
}
function rej(rejection){
    return rejection.ok;
}
function catch_err(err){
    console.log(err);
}
// ==ASYNC FUNCTION::Convert to async function==

async function f():Promise<void> {
    try {
        let result: any;
        try {
            result = await fetch('https://typescriptlang.org');
        }
        catch (rejection) {
            return rej(rejection);
        }
        return res(result);
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
}