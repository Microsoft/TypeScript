// Block scoped definitions work poorly for global variables, temporarily enable var
/* eslint-disable no-var */

// this will work in the browser via browserify
var _chai: typeof chai = require("chai");
var assert: typeof _chai.assert = _chai.assert;
{
    // chai's builtin `assert.isFalse` is featureful but slow - we don't use those features,
    // so we'll just overwrite it as an alterative to migrating a bunch of code off of chai
    assert.isFalse = (expr: any, msg: string) => { if (expr !== false) throw new Error(msg); };

    const assertDeepImpl = assert.deepEqual;
    assert.deepEqual = (a, b, msg) => {
        if (ts.isArray(a) && ts.isArray(b)) {
            assertDeepImpl(arrayExtraKeysObject(a), arrayExtraKeysObject(b), "Array extra keys differ");
        }
        assertDeepImpl(a, b, msg);

        function arrayExtraKeysObject(a: readonly ({} | null | undefined)[]): object {
            const obj: { [key: string]: {} | null | undefined } = {};
            for (const key in a) {
                if (Number.isNaN(Number(key))) {
                    obj[key] = a[key];
                }
            }
            return obj;
        }
    };
}
/* eslint-enable no-var */