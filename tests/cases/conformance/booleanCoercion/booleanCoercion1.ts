// @target: esnext
// @pedanticBooleanCoercions: true

declare let anyValue: any;
declare let unknownValue: unknown;
declare let undefinedValue: undefined;
declare let nullValue: null;
declare let stringValue: string;
declare let stringLiteral: "123";
declare let emptyStringLiteral: "";
declare let numberValue: number;
declare let numberLiteral: 123;
declare let zeroNumberLiteral: 0;
declare let booleanValue: boolean;
declare let booleanLiteral: true;
declare let falseBooleanLiteral: false;
declare let bigintValue: bigint;
declare let bigintLiteral: 123n;
declare let zeroBigintLiteral: 0;

enum Enum {
    EnumValue
}


interface Interface {
    foo: string
}

type Type = {
    foo: string
}

class Class {
    foo: string
}

declare function functionValue(): void;
declare let interfaceLiteralValue: Interface
declare let typeLiteralValue: Type;
declare let symbolValue: Symbol
declare let array: string[]
declare let classValue: Class

declare let unionTypeWork1: number | string
declare let unionTypeWork2: number | undefined
declare let unionTypeWork3: number | Type
declare let intersectionTypeWork1: number & Type

declare let unionTypeNotWork1: Type | Interface
declare let intersectionTypeNotWork1: Type & Interface

function testExoression<T>(typeParameter: T) {
    // if
    if (anyValue) { }
    if (unknownValue) { }
    if (undefinedValue) { }
    if (nullValue) { }
    if (stringValue) { }
    if (stringLiteral) { }
    if (emptyStringLiteral) { }
    if (numberValue) { }
    if (numberLiteral) { }
    if (zeroNumberLiteral) { }
    if (booleanValue) { }
    if (booleanLiteral) { }
    if (falseBooleanLiteral) { }
    if (bigintValue) { }
    if (bigintLiteral) { }
    if (zeroBigintLiteral) { }
    if (typeParameter) { }
    if (Enum.EnumValue) { }
    if (unionTypeWork1) { }
    if (unionTypeWork2) { }
    if (unionTypeWork3) { }
    if (intersectionTypeWork1) { }

    if (functionValue) { }
    if (interfaceLiteralValue) { }
    if (typeLiteralValue) { }
    if (symbolValue) { }
    if (array) { }
    if (classValue) { }
    if (unionTypeNotWork1) { }
    if (intersectionTypeNotWork1) { }

    // while
    while (anyValue) { }
    while (unknownValue) { }
    while (undefinedValue) { }
    while (nullValue) { }
    while (stringValue) { }
    while (stringLiteral) { }
    while (emptyStringLiteral) { }
    while (numberValue) { }
    while (numberLiteral) { }
    while (zeroNumberLiteral) { }
    while (booleanValue) { }
    while (booleanLiteral) { }
    while (falseBooleanLiteral) { }
    while (bigintValue) { }
    while (bigintLiteral) { }
    while (zeroBigintLiteral) { }
    while (typeParameter) { }
    while (Enum.EnumValue) { }
    while (unionTypeWork1) { }
    while (unionTypeWork2) { }
    while (unionTypeWork3) { }
    while (intersectionTypeWork1) { }

    while (functionValue) { }
    while (interfaceLiteralValue) { }
    while (typeLiteralValue) { }
    while (symbolValue) { }
    while (array) { }
    while (classValue) { }
    while (unionTypeNotWork1) { }
    while (intersectionTypeNotWork1) { }

    // do while
    do { } while (anyValue)
    do { } while (unknownValue)
    do { } while (undefinedValue)
    do { } while (nullValue)
    do { } while (stringValue)
    do { } while (stringLiteral)
    do { } while (emptyStringLiteral)
    do { } while (numberValue)
    do { } while (numberLiteral)
    do { } while (zeroNumberLiteral)
    do { } while (booleanValue)
    do { } while (booleanLiteral)
    do { } while (falseBooleanLiteral)
    do { } while (bigintValue)
    do { } while (bigintLiteral)
    do { } while (zeroBigintLiteral)
    do { } while (typeParameter)
    do { } while (Enum.EnumValue)
    do {} while (unionTypeWork1)
    do {} while (unionTypeWork2)
    do {} while (unionTypeWork3)
    do {} while (intersectionTypeWork1)

    do { } while (functionValue)
    do {} while (interfaceLiteralValue)
    do {} while (typeLiteralValue)
    do {} while (symbolValue)
    do {} while (array)
    do {} while (classValue)
    do {} while (unionTypeNotWork1)
    do {} while (intersectionTypeNotWork1)
}

function middleExpression<T>(typeParameter: T) {
    // for
    for (; anyValue;) { }
    for (; unknownValue;) { }
    for (; undefinedValue;) { }
    for (; nullValue;) { }
    for (; stringValue;) { }
    for (; stringLiteral;) { }
    for (; emptyStringLiteral;) { }
    for (; numberValue;) { }
    for (; numberLiteral;) { }
    for (; zeroNumberLiteral;) { }
    for (; booleanValue;) { }
    for (; booleanLiteral;) { }
    for (; falseBooleanLiteral;) { }
    for (; bigintValue;) { }
    for (; bigintLiteral;) { }
    for (; zeroBigintLiteral;) { }
    for (; typeParameter;) { }
    for (; Enum.EnumValue;) { }
    for (;unionTypeWork1;) { }
    for (;unionTypeWork2;) { }
    for (;unionTypeWork3;) { }
    for (;intersectionTypeWork1;) { }

    for (; functionValue;) { }
    for (;interfaceLiteralValue;) { }
    for (;typeLiteralValue;) { }
    for (;symbolValue;) { }
    for (;array;) { }
    for (;classValue;) { }
    for (;unionTypeNotWork1;) { }
    for (;intersectionTypeNotWork1;) { }
}

function firstOperand<T>(typeParameter: T) {
    // conditional
    anyValue ? 1 : 2;
    unknownValue ? 1 : 2;
    undefinedValue ? 1 : 2;
    nullValue ? 1 : 2;
    stringValue ? 1 : 2;
    stringLiteral ? 1 : 2;
    emptyStringLiteral ? 1 : 2;
    numberValue ? 1 : 2;
    numberLiteral ? 1 : 2;
    zeroNumberLiteral ? 1 : 2;
    booleanValue ? 1 : 2;
    booleanLiteral ? 1 : 2;
    falseBooleanLiteral ? 1 : 2;
    bigintValue ? 1 : 2;
    bigintLiteral ? 1 : 2;
    zeroBigintLiteral ? 1 : 2;
    typeParameter ? 1 : 2;
    Enum.EnumValue ? 1 : 2;
    unionTypeWork1 ? 1 : 2
    unionTypeWork2 ? 1 : 2
    unionTypeWork3 ? 1 : 2
    intersectionTypeWork1 ? 1 : 2

    functionValue ? 1 : 2;
    interfaceLiteralValue ? 1 : 2;
    typeLiteralValue ? 1 : 2;
    symbolValue ? 1 : 2;
    array ? 1 : 2;
    classValue ? 1 : 2;
    unionTypeNotWork1 ? 1 : 2;
    intersectionTypeNotWork1 ? 1 : 2;

    // and
    anyValue && 1;
    unknownValue && 1;
    undefinedValue && 1;
    nullValue && 1;
    stringValue && 1;
    stringLiteral && 1;
    emptyStringLiteral && 1;
    numberValue && 1;
    numberLiteral && 1;
    zeroNumberLiteral && 1;
    booleanValue && 1;
    booleanLiteral && 1;
    falseBooleanLiteral && 1;
    bigintValue && 1;
    bigintLiteral && 1;
    zeroBigintLiteral && 1;
    typeParameter && 1;
    Enum.EnumValue && 1;
    unionTypeWork1 && 1;
    unionTypeWork2 && 1;
    unionTypeWork3 && 1;
    intersectionTypeWork1 && 1;

    functionValue && 1;
    interfaceLiteralValue && 1;
    typeLiteralValue && 1;
    symbolValue && 1;
    array && 1;
    classValue && 1;
    unionTypeNotWork1 && 1;
    intersectionTypeNotWork1 && 1;

    // or
    anyValue || 1;
    unknownValue || 1;
    undefinedValue || 1;
    nullValue || 1;
    stringValue || 1;
    stringLiteral || 1;
    emptyStringLiteral || 1;
    numberValue || 1;
    numberLiteral || 1;
    zeroNumberLiteral || 1;
    booleanValue || 1;
    booleanLiteral || 1;
    falseBooleanLiteral || 1;
    bigintValue || 1;
    bigintLiteral || 1;
    zeroBigintLiteral || 1;
    typeParameter || 1;
    Enum.EnumValue || 1;
    unionTypeWork1 || 1;
    unionTypeWork2 || 1;
    unionTypeWork3 || 1;
    intersectionTypeWork1 || 1;

    functionValue || 1;
    interfaceLiteralValue || 1;
    typeLiteralValue || 1;
    symbolValue || 1;
    array || 1;
    classValue || 1;
    unionTypeNotWork1 || 1;
    intersectionTypeNotWork1 || 1;
}

function notOperand<T>(typeParameter: T) {
    // not
    !anyValue;
    !unknownValue;
    !undefinedValue;
    !nullValue;
    !stringValue;
    !stringLiteral;
    !emptyStringLiteral;
    !numberValue;
    !numberLiteral;
    !zeroNumberLiteral;
    !booleanValue;
    !booleanLiteral;
    !falseBooleanLiteral;
    !bigintValue;
    !bigintLiteral;
    !zeroBigintLiteral;
    !typeParameter;
    !Enum.EnumValue;
    !unionTypeWork1;
    !unionTypeWork2;
    !unionTypeWork3;
    !intersectionTypeWork1;

    !functionValue;
    !interfaceLiteralValue;
    !typeLiteralValue;
    !symbolValue;
    !array;
    !classValue;
    !unionTypeNotWork1;
    !intersectionTypeNotWork1;
}

declare const guard: number
function questionOrAssignment<T>(typeParameter: T) {
    // question
    anyValue ?? 1;
    unknownValue ?? 1;
    undefinedValue ?? 1;
    nullValue ?? 1;
    stringValue ?? 1;
    stringLiteral ?? 1;
    emptyStringLiteral ?? 1;
    numberValue ?? 1;
    numberLiteral ?? 1;
    zeroNumberLiteral ?? 1;
    booleanValue ?? 1;
    booleanLiteral ?? 1;
    falseBooleanLiteral ?? 1;
    bigintValue ?? 1;
    bigintLiteral ?? 1;
    zeroBigintLiteral ?? 1;
    typeParameter ?? 1;
    Enum.EnumValue ?? 1;
    unionTypeWork1 ?? 1;
    unionTypeWork2 ?? 1;
    unionTypeWork3 ?? 1;
    intersectionTypeWork1 ?? 1;
    functionValue ?? 1;
    interfaceLiteralValue ?? 1;
    typeLiteralValue ?? 1;
    symbolValue ?? 1;
    array ?? 1;
    classValue ?? 1;
    unionTypeNotWork1 ?? 1;
    intersectionTypeNotWork1 ?? 1;

    // &&=
    if (guard === 1) {
        anyValue &&= 1;
        unknownValue &&= 1;
        undefinedValue &&= undefined;
        nullValue &&= null;
        stringValue &&= "";
        stringLiteral &&= "123";
        emptyStringLiteral &&= "";
        numberValue &&= 1;
        numberLiteral &&= 123;
        zeroNumberLiteral &&= 0;
        booleanValue &&= true;
        booleanLiteral &&= true;
        falseBooleanLiteral &&= false;
        bigintValue &&= 1n;
        bigintLiteral &&= 123n;
        zeroBigintLiteral &&= 0;
        typeParameter &&= {} as any;
        unionTypeWork1 &&= 1;
        unionTypeWork2 &&= 1;
        unionTypeWork3 &&= 1;
        intersectionTypeWork1 &&= 1 as any;
        interfaceLiteralValue &&= { foo: '' };
        typeLiteralValue &&= { foo: '' };;
        symbolValue &&= Symbol("");
        array &&= [];
        unionTypeNotWork1 &&= { foo: '' };;
        intersectionTypeNotWork1 &&= { foo: '' };;
    }

    // ||=
    if (guard === 1) {
        anyValue ||= 1;
        unknownValue ||= 1;
        undefinedValue ||= undefined;
        nullValue ||= null;
        stringValue ||= "";
        stringLiteral ||= "123";
        emptyStringLiteral ||= "";
        numberValue ||= 1;
        numberLiteral ||= 123;
        zeroNumberLiteral ||= 0;
        booleanValue ||= true;
        booleanLiteral ||= true;
        falseBooleanLiteral ||= false;
        bigintValue ||= 1n;
        bigintLiteral ||= 123n;
        zeroBigintLiteral ||= 0;
        typeParameter ||= {} as any;
        unionTypeWork1 ||= 1;
        unionTypeWork2 ||= 1;
        unionTypeWork3 ||= 1;
        intersectionTypeWork1 ||= 1 as any;
        interfaceLiteralValue ||= { foo: '' };
        typeLiteralValue ||= { foo: '' };;
        symbolValue ||= Symbol("");
        array ||= [];
        unionTypeNotWork1 ||= { foo: '' };;
        intersectionTypeNotWork1 ||= { foo: '' };;
    }

    // ??=
    if (guard === 1) {
        anyValue ??= 1;
        unknownValue ??= 1;
        undefinedValue ??= undefined;
        nullValue ??= null;
        stringValue ??= "";
        stringLiteral ??= "123";
        emptyStringLiteral ??= "";
        numberValue ??= 1;
        numberLiteral ??= 123;
        zeroNumberLiteral ??= 0;
        booleanValue ??= true;
        booleanLiteral ??= true;
        falseBooleanLiteral ??= false;
        bigintValue ??= 1n;
        bigintLiteral ??= 123n;
        zeroBigintLiteral ??= 0;
        typeParameter ??= {} as any;
        unionTypeWork1 ??= 1;
        unionTypeWork2 ??= 1;
        unionTypeWork3 ??= 1;
        intersectionTypeWork1 ??= 1 as any;
        interfaceLiteralValue ??= { foo: '' };
        typeLiteralValue ??= { foo: '' };;
        symbolValue ??= Symbol("");
        array ??= [];
        unionTypeNotWork1 ??= { foo: '' };;
        intersectionTypeNotWork1 ??= { foo: '' };;
    }
}
