//// [classBlockScoping.ts]
function f(b: boolean) {
  let Foo: any;
  if (b) {
    Foo = class Foo {
      static y = new Foo();

      static x() {
        new Foo();
      }

      m() {
        new Foo();
      }
    };

    new Foo();
  }
  else {
    class Foo {
      static y = new Foo();

      static x() {
        new Foo();
      }

      m() {
        new Foo();
      }
    }

    new Foo();
  }
}

//// [classBlockScoping.js]
function f(b) {
    var Foo;
    if (b) {
        Foo = (_a = (function () {
                function Foo() {
                }
                Foo.x = function () {
                    new Foo();
                };
                var proto_1 = Foo.prototype;
                proto_1.m = function () {
                    new Foo();
                };
                return Foo;
            }()),
            _a.y = new _a(),
            _a);
        new Foo();
    }
    else {
        var Foo_1 = (function () {
            function Foo() {
            }
            Foo.x = function () {
                new Foo();
            };
            var proto_2 = Foo.prototype;
            proto_2.m = function () {
                new Foo();
            };
            Foo.y = new Foo();
            return Foo;
        }());
        new Foo_1();
    }
    var _a;
}
