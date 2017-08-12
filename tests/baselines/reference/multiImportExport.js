//// [tests/cases/compiler/multiImportExport.ts] ////

//// [consumer.ts]
import Drawing = require('./Drawing');
var addr = new Drawing.Math.Adder();

//// [Drawing.ts]
export import Math = require('./Math/Math')

//// [Math.ts]
import Adder = require('./Adder');

var Math = {
    Adder:Adder
};

export = Math

//// [Adder.ts]
class Adder {
    add(a: number, b: number) {
        
    }
}

export = Adder;

//// [Adder.js]
"use strict";
var __names = (this && this.__names) || (function() {
    var name = Object.defineProperty ? (function(proto, name) {
        Object.defineProperty(proto[name], 'name', { 
            value: name, configurable: true
        });
    }) : (function(proto, name) {
        proto[name].name = name;
    });
    return function (proto, keys) {
        for (var i = keys.length - 1; i >= 0; i--) {
            name(proto, keys[i])
        }
    };
})();
var Adder = (function () {
    function Adder() {
    }
    Adder.prototype.add = function (a, b) {
    };
    __names(Adder.prototype, ["add"]);
    return Adder;
}());
module.exports = Adder;
//// [Math.js]
"use strict";
var Adder = require("./Adder");
var Math = {
    Adder: Adder
};
module.exports = Math;
//// [Drawing.js]
"use strict";
exports.__esModule = true;
exports.Math = require("./Math/Math");
//// [consumer.js]
"use strict";
exports.__esModule = true;
var Drawing = require("./Drawing");
var addr = new Drawing.Math.Adder();


//// [Adder.d.ts]
declare class Adder {
    add(a: number, b: number): void;
}
export = Adder;
//// [Math.d.ts]
import Adder = require('./Adder');
declare var Math: {
    Adder: typeof Adder;
};
export = Math;
//// [Drawing.d.ts]
export import Math = require('./Math/Math');
//// [consumer.d.ts]
