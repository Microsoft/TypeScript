type Wrapped<T> = { ___secret: T };
type Unwrap<T> = T extends Wrapped<infer U> ? U : T;

declare function set<T, K extends keyof T>(obj: T, key: K, value: Unwrap<T[K]>): Unwrap<T[K]>;

class Foo {
    prop: Wrapped<string>;

    method() {
        set(this, 'prop', 'hi'); // <-- type error
    }
}

set(new Foo(), 'prop', 'hi'); // <-- typechecks

type InferBecauseWhyNot<T> = [T] extends [(p: infer P1) => any] ? P1 | T : never;

function f<Q extends (arg: any) => any>(x: Q): InferBecauseWhyNot<Q> {
    return x;
}

type InferBecauseWhyNotDistributive<T> = T extends (p: infer P1) => any ? P1 | T : never;

function f2<Q extends (arg: any) => any>(x: Q): InferBecauseWhyNotDistributive<Q> {
    return x; // should fail, as when Q = never, InferBecauseWhyNotDistributive<Q> = never,
}
