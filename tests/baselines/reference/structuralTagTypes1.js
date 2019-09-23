//// [structuralTagTypes1.ts]
export type Paired = {
    x: number & tag {x};
    y: number & tag {y};
};


export function isPaired(x: {x: number, y: number}): x is Paired {
    return true;
}

export function makePair(x: number, y: number): Paired {
    return {x, y} as Paired;
}

const a = makePair(0, 0);
const b = {x: 0, y: 0};

if (Math.random() > 0.3) {
    b.x = a.x;
    b.y = a.y;
}

if (isPaired(b)) {
    b.x = a.x;
    b.y = a.y;
    a.x = b.x;
    a.y = b.y;
}

//// [structuralTagTypes1.js]
"use strict";
exports.__esModule = true;
function isPaired(x) {
    return true;
}
exports.isPaired = isPaired;
function makePair(x, y) {
    return { x: x, y: y };
}
exports.makePair = makePair;
var a = makePair(0, 0);
var b = { x: 0, y: 0 };
if (Math.random() > 0.3) {
    b.x = a.x;
    b.y = a.y;
}
if (isPaired(b)) {
    b.x = a.x;
    b.y = a.y;
    a.x = b.x;
    a.y = b.y;
}
