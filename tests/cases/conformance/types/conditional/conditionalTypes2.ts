// @strict: true
// @declaration: true

interface Covariant<T> {
    foo: T extends string ? T : number;
}

interface Contravariant<T> {
    foo: T extends string ? keyof T : number;
}

interface Invariant<T> {
    foo: T extends string ? keyof T : T;
}

function f1<A, B extends A>(a: Covariant<A>, b: Covariant<B>) {
    a = b;
    b = a;  // Error
}

function f2<A, B extends A>(a: Contravariant<A>, b: Contravariant<B>) {
    a = b;  // Error
    b = a;
}

function f3<A, B extends A>(a: Invariant<A>, b: Invariant<B>) {
    a = b;  // Error
    b = a;  // Error
}

// Extract<T, Function> is a T that is known to be a Function
function isFunction<T>(value: T): value is Extract<T, Function> {
    return typeof value === "function";
}

function getFunction<T>(item: T) {
    if (isFunction(item)) {
        return item;
    }
    throw new Error();
}

function f10<T>(x: T) {
    if (isFunction(x)) {
        const f: Function = x;
        const t: T = x;
    }
}

function f11(x: string | (() => string) | undefined) {
    if (isFunction(x)) {
        x();
    }
}

function f12(x: string | (() => string) | undefined) {
    const f = getFunction(x);  // () => string
    f();
}

type Foo = { foo: string };
type Bar = { bar: string };

declare function fooBar(x: { foo: string, bar: string }): void;
declare function fooBat(x: { foo: string, bat: string }): void;

type Extract2<T, U, V> = T extends U ? T extends V ? T : never : never;

function f20<T>(x: Extract<Extract<T, Foo>, Bar>, y: Extract<T, Foo & Bar>, z: Extract2<T, Foo, Bar>) {
    fooBar(x);
    fooBar(y);
    fooBar(z);
}

function f21<T>(x: Extract<Extract<T, Foo>, Bar>, y: Extract<T, Foo & Bar>, z: Extract2<T, Foo, Bar>) {
    fooBat(x);  // Error
    fooBat(y);  // Error
    fooBat(z);  // Error
}

// Repros from #22860

class Opt<T> {
    toVector(): Vector<T> {
        return <any>undefined;
    }
}

interface Seq<T> {
    tail(): Opt<Seq<T>>;
}

class Vector<T> implements Seq<T> {
    tail(): Opt<Vector<T>> {
        return <any>undefined;
    }
    partition2<U extends T>(predicate:(v:T)=>v is U): [Vector<U>,Vector<Exclude<T, U>>];
    partition2(predicate:(x:T)=>boolean): [Vector<T>,Vector<T>];
    partition2<U extends T>(predicate:(v:T)=>boolean): [Vector<U>,Vector<any>] {
        return <any>undefined;
    }
}

interface A1<T> {
    bat: B1<A1<T>>;
}

interface B1<T> extends A1<T> {
    bat: B1<B1<T>>;
    boom: T extends any ? true : true
}

// Repro from #22899

declare function toString1(value: object | Function): string ;
declare function toString2(value: Function): string ;

function foo<T>(value: T) {
    if (isFunction(value)) {
        toString1(value);
        toString2(value);
    }
}

// Repro from #23052

type A<T, V, E> =
  T extends object
    ? { [Q in { [P in keyof T]: T[P] extends V ? P : P; }[keyof T]]: A<T[Q], V, E>; }
    : T extends V ? T : never;

type B<T, V> =
  T extends object
    ? { [Q in { [P in keyof T]: T[P] extends V ? P : P; }[keyof T]]: B<T[Q], V>; }
    : T extends V ? T : never;

type C<T, V, E> =
  { [Q in { [P in keyof T]: T[P] extends V ? P : P; }[keyof T]]: C<T[Q], V, E>; };

// Repro from #23100

type A2<T, V, E> =
    T extends object ? T extends any[] ? T : { [Q in keyof T]: A2<T[Q], V, E>; } : T;

type B2<T, V> =
    T extends object ? T extends any[] ? T : { [Q in keyof T]: B2<T[Q], V>; } : T;

type C2<T, V, E> =
    T extends object ? { [Q in keyof T]: C2<T[Q], V, E>; } : T;

// #26933
type Distributive<T> = T extends { a: number } ? { a: number } : { b: number };
function testAssignabilityToConditionalType<T>() {
    const o = { a: 1, b: 2 };
    const x: [T] extends [string] ? { y: number } : { a: number, b: number } = undefined!;
    // Simple case: OK
    const o1: [T] extends [number] ? { a: number } : { b: number } = o;
    // Simple case where source happens to be a conditional type: also OK
    const x1: [T] extends [number]
        ? ([T] extends [string] ? { y: number } : { a: number })
        : ([T] extends [string] ? { y: number } : { b: number })
        = x;
    // Infer type parameters: no good
    const o2: [T] extends [[infer U]] ? U : { b: number } = o;
    // Distributive where T might instantiate to never: no good
    const o3: Distributive<T> = o;
    // Distributive where T & string might instantiate to never: also no good
    const o4: Distributive<T & string> = o;
    // Distributive where {a: T} cannot instantiate to never: OK
    const o5: Distributive<{ a: T }> = o;
    // Distributive where check type is a conditional which returns a non-never type upon instantiation with `never` but can still return never otherwise: no good
    const o6: Distributive<[T] extends [never] ? { a: number } : never> = o;
}
