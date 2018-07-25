// ==ORIGINAL==

function /*[#|*/innerPromise/*|]*/(): Promise<string> {
    return fetch("https://typescriptlang.org").then(resp => {
        return resp.blob().then(blob => blob.byteOffset).catch(err => 'Error');
    }).then(blob => {
        return blob.toString();   
    });
}

// ==ASYNC FUNCTION::Convert to async function==

async function innerPromise(): Promise<string> {
    let resp = await fetch("https://typescriptlang.org");
    let blob_1;
    try {
        let blob = await resp.blob();
        let blob_1 = blob.byteOffset;
    }
    catch (err) {
        let blob_1 = 'Error';
    }
    return blob_1.toString();
}
