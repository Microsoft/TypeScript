// @strict: true
// @declaration: true

function ft1<T extends string>(s: string, n: number, u: 'foo' | 'bar' | 'baz', t: T) {
    const c1 = `abc${s}`;  // `abc${string}`
    const c2 = `abc${n}`;  // `abc${number}`
    const c3 = `abc${u}`;  // "abcfoo" | "abcbar" | "abcbaz"
    const c4 = `abc${t}`;  // `abc${T}
    const d1: `abc${string}` = `abc${s}`;
    const d2: `abc${number}` = `abc${n}`;
    const d3: `abc${'foo' | 'bar' | 'baz'}` = `abc${u}`;
    const d4: `abc${T}` = `abc${t}`;
}

function ft2(s: string) {
    return `abc${s}`;
}

function ft10(s: string) {
    const c1 = `abc${s}`;  // Widening type `abc${string}`
    let v1 = c1;  // Type string
    const c2 = c1;  // Widening type `abc${string}`
    let v2 = c2;  // Type string
    const c3: `abc${string}` = `abc${s}`;
    let v3 = c3;  // Type `abc${string}`
    const c4: `abc${string}` = c1;  // Type `abc${string}`
    let v4 = c4;  // Type `abc${string}`
}

function ft11(s: string, cond: boolean) {
    const c1 = cond ? `foo${s}` : `bar${s}`;  // widening `foo${string}` | widening `bar${string}`
    const c2: `foo${string}` | `bar${string}` = c1;  // `foo${string}` | `bar${string}`
    const c3 = cond ? c1 : c2;  // `foo${string}` | `bar${string}`
    const c4 = cond ? c3 : `baz${s}`;  // `foo${string}` | `bar${string}` | widening `baz${string}`
    const c5: `foo${string}` | `bar${string}` | `baz${string}` = c4; // `foo${string}` | `bar${string}` | `baz${string}`
    let v1 = c1;  // string
    let v2 = c2;  // `foo${string}` | `bar${string}`
    let v3 = c3;  // `foo${string}` | `bar${string}`
    let v4 = c4;  // string
    let v5 = c5;  // `foo${string}` | `bar${string}` | `baz${string}`
}

function ft12(s: string) {
    const c1 = `foo${s}`;
    let v1 = c1;
    const c2: `foo${string}` = `foo${s}`;
    let v2 = c2;
    const c3 = `foo${s}` as `foo${string}`;
    let v3 = c3;
    const c4 = <`foo${string}`>`foo${s}`;
    let v4 = c4;
    const c5 = `foo${s}` as const;
    let v5 = c5;
}

declare function widening<T>(x: T): T;
declare function nonWidening<T extends string | number | symbol>(x: T): T;

function ft13(s: string, cond: boolean) {
    let x1 = widening(`foo${s}`);
    let x2 = widening(cond ? 'a' : `foo${s}`);
    let y1 = nonWidening(`foo${s}`);
    let y2 = nonWidening(cond ? 'a' : `foo${s}`);
}

type T0 = string | `${number}px`;

function ft14(t: `foo${number}`) {
    let x1: string = t;
    let x2: String = t;
    let x3: Object = t;
    let x4: {} = t;
    let x6: { length: number } = t;
}

declare function g1<T>(x: T): T;
declare function g2<T extends string>(x: T): T;

function ft20(s: string) {
    let x1 = g1(`xyz-${s}`);  // string
    let x2 = g2(`xyz-${s}`);  // `xyz-${string}`
}

// Repro from #41631

declare function takesLiteral<T extends string>(literal: T): T extends `foo.bar.${infer R}` ? R : unknown;

const t1 = takesLiteral("foo.bar.baz"); // "baz"
const id2 = "foo.bar.baz";
const t2 = takesLiteral(id2); // "baz"

declare const someString: string;
const t3 = takesLiteral(`foo.bar.${someString}`);  // string

const id4 = `foo.bar.${someString}`;
const t4 = takesLiteral(id4);  // string

declare const someUnion: 'abc' | 'def' | 'ghi';
const t5 = takesLiteral(`foo.bar.${someUnion}`);  // "abc" | "def" | "ghi"

// Repro from #41732

const pixelValue: number = 22;

type PixelValueType = `${number}px`;

const pixelString: PixelValueType = `22px`;

const pixelStringWithTemplate: PixelValueType = `${pixelValue}px`;

// Repro from #43143

function getCardTitle(title: string): `test-${string}` {
    return `test-${title}`;
}
