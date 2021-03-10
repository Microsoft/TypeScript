// @strict: true

function f1<T extends string | undefined>(x: T, y: { a: T }, z: [T]): string {
    if (x) {
        x;
        x.length;
        return x;
    }
    if (y.a) {
        y.a.length;
        return y.a;
    }
    if (z[0]) {
        z[0].length;
        return z[0];
    }
    return "hello";
}

function f2<T>(x: Extract<T, string | undefined> | null): string {
    if (x) {
        x;
        x.length;
        return x;
    }
    return "hello";
}

// Repro from #13995

declare function takeA(val: 'A'): void;
export function bounceAndTakeIfA<AB extends 'A' | 'B'>(value: AB): AB {
    if (value === 'A') {
        takeA(value);
        return value;
    }
    else {
        return value;
    }
}

// Repro from #13995

type Common = { id: number };
type AA = { tag: 'A', id: number };
type BB = { tag: 'B', id: number, foo: number };

type MyUnion = AA | BB;

const fn = (value: MyUnion) => {
    value.foo;  // Error
    if ('foo' in value) {
        value.foo;
    }
    if (value.tag === 'B') {
        value.foo;
    }
};

const fn2 = <T extends MyUnion>(value: T): MyUnion => {
    value.foo;  // Error
    if ('foo' in value) {
        value.foo;
    }
    if (value.tag === 'B') {
        value.foo;
    }
};

// Repro from #13995

type A1 = {
    testable: true
    doTest: () => void
}
type B1 = {
    testable: false
};

type Union = A1 | B1

function notWorking<T extends Union>(object: T) {
    if (!object.testable) return;
    object.doTest();
}

// Repro from #42939

interface A {
    a: number | null;
};

function get<K extends keyof A>(key: K, obj: A): number {
    const value = obj[key];
    if (value !== null) {
        return value;
    }
    return 0;
};
