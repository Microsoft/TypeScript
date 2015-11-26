// doc 2.5

struct Base {
    constructor(x: number) { }
}

struct C extends Base {
    foo: string;
}

var r = C;
var c = new C(); // error
var c2 = new C(1); // ok

/* struct Base2<T,U> {
    constructor(x: T) { }
}

struct D<T,U> extends Base2<T,U> {
    foo: U;
}

var r2 = D;
var d = new D(); // error
var d2 = new D(1); // ok

// specialized base struct
struct D2<T, U> extends Base2<string, number> {
    foo: U;
}

var r3 = D2;
var d3 = new D(); // error
var d4 = new D(1); // ok

struct D3 extends Base2<string, number> {
    foo: string;
}

var r4 = D3;
var d5 = new D(); // error
var d6 = new D(1); // ok */