//// [emitThisInSuperMethodCall.ts]
class User {
    sayHello() {
    }
}

class RegisteredUser extends User {
    f() {
        () => {
            function inner() {
                super.sayHello();
            }
        };
    }
    g() {
        function inner() {
            () => {
                super.sayHello();
            }
        }
    }
    h() {
        function inner() {
            super.sayHello();
        }
    }
}


//// [emitThisInSuperMethodCall.js]
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = (function () {
    function User() {
    }
    var proto_1 = User.prototype;
    proto_1.sayHello = function () {
    };
    return User;
}());
var RegisteredUser = (function (_super) {
    __extends(RegisteredUser, _super);
    function RegisteredUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    var proto_2 = RegisteredUser.prototype;
    proto_2.f = function () {
        (function () {
            function inner() {
                _super.sayHello.call(this);
            }
        });
    };
    proto_2.g = function () {
        function inner() {
            var _this = this;
            (function () {
                _super.sayHello.call(_this);
            });
        }
    };
    proto_2.h = function () {
        function inner() {
            _super.sayHello.call(this);
        }
    };
    return RegisteredUser;
}(User));
