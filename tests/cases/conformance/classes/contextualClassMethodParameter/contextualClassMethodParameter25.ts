// @noImplicitAny: true

class Base {
    method(x: number, ...v: any[]) { }
}

class Derived extends Base {
    method(x) { }
}
