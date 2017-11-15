/// <reference path="lib.es2015.symbol.d.ts" />
/// <reference path="lib.es2015.iterable.d.ts" />

interface SymbolConstructor {
    /**
     * A method that returns the default async iterator for an object. Called by the semantics of
     * the for-await-of statement.
     */
    readonly asyncIterator: symbol;
}

interface AsyncNonIterableIterator<T> {
    next(value?: any): Promise<IteratorResult<T>>;
    return?(value?: any): Promise<IteratorResult<T>>;
    throw?(e?: any): Promise<IteratorResult<T>>;
}

interface AsyncIterable<T> {
    [Symbol.asyncIterator](): AsyncIterator<T>;
}

interface AsyncIterator<T> extends AsyncNonIterableIterator<T> {
    [Symbol.asyncIterator](): AsyncIterator<T>;
}