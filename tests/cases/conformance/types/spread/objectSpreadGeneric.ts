function f<T, U, V>(t: T, u: U, v: V): void {
    let o: spread(spread(T, U), V);
    let uus: spread(U, U);
    let us: spread(U);
    const same: spread(spread(T, U), V) = o; // ok
    uus = us; // ok, multiple spreads are equivalent to a single one
    us = uus; // ok, multiple spreads are equivalent to a single one
    us = u;   // ok, type has at least all the properties of the spread
    u = us;   // error, might be missing a ton of stuff
    const reversed: spread(spread(V, U), T) = o; // error, reversed
    const reversed2: spread(spread(U, T), V) = o; // error, U and T are still reversed
    const missingT: spread(U, V) = o; // error, missing T
    const missingU: spread(T, V) = o; // error, missing U
    const missingV: spread(T, U) = o; // error, missing V
    const atEnd: spread(spread(T, U), { second: string }) = { ...t, ...u, second: 'foo' }; // ok
    const atBeginning: spread(spread({ first: string }, T), U) = { first: 'foo', ...t, ...u }; // error, not assignable

    const emptyTarget: { } = { ...t, ...u } // ok
    const emptySource: spread(T, U) = { }; // error, {} is not assignable to U (or T)

    // error, { sn?: boolean } ...T ... { sn?: number | string } is not assignable to
    //        T ... { sn?: number | string | boolean }
    let optionalNumber: { sn?: number };
    let optionalString: { sn?: string };
    let optionalBoolean: { sn?: boolean };
    const unionCutoff: spread(T, { sn?: number | string | boolean }) =
        { ...optionalBoolean, ...t, ...optionalString, ...optionalNumber }
    unionCutoff.sn; // ok
    const optionalCutoff = { ...t, ...optionalNumber }; // ok
    optionalCutoff.sn; // ok

    const interspersed: spread(spread(spread(spread({ first: string }, T), { second: string }), U), { third: string }) =
        { first: '1', ...t, second: '2', ...u, third: '3' }; // error, not assignable
    const interspersedMissingU: spread(spread({ first: string, second: string }, T), { third: string }) =
        { first: '1', ...t, second: '2', ...u, third: '3' }; // error, 'U' is missing
    const interspersedOrder1: spread(spread(spread(spread({ first: string }, T), { second: string }), U), { third: string , secondsecond: string }) =
        { first: '1', ...t, second: '2', ...u, third: '3', secondsecond: 'false' }; // error, not assignable
    const interspersedOrder2: spread(spread({ first: string, second: string, secondsecond: string, third: string }, T), U) =
        { first: '1', ...t, second: '2', ...u, third: '3', secondsecond: 'false' }; // error, not assignable


    const mismatchFirst: spread(spread(spread(spread({ first: string }, T), { second: string }), U), { third: string }) =
        { firrrrrrst: '1', ...t, second: '2', ...u, third: '3' }; // error, not assignable
    const mismatchSecond: spread(spread(spread(spread({ first: string }, T), { second: string }), U), { third: string }) =
        { first: '1', ...t, ssssssssecond: '2', ...u, third: '3' }; // error, not assignable
    const mismatchLast: spread(spread(spread(spread({ first: string }, T), { second: string }), U), { third: string }) =
        { first: '1', ...t, second: '2', ...u, thirrrrrrrd: '3' }; // error, not assignable
}

function indexAccessedTest<T, K extends keyof T, U, J extends keyof U>(t: T, u: U, key1: K, key2: J) {
    let k1: spread(keyof T);
    let k2: spread(keyof U);
    let k3: spread(K);
    let k4: spread(J);
    k1 = k1; // ok
    k2 = k2; // ok
    k1 = k2; // error
    k2 = k1; // error
    k3 = k3; // ok
    k4 = k4; // ok
    k1 = k3; // error
    k3 = k1; // error
    k2 = k4; // error
    k4 = k2; // error

    let i1: spread(T[K]);
    let i2: spread(U[J]);
    i1 = i1; // ok
    i2 = i2; // ok
    i1 = i2; // error
    i2 = i1; // error
}
