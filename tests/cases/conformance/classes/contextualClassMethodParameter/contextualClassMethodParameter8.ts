// @noImplicitAny: true

class Base {
    method(x: number): true { return true }
}

class Derived extends Base {
    method(x) { }
}
