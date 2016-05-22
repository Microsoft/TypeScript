//// [optionalParameterDestructuring.ts]

declare function f1({ a, b }?: { a: number, b: string }): string;

function f2({ a, b }: { a: number, b: number } = { a: 0, b: 0 }) {
}

// Repro from #8681

interface Type { t: void }
interface QueryMetadata { q: void }

interface QueryMetadataFactory {
    (selector: Type | string, {descendants, read}?: {
        descendants?: boolean;
        read?: any;
    }): ParameterDecorator;
    new (selector: Type | string, {descendants, read}?: {
        descendants?: boolean;
        read?: any;
    }): QueryMetadata;
}


//// [optionalParameterDestructuring.js]
function f2(_a) {
    var _b = _a === void 0 ? { a: 0, b: 0 } : _a, a = _b.a, b = _b.b;
}


//// [optionalParameterDestructuring.d.ts]
declare function f1({a, b}?: {
    a: number;
    b: string;
}): string;
declare function f2({a, b}?: {
    a: number;
    b: number;
}): void;
interface Type {
    t: void;
}
interface QueryMetadata {
    q: void;
}
interface QueryMetadataFactory {
    (selector: Type | string, {descendants, read}?: {
        descendants?: boolean;
        read?: any;
    }): ParameterDecorator;
    new (selector: Type | string, {descendants, read}?: {
        descendants?: boolean;
        read?: any;
    }): QueryMetadata;
}
