//// [final9.ts]
class A {
    final protected m1() {}
}

class B extends A {
    protected m1() {}
}


//// [final9.js]
class A {
    m1() { }
}
class B extends A {
    m1() { }
}
