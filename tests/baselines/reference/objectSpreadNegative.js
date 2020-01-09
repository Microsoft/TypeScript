//// [objectSpreadNegative.ts]
let o = { a: 1, b: 'no' }

/// private propagates
class PrivateOptionalX {
    private x?: number;
}
class PublicX {
    public x: number;
}
let publicX: PublicX;
let privateOptionalX: PrivateOptionalX;
let o2 = { ...publicX, ...privateOptionalX };
let sn: number = o2.x; // error, x is private
let optionalString: { sn?: string };
let optionalNumber: { sn?: number };
let allOptional: { sn: string | number } = { ...optionalString, ...optionalNumber };
// error, 'sn' is optional in source, required in target

// assignability as target
interface Bool { b: boolean };
interface Str { s: string };
let spread = { ...{ b: true }, ...{s: "foo" } };
spread = { s: "foo" };  // error, missing 'b'
let b = { b: false };
spread = b; // error, missing 's'

// literal repeats are not allowed, but spread repeats are fine
let duplicated = { b: 'bad', ...o, b: 'bad', ...o2, b: 'bad' }
let duplicatedSpread = { ...o, ...o }

// primitives are not allowed, except for falsy ones
let spreadNum = { ...12 };
let spreadSum = { ...1 + 1 };
let spreadZero = { ...0 };
spreadZero.toFixed(); // error, no methods even from a falsy number
let spreadBool = { ...true };
spreadBool.valueOf();
let spreadStr = { ...'foo' };
spreadStr.length; // error, no 'length'
spreadStr.charAt(1); // error, no methods either
// functions are skipped
let spreadFunc = { ...function () { } }
spreadFunc(); // error, no call signature

// write-only properties get skipped
let setterOnly = { ...{ set b (bad: number) { } } };
setterOnly.b = 12; // error, 'b' does not exist

// methods are skipped because they aren't enumerable
class C { p = 1; m() { } }
let c: C = new C()
let spreadC = { ...c }
spreadC.m(); // error 'm' is not in '{ ... c }'

// non primitive
let obj: object = { a: 123 };
let spreadObj = { ...obj };
spreadObj.a; // error 'a' is not in {}


//// [objectSpreadNegative.js]
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var o = { a: 1, b: 'no' };
/// private propagates
var PrivateOptionalX = /** @class */ (function () {
    function PrivateOptionalX() {
    }
    return PrivateOptionalX;
}());
var PublicX = /** @class */ (function () {
    function PublicX() {
    }
    return PublicX;
}());
var publicX;
var privateOptionalX;
var o2 = __assign(__assign({}, publicX), privateOptionalX);
var sn = o2.x; // error, x is private
var optionalString;
var optionalNumber;
var allOptional = __assign(__assign({}, optionalString), optionalNumber);
;
;
var spread = __assign({ b: true }, { s: "foo" });
spread = { s: "foo" }; // error, missing 'b'
var b = { b: false };
spread = b; // error, missing 's'
// literal repeats are not allowed, but spread repeats are fine
var duplicated = __assign(__assign(__assign(__assign({ b: 'bad' }, o), { b: 'bad' }), o2), { b: 'bad' });
var duplicatedSpread = __assign(__assign({}, o), o);
// primitives are not allowed, except for falsy ones
var spreadNum = __assign({}, 12);
var spreadSum = __assign({}, 1 + 1);
var spreadZero = __assign({}, 0);
spreadZero.toFixed(); // error, no methods even from a falsy number
var spreadBool = __assign({}, true);
spreadBool.valueOf();
var spreadStr = __assign({}, 'foo');
spreadStr.length; // error, no 'length'
spreadStr.charAt(1); // error, no methods either
// functions are skipped
var spreadFunc = __assign({}, function () { });
spreadFunc(); // error, no call signature
// write-only properties get skipped
var setterOnly = __assign({ set b(bad) { } });
setterOnly.b = 12; // error, 'b' does not exist
// methods are skipped because they aren't enumerable
var C = /** @class */ (function () {
    function C() {
        this.p = 1;
    }
    C.prototype.m = function () { };
    return C;
}());
var c = new C();
var spreadC = __assign({}, c);
spreadC.m(); // error 'm' is not in '{ ... c }'
// non primitive
var obj = { a: 123 };
var spreadObj = __assign({}, obj);
spreadObj.a; // error 'a' is not in {}
