// @declaration: true
// @pedanticOverride: true
class B {
    p1: number = 1;
    p2: number = 2;
    oop: number;
    pp: number;
    op: number;
}

class D extends B{
    declare p1: number

    override declare p2: number

    override static sp: number;

    override override oop: number;

    public override pp: number;
    override public op: number;

    override constructor () {
        super();
    }
}
