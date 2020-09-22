//// [doYouNeedToChangeYourTargetLibrary.ts]
// es2015
const testArrayFind = [""].find((val, idx, obj) => {
    return true;
});
const testArrayFindIndex = [""].findIndex((val, idx, obj) => {
    return true;
});
const testArrayFill = [""].fill("fill");
const testArrayCopyWithin = [""].copyWithin(0, 0);
const testArrayEntries = [""].entries();
const testArrayKeys = [""].keys();
const testArrayValues = [""].values();
const testArrayConstructorFrom = Array.from([]);
const testArrayConstructorOf = Array.of([]);
const testObjectConstructorAssign = Object.assign({}, {});
const testObjectConstructorGetOwnPropertySymbols = Object.getOwnPropertySymbols({});
const testObjectConstructorKeys = Object.keys({});
const testObjectConstructorIs = Object.is({}, {});
const testObjectConstructorSetPrototypeOf = Object.setPrototypeOf({}, {});
const testNumberConstructorIsFinite = Number.isFinite(0);
const testNumberConstructorIsInteger = Number.isInteger(0);
const testNumberConstructorIsNan = Number.isNaN(0);
const testNumberConstructorIsSafeInteger = Number.isSafeInteger(0);
const testNumberConstructorParseFloat = Number.parseFloat("0");
const testNumberConstructorParseInt = Number.parseInt("0");
const testMathClz32 = Math.clz32(0);
const testMathImul = Math.imul(0,0);
const testMathSign = Math.sign(0);
const testMathLog10 = Math.log10(0);
const testMathLog2 = Math.log2(0);
const testMathLog1p = Math.log1p(0);
const testMathExpm1 = Math.expm1(0);
const testMathCosh = Math.cosh(0);
const testMathSinh = Math.sinh(0);
const testMathTanh = Math.tanh(0);
const testMathAcosh = Math.acosh(0);
const testMathAsinh = Math.asinh(0);
const testMathAtanh = Math.atanh(0);
const testMathHypot = Math.hypot(0,0);
const testMathTrunc = Math.trunc(0);
const testMathFround = Math.fround(0);
const testMathCbrt = Math.cbrt(0);
const testMap: Map<any, any> = null as any;
const testSet: Set<any> = null as any;
const testPromiseAll = Promise.all([]);
const testPromiseRace = Promise.race([]);
const testPromiseResolve = Promise.resolve();
const testPromiseReject = Promise.reject();
const testSymbolFor = Symbol.for('a');
const testSymbolKeyFor = Symbol.keyFor(testSymbolFor);
const testWeakMap: WeakMap<any, any> = null as any;
const testWeakSet: WeakMap<any, any> = null as any;
const testIterator: Iterator<any, any, any> = null as any;
const testAsyncIterator: AsyncIterator<any, any, any> = null as any;
const testStringCodePointAt = "".codePointAt(0);
const testStringIncludes = "".includes("");
const testStringEndsWith = "".endsWith("");
const testStringNormalize = "".normalize();
const testStringRepeat = "".repeat(0);
const testStringStartsWith = "".startsWith("");
const testStringAnchor = "".anchor("");
const testStringBig = "".big();
const testStringBlink = "".blink();
const testStringBold = "".bold();
const testStringFixed = "".fixed();
const testStringFontColor = "".fontcolor("blue");
const testStringFontSize = "".fontsize(0);
const testStringItalics = "".italics();
const testStringLink = "".link("");
const testStringSmall = "".small();
const testStringStrike = "".strike();
const testStringSub = "".sub();
const testStringSup = "".sup();
const testStringConstructorFromCodePoint = String.fromCodePoint();
const testStringConstructorRaw = String.raw``;

// es2016
const testIncludes = ["hello"].includes("world");

// es2017
const testStringPadStart = "".padStart(2);
const testStringPadEnd = "".padEnd(2);
const testObjectConstructorValues = Object.values({});
const testObjectConstructorEntries = Object.entries({});
const testObjectConstructorGetOwnPropertyDescriptors = Object.getOwnPropertyDescriptors({});
const testIntlFormatToParts = new Intl.DateTimeFormat("en-US").formatToParts();
const testAtomics = Atomics.add(new Uint8Array(0), 0, 0);
const testSharedArrayBuffer = new SharedArrayBuffer(5);

// es2018
const testPromiseFinally = new Promise(() => {}).finally();
const testRegExpMatchArrayGroups = "2019-04-30".match(/(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g).groups;
const testRegExpExecArrayGroups = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g.exec("2019-04-30").groups;
const testRegExpDotAll = /foo/g.dotAll;
const testIntlPluralRules = new Intl.PluralRules("ar-EG").select(0);
const testAsyncGenerator: AsyncGenerator<any> = null as any;
const testAsyncGeneratorFunction: AsyncGeneratorFunction = null as any;
const testAsyncIterable: AsyncIterable<any> = null as any;
const testAsyncIterableIterator: AsyncIterableIterator<any> = null as any;

// es2019
const testArrayFlat = [].flat();
const testArrayFlatMap = [].flatMap();
const testObjectConstructorFromEntries = Object.fromEntries({});
const testStringTrimStart = "".trimStart();
const testStringTrimEnd = "".trimEnd();
const testStringTrimLeft = "".trimLeft();
const testStringTrimRight = "".trimRight();
const testSymbolDescription = Symbol("foo").description;

// es2020
const testPromiseAllSettled = new Promise(() => {}).allSettled();
const testStringMatchAll = "".matchAll();
const testRegExpMatchAll = /matchAll/g[Symbol.matchAll]("matchAll");
const testBigInt = BigInt(123);

// esnext
const testPromiseAny = new Promise(() => {}).any();
const testStringReplaceAll = "".replaceAll();
const testNumberFormatFormatToParts = new Intl.NumberFormat("en-US").formatToParts();

//// [doYouNeedToChangeYourTargetLibrary.js]
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
// es2015
var testArrayFind = [""].find(function (val, idx, obj) {
    return true;
});
var testArrayFindIndex = [""].findIndex(function (val, idx, obj) {
    return true;
});
var testArrayFill = [""].fill("fill");
var testArrayCopyWithin = [""].copyWithin(0, 0);
var testArrayEntries = [""].entries();
var testArrayKeys = [""].keys();
var testArrayValues = [""].values();
var testArrayConstructorFrom = Array.from([]);
var testArrayConstructorOf = Array.of([]);
var testObjectConstructorAssign = Object.assign({}, {});
var testObjectConstructorGetOwnPropertySymbols = Object.getOwnPropertySymbols({});
var testObjectConstructorKeys = Object.keys({});
var testObjectConstructorIs = Object.is({}, {});
var testObjectConstructorSetPrototypeOf = Object.setPrototypeOf({}, {});
var testNumberConstructorIsFinite = Number.isFinite(0);
var testNumberConstructorIsInteger = Number.isInteger(0);
var testNumberConstructorIsNan = Number.isNaN(0);
var testNumberConstructorIsSafeInteger = Number.isSafeInteger(0);
var testNumberConstructorParseFloat = Number.parseFloat("0");
var testNumberConstructorParseInt = Number.parseInt("0");
var testMathClz32 = Math.clz32(0);
var testMathImul = Math.imul(0, 0);
var testMathSign = Math.sign(0);
var testMathLog10 = Math.log10(0);
var testMathLog2 = Math.log2(0);
var testMathLog1p = Math.log1p(0);
var testMathExpm1 = Math.expm1(0);
var testMathCosh = Math.cosh(0);
var testMathSinh = Math.sinh(0);
var testMathTanh = Math.tanh(0);
var testMathAcosh = Math.acosh(0);
var testMathAsinh = Math.asinh(0);
var testMathAtanh = Math.atanh(0);
var testMathHypot = Math.hypot(0, 0);
var testMathTrunc = Math.trunc(0);
var testMathFround = Math.fround(0);
var testMathCbrt = Math.cbrt(0);
var testMap = null;
var testSet = null;
var testPromiseAll = Promise.all([]);
var testPromiseRace = Promise.race([]);
var testPromiseResolve = Promise.resolve();
var testPromiseReject = Promise.reject();
var testSymbolFor = Symbol["for"]('a');
var testSymbolKeyFor = Symbol.keyFor(testSymbolFor);
var testWeakMap = null;
var testWeakSet = null;
var testIterator = null;
var testAsyncIterator = null;
var testStringCodePointAt = "".codePointAt(0);
var testStringIncludes = "".includes("");
var testStringEndsWith = "".endsWith("");
var testStringNormalize = "".normalize();
var testStringRepeat = "".repeat(0);
var testStringStartsWith = "".startsWith("");
var testStringAnchor = "".anchor("");
var testStringBig = "".big();
var testStringBlink = "".blink();
var testStringBold = "".bold();
var testStringFixed = "".fixed();
var testStringFontColor = "".fontcolor("blue");
var testStringFontSize = "".fontsize(0);
var testStringItalics = "".italics();
var testStringLink = "".link("");
var testStringSmall = "".small();
var testStringStrike = "".strike();
var testStringSub = "".sub();
var testStringSup = "".sup();
var testStringConstructorFromCodePoint = String.fromCodePoint();
var testStringConstructorRaw = String.raw(__makeTemplateObject([""], [""]));
// es2016
var testIncludes = ["hello"].includes("world");
// es2017
var testStringPadStart = "".padStart(2);
var testStringPadEnd = "".padEnd(2);
var testObjectConstructorValues = Object.values({});
var testObjectConstructorEntries = Object.entries({});
var testObjectConstructorGetOwnPropertyDescriptors = Object.getOwnPropertyDescriptors({});
var testIntlFormatToParts = new Intl.DateTimeFormat("en-US").formatToParts();
var testAtomics = Atomics.add(new Uint8Array(0), 0, 0);
var testSharedArrayBuffer = new SharedArrayBuffer(5);
// es2018
var testPromiseFinally = new Promise(function () { })["finally"]();
var testRegExpMatchArrayGroups = "2019-04-30".match(/(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g).groups;
var testRegExpExecArrayGroups = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g.exec("2019-04-30").groups;
var testRegExpDotAll = /foo/g.dotAll;
var testIntlPluralRules = new Intl.PluralRules("ar-EG").select(0);
var testAsyncGenerator = null;
var testAsyncGeneratorFunction = null;
var testAsyncIterable = null;
var testAsyncIterableIterator = null;
// es2019
var testArrayFlat = [].flat();
var testArrayFlatMap = [].flatMap();
var testObjectConstructorFromEntries = Object.fromEntries({});
var testStringTrimStart = "".trimStart();
var testStringTrimEnd = "".trimEnd();
var testStringTrimLeft = "".trimLeft();
var testStringTrimRight = "".trimRight();
var testSymbolDescription = Symbol("foo").description;
// es2020
var testPromiseAllSettled = new Promise(function () { }).allSettled();
var testStringMatchAll = "".matchAll();
var testRegExpMatchAll = /matchAll/g[Symbol.matchAll]("matchAll");
var testBigInt = BigInt(123);
// esnext
var testPromiseAny = new Promise(function () { }).any();
var testStringReplaceAll = "".replaceAll();
var testNumberFormatFormatToParts = new Intl.NumberFormat("en-US").formatToParts();
