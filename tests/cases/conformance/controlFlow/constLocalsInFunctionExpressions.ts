declare function getStringOrNumber(): string | number;

function f1() {
    const x = getStringOrNumber();
    if (typeof x === "string") {
        const f = () => x.length;
    }
}

function f2() {
    const x = getStringOrNumber();
    if (typeof x !== "string") {
        return;
    }
    const f = () => x.length;
}

function f3() {
    const x = getStringOrNumber();
    if (typeof x === "string") {
        const f = function() { return x.length; };
    }
}

function f4() {
    const x = getStringOrNumber();
    if (typeof x !== "string") {
        return;
    }
    const f = function() { return x.length; };
}

function f5() {
    const x = getStringOrNumber();
    if (typeof x === "string") {
        const f = () => () => x.length;
    }
}

declare function getReadonlyFieldStringOrNumber(): { readonly a: string | number };
function f6() {
    const x = getReadonlyFieldStringOrNumber();
    if (typeof x.a === 'string') {
        const f: () => number = () => x.a.length;
    }
}
