// @target: esnext

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
