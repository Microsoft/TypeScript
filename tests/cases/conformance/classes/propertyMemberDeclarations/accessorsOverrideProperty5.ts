// @target: esnext
// @legacyClassFields: false
interface I {
    p: number
}
interface B extends I { }
class B { }
class C extends B {
    get p() { return 1 }
    set p(value) { }
}
