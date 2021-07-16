//// [final7.ts]
class A {
    final m1() {}
}

class B extends A {
    m2() {
        this.m1();
    }
}

new B().m1();
new B().m2();


//// [final7.js]
class A {
    m1() { }
}
class B extends A {
    m2() {
        this.m1();
    }
}
new B().m1();
new B().m2();
