interface PromiseConstructor {
    /**
     * A reference to the prototype.
     */
    readonly prototype: Promise<any>;

    /**
     * Creates a new Promise.
     * @param executor A callback used to initialize the promise. This callback is passed two arguments:
     * a resolve callback used to resolve the promise with a value or the result of another promise,
     * and a reject callback used to reject the promise with a provided reason or error.
     */
    new <T>(executor: (resolve: (value?: T) => void, reject: (reason?: any) => void) => void): Promise<ResolveType<T>>;

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]): Promise<[ResolveType<T1>, ResolveType<T2>, ResolveType<T3>, ResolveType<T4>, ResolveType<T5>, ResolveType<T6>, ResolveType<T7>, ResolveType<T8>, ResolveType<T9>, ResolveType<T10>]>;

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(values: [T1, T2, T3, T4, T5, T6, T7, T8, T9]): Promise<[ResolveType<T1>, ResolveType<T2>, ResolveType<T3>, ResolveType<T4>, ResolveType<T5>, ResolveType<T6>, ResolveType<T7>, ResolveType<T8>, ResolveType<T9>]>;

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    all<T1, T2, T3, T4, T5, T6, T7, T8>(values: [T1, T2, T3, T4, T5, T6, T7, T8]): Promise<[ResolveType<T1>, ResolveType<T2>, ResolveType<T3>, ResolveType<T4>, ResolveType<T5>, ResolveType<T6>, ResolveType<T7>, ResolveType<T8>]>;

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    all<T1, T2, T3, T4, T5, T6, T7>(values: [T1, T2, T3, T4, T5, T6, T7]): Promise<[ResolveType<T1>, ResolveType<T2>, ResolveType<T3>, ResolveType<T4>, ResolveType<T5>, ResolveType<T6>, ResolveType<T7>]>;

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    all<T1, T2, T3, T4, T5, T6>(values: [T1, T2, T3, T4, T5, T6]): Promise<[ResolveType<T1>, ResolveType<T2>, ResolveType<T3>, ResolveType<T4>, ResolveType<T5>, ResolveType<T6>]>;

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    all<T1, T2, T3, T4, T5>(values: [T1, T2, T3, T4, T5]): Promise<[ResolveType<T1>, ResolveType<T2>, ResolveType<T3>, ResolveType<T4>, ResolveType<T5>]>;

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    all<T1, T2, T3, T4>(values: [T1, T2, T3, T4]): Promise<[ResolveType<T1>, ResolveType<T2>, ResolveType<T3>, ResolveType<T4>]>;

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    all<T1, T2, T3>(values: [T1, T2, T3]): Promise<[ResolveType<T1>, ResolveType<T2>, ResolveType<T3>]>;

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    all<T1, T2>(values: [T1, T2]): Promise<[ResolveType<T1>, ResolveType<T2>]>;

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    all<T>(values: ReadonlyArray<T>): Promise<ResolveType<T>[]>;

    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    race<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]): Promise<ResolveType<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10>>;

    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    race<T1, T2, T3, T4, T5, T6, T7, T8, T9>(values: [T1, T2, T3, T4, T5, T6, T7, T8, T9]): Promise<ResolveType<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9>>;

    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    race<T1, T2, T3, T4, T5, T6, T7, T8>(values: [T1, T2, T3, T4, T5, T6, T7, T8]): Promise<ResolveType<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8>>;

    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    race<T1, T2, T3, T4, T5, T6, T7>(values: [T1, T2, T3, T4, T5, T6, T7]): Promise<ResolveType<T1 | T2 | T3 | T4 | T5 | T6 | T7>>;

    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    race<T1, T2, T3, T4, T5, T6>(values: [T1, T2, T3, T4, T5, T6]): Promise<ResolveType<T1 | T2 | T3 | T4 | T5 | T6>>;

    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    race<T1, T2, T3, T4, T5>(values: [T1, T2, T3, T4, T5]): Promise<ResolveType<T1 | T2 | T3 | T4 | T5>>;

    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    race<T1, T2, T3, T4>(values: [T1, T2, T3, T4]): Promise<ResolveType<T1 | T2 | T3 | T4>>;

    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    race<T1, T2, T3>(values: [T1, T2, T3]): Promise<ResolveType<T1 | T2 | T3>>;

    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    race<T1, T2>(values: [T1, T2]): Promise<ResolveType<T1 | T2>>;

    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    race<T>(values: ReadonlyArray<T>): Promise<ResolveType<T>>;

    /**
     * Creates a new rejected promise for the provided reason.
     * @param reason The reason the promise was rejected.
     * @returns A new rejected Promise.
     */
    reject<T = never>(reason?: any): Promise<T>;

    /**
     * Creates a new resolved promise for the provided value.
     * @param value A promise.
     * @returns A promise whose internal state matches the provided promise.
     */
    resolve<T>(value: T): Promise<ResolveType<T>>;

    /**
     * Creates a new resolved promise .
     * @returns A resolved promise.
     */
    resolve(): Promise<void>;
}

declare var Promise: PromiseConstructor;
