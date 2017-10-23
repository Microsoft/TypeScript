﻿// @module: commonjs
// @target: es6
// @noImplicitAny: true

export interface StrategicState {
    lastStrategyApplied?: string;
}

export function strategy<T extends StrategicState>(stratName: string, gen: (a: T) => IterableIterator<T | undefined>): (a: T) => IterableIterator<T | undefined> {
    return function*(state) {
        for (const next of gen(state)) {
            if (next) {
                next.lastStrategyApplied = stratName;
            }
            yield next;
        }
    }
}

export interface Strategy<T> {
    (a: T): IterableIterator<T | undefined>;
}

export interface State extends StrategicState {
    foo: number;
}

export const Nothing1: Strategy<State> = strategy("Nothing", function*(state: State) {
    yield ;
    return state;
});

export const Nothing2: Strategy<State> = strategy("Nothing", function*(state: State) {
    yield state;
});

export const Nothing3: Strategy<State> = strategy("Nothing", function* (state: State) {
    yield ;
    return state;
});
 