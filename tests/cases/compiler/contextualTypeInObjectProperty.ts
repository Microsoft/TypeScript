// @noImplicitAny: true
// @noImplicitThis: true

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