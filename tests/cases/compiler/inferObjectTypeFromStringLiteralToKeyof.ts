declare function inference<T>(target: T, name: keyof T): void;
declare var two: "a" | "d";
inference({ a: 1, b: 2, c: 3, d(n) { return n } }, two);
