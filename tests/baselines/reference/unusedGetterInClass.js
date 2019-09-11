//// [unusedGetterInClass.ts]
class Employee {
    private _fullName: string;

    private get fullName(): string {
        return this._fullName;
    }
    // Will not also error on the setter
    private set fullName(_: string) {}
}

//// [unusedGetterInClass.js]
var Employee = /** @class */ (function () {
    function Employee() {
    }
    var proto_1 = Employee.prototype;
    Object.defineProperty(proto_1, "fullName", {
        get: function () {
            return this._fullName;
        },
        // Will not also error on the setter
        set: function (_) { },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
