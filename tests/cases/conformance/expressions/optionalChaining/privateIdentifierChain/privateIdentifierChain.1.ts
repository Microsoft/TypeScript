// @strict: true
// @target: esnext
// @useDefineForClassFields: false

class A {
    a?: A
    #b?: A;
    getA(): A {
        return new A();
    }
    constructor() {
        this?.#b;
        this?.a.#b;         // Error
        this?.getA().#b;
    }
}
