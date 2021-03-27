//// [throwType_type_reference.ts]
type MustNumber<T> = T extends number ? T : throw `Expected number, but found "${TypeToString<T>}"`
type A = MustNumber<1>
type B = MustNumber<TypeToString<typeof window>>


//// [throwType_type_reference.js]
