// @allowJs: true
// @checkJs: true
// @noEmit: true
// @strict: true
// @noImplicitAny: true
// @Filename: a.js

/** @type {function(string): void} */
const f = (value) => {
};
/** @type {(s: string) => void} */
function g(s) {
}

f() // should error
g() // should error
