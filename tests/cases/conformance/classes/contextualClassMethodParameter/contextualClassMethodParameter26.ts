// @noImplicitAny: true

class Base {
    method(x: number) { }
}

class Derived extends Base {
    method(x) { }
}

class DD extends Derived {
    method (x) { }
}