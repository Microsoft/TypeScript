// @noImplicitOverride: true

class Base {
  p1!: string;
}

class C1 extends Base {
  constructor(public override p1: "hello") {
    super();
    this.p1;
  }
}

class C2 extends Base {
  constructor(override p1: "hello") {
    super();
    this.p1;
  }
}

class C3 extends Base {
  constructor(override public p1: "hello") {
    super();
    this.p1;
  }
}
