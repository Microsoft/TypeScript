// @Filename: a.js
// @noEmit: true
// @allowJs: true
// @checkJs: true
// @strict: true
/** @param {number=} a */
function f(a) {
    a = 1
    a = null // should not be allowed
    a = undefined
}
f()
f(null) // should not be allowed
f(undefined)
f(1)
