//// [modulePrologueSystem.ts]
"use strict";

export class Foo {}

//// [modulePrologueSystem.js]
System.register([], function (exports_1, context_1) {
    var Foo;
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Foo = /** @class */ (function () {
                function Foo() {
                }
                return Foo;
            }());
            exports_1("Foo", Foo);
        }
    };
});
