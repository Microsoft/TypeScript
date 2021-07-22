/// <reference lib="es2019.array" />

interface Array<T> {
    /**
     * Access item by relative indexing.
     * @param index index to access.
     */
    at(index: number): T | undefined;
}

interface ReadonlyArray<T> {
    /**
     * Access item by relative indexing.
     * @param index index to access.
     */
    at(index: number): T | undefined;
}

interface Int8Array {
    /**
     * Access item by relative indexing.
     * @param index index to access.
     */
    at(index: number): number | undefined;
}

interface Uint8Array {
    /**
     * Access item by relative indexing.
     * @param index index to access.
     */
    at(index: number): number | undefined;
}

interface Uint8ClampedArray {
    /**
     * Access item by relative indexing.
     * @param index index to access.
     */
    at(index: number): number | undefined;
}

interface Int16Array {
    /**
     * Access item by relative indexing.
     * @param index index to access.
     */
    at(index: number): number | undefined;
}

interface Uint16Array {
    /**
     * Access item by relative indexing.
     * @param index index to access.
     */
    at(index: number): number | undefined;
}

interface Int32Array {
    /**
     * Access item by relative indexing.
     * @param index index to access.
     */
    at(index: number): number | undefined;
}

interface Uint32Array {
    /**
     * Access item by relative indexing.
     * @param index index to access.
     */
    at(index: number): number | undefined;
}

interface Float32Array {
    /**
     * Access item by relative indexing.
     * @param index index to access.
     */
    at(index: number): number | undefined;
}

interface Float64Array {
    /**
     * Access item by relative indexing.
     * @param index index to access.
     */
    at(index: number): number | undefined;
}

interface BigInt64Array {
    /**
     * Access item by relative indexing.
     * @param index index to access.
     */
    at(index: number): bigint | undefined;
}

interface BigUint64Array {
    /**
     * Access item by relative indexing.
     * @param index index to access.
     */
     at(index: number): bigint | undefined;
}
