//// [jsxJsxsCjsTransformKeyProp.tsx]
/// <reference path="/.lib/react16.d.ts" />
const props = { answer: 42 }
const a = <div key="foo" {...props}>text</div>;
const b = <div {...props} key="bar">text</div>;

export {};


//// [jsxJsxsCjsTransformKeyProp.js]
"use strict";
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
exports.__esModule = true;
var react_1 = require("react");
var jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
var _jsxFileName = "tests/cases/conformance/jsx/jsxs/jsxJsxsCjsTransformKeyProp.tsx";
/// <reference path="react16.d.ts" />
var props = { answer: 42 };
var a = jsx_dev_runtime_1.jsxDEV("div", __assign({}, props, { children: "text" }), "foo", false, { fileName: _jsxFileName, lineNumber: 3, columnNumber: 10 }, this);
var b = react_1.createElement("div", __assign({}, props, { key: "bar" }), "text");
