//// [getterControlFlowStrictNull.ts]
class A {
   a(): string | null {
        if (Math.random() > 0.5) {
            return '';
        }

        // it does error here as expected
    }
}
class B {
    get a(): string | null {
        if (Math.random() > 0.5) {
            return '';
        }

        // it should error here because it returns undefined
    }
}

//// [getterControlFlowStrictNull.js]
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.a = function () {
        if (Math.random() > 0.5) {
            return '';
        }
        // it does error here as expected
    };
    return A;
}());
var B = /** @class */ (function () {
    function B() {
    }
    Object.defineProperty(B.prototype, "a", {
        get: function () {
            if (Math.random() > 0.5) {
                return '';
            }
            // it should error here because it returns undefined
        },
        enumerable: false,
        configurable: true
    });
    return B;
}());
