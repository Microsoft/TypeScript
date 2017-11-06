/// <reference path="lib.dom.d.ts" />

interface DOMTokenList extends Iterable<string> {
}

interface FormData extends Iterable<string | File> {
    /**
     * Returns an array of key, value pairs for every entry in the list
     */
    entries(): IterableIterator<[string, string | File]>;
    /**
     * Returns a list of keys in the list
     */
    keys(): IterableIterator<string>;
    /**
     * Returns a list of values in the list
     */
    values(): IterableIterator<string | File>;
}

interface Headers extends Iterable<[string, string]> {
    /**
     * Returns an iterator allowing to go through all key/value pairs contained in this object.
     */
    entries(): IterableIterator<[string, string]>;
    /**
     * Returns an iterator allowing to go through all keys f the key/value pairs contained in this object.
     */
    keys(): IterableIterator<string>;
    /**
     * Returns an iterator allowing to go through all values of the key/value pairs contained in this object.
     */
    values(): IterableIterator<string>;
}

interface NodeList extends Iterable<Node> {
    /**
     * Returns an array of key, value pairs for every entry in the list
     */
    entries(): IterableIterator<[number, Node]>;
    /**
     * Performs the specified action for each node in an list.
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the list.
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    forEach(callbackfn: (value: Node, index: number, listObj: NodeList) => void, thisArg?: any): void;
    /**
     * Returns an list of keys in the list
     */
    keys(): IterableIterator<number>;
    /**
     * Returns an list of values in the list
     */
    values(): IterableIterator<Node>;
}

interface NodeListOf<TNode extends Node> extends Iterable<TNode> {
    /**
     * Returns an array of key, value pairs for every entry in the list
     */
    entries(): IterableIterator<[number, TNode]>;
    /**
     * Performs the specified action for each node in an list.
     * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the list.
     * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
     */
    forEach(callbackfn: (value: TNode, index: number, listObj: NodeListOf<TNode>) => void, thisArg?: any): void;
    /**
     * Returns an list of keys in the list
     */
    keys(): IterableIterator<number>;
    /**
     * Returns an list of values in the list
     */
    values(): IterableIterator<TNode>;
}

interface URLSearchParams extends Iterable<[string, string]> {
    /**
     * Returns an array of key, value pairs for every entry in the search params
     */
    entries(): IterableIterator<[string, string]>;
    /**
     * Returns a list of keys in the search params
     */
    keys(): IterableIterator<string>;
    /**
     * Returns a list of values in the search params
     */
    values(): IterableIterator<string>;
}
