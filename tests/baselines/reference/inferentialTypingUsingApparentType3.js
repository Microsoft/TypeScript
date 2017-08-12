//// [inferentialTypingUsingApparentType3.ts]
interface Field<T> {
    clean(input: T): T
}

class CharField implements Field<string> {
    clean(input: string) {
        return "Yup";
    }
}

class NumberField implements Field<number> {
    clean(input: number) {
        return 123;
    }
}

class ObjectField<A, T extends { [name: string]: Field<any> }> {
    constructor(public fields: T) { }
}

var person = new ObjectField({
    id: new NumberField(),
    name: new CharField()
});

person.fields.id;

//// [inferentialTypingUsingApparentType3.js]
var CharField = (function () {
    function CharField() {
    }
    var proto_1 = CharField.prototype;
    proto_1.clean = function (input) {
        return "Yup";
    };
    return CharField;
}());
var NumberField = (function () {
    function NumberField() {
    }
    var proto_2 = NumberField.prototype;
    proto_2.clean = function (input) {
        return 123;
    };
    return NumberField;
}());
var ObjectField = (function () {
    function ObjectField(fields) {
        this.fields = fields;
    }
    return ObjectField;
}());
var person = new ObjectField({
    id: new NumberField(),
    name: new CharField()
});
person.fields.id;
