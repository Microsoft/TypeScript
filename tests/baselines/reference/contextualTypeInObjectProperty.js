//// [contextualTypeInObjectProperty.ts]
type Shape = { 
    "a"?: (a: "a") => "a";
    "b"?: (b: "b") => "b";
    "c"?: (c: "c") => "c";
};

const getC = () => "c" as const;

export const obj: Shape = {
  ["a"]: keyA => keyA,
  ["b" as "b"]: keyB => keyB,
  [getC()]: keyC => keyC,
};


const getUnion = () => "b" as "b" | "c";

export const unionType: Shape = {
  [getUnion()]: keyC => keyC,
};


export const func: Shape = {
  [getC]: keyC => keyC,
};

const generic: {
  c: <T>(arg: T) => T;
} = {
  [getC()]: keyC => keyC,
};

const thisType = {
  [getC()]: function() {
    this.c();
  }
};


declare function f<T extends object>(data: T, handlers: { [P in keyof T]: (value: T[P], prop: P) => void; }): void;
f({ data: 0 }, {
  [(() => 'data' as const)()](value, key) {

  },
});

//// [contextualTypeInObjectProperty.js]
"use strict";
var _a, _b, _c, _d, _e, _f;
exports.__esModule = true;
exports.func = exports.unionType = exports.obj = void 0;
var getC = function () { return "c"; };
exports.obj = (_a = {},
    _a["a"] = function (keyA) { return keyA; },
    _a["b"] = function (keyB) { return keyB; },
    _a[getC()] = function (keyC) { return keyC; },
    _a);
var getUnion = function () { return "b"; };
exports.unionType = (_b = {},
    _b[getUnion()] = function (keyC) { return keyC; },
    _b);
exports.func = (_c = {},
    _c[getC] = function (keyC) { return keyC; },
    _c);
var generic = (_d = {},
    _d[getC()] = function (keyC) { return keyC; },
    _d);
var thisType = (_e = {},
    _e[getC()] = function () {
        this.c();
    },
    _e);
f({ data: 0 }, (_f = {},
    _f[(function () { return 'data'; })()] = function (value, key) {
    },
    _f));
