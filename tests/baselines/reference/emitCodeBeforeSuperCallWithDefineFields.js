//// [emitCodeBeforeSuperCallWithDefineFields.ts]
// TODO: With false, master is correct for `Test` but incorrect for `Sub`.
// `Test` is correct because classic emit doesn't emit for definition and `Test`
// doesn't need to emit any code for initialisation because it's already
// part of the user code

class Base {
}
class Sub extends Base {
    // @ts-ignore
    constructor(public p: number) {
        console.log('hi');
        super();
    }
    field = 0;
}

class Test extends Base {
    prop: number;
    // @ts-ignore
    constructor(public p: number) {
        1; // Any statements here break it
        super();
        this.prop = 1;
    }
}


//// [emitCodeBeforeSuperCallWithDefineFields.js]
// TODO: With false, master is correct for `Test` but incorrect for `Sub`.
// `Test` is correct because classic emit doesn't emit for definition and `Test`
// doesn't need to emit any code for initialisation because it's already
// part of the user code
class Base {
}
class Sub extends Base {
    // @ts-ignore
    constructor(p) {
        console.log('hi');
        super();
        Object.defineProperty(this, "p", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: p
        });
        Object.defineProperty(this, "field", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
    }
}
class Test extends Base {
    // @ts-ignore
    constructor(p) {
        1; // Any statements here break it
        super();
        Object.defineProperty(this, "p", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: p
        });
        Object.defineProperty(this, "prop", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.prop = 1;
    }
}
