// @noImplicitAny: true

class Base {
    method(x: "a" | "b") { }
}

class Derived extends Base {
    method(y = "a") { }
}

