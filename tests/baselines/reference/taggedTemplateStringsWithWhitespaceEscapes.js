//// [taggedTemplateStringsWithWhitespaceEscapes.ts]
function f(...args: any[]) {
}

f `\t\n\v\f\r\\`;

//// [taggedTemplateStringsWithWhitespaceEscapes.js]
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
function f() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
}
f(templateObject_543452729_1 || (templateObject_543452729_1 = __makeTemplateObject(["\t\n\v\f\r\\"], ["\\t\\n\\v\\f\\r\\\\"])));
var templateObject_543452729_1;
