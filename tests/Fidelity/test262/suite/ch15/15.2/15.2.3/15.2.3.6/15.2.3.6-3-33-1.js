/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-3-33-1.js
 * @description Object.defineProperty - 'Attributes' is a Function object which implements its own [[Get]] method to access the 'enumerable' property of prototype object (8.10.5 step 3.a)
 */


function testcase() {
        var obj = {};
        var accessed = false;
        try {
            Function.prototype.enumerable = true;
            var fun = function () { };

            Object.defineProperty(obj, "property", fun);

            for (var prop in obj) {
                if (prop === "property") {
                    accessed = true;
                }
            }

            return accessed;
        } finally {
            delete Function.prototype.enumerable;
        }
    }
runTestCase(testcase);
