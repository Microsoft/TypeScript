type A = { a };
type Ab = { a; b };
type Abc = { a; b; c }
type Surprise = 'a' | 'b' | 12;

let over: rest(A, 'a' | 'b');
let partial: rest(Ab, 'b' | 'd');
let emptyOver: rest({}, 'a' | 'b');
let badtype1: rest(Abc, 12);
let badtype2: rest(Abc, Surprise);
let badtype3: rest(Abc, 'a' & 'b');
let badtype4: rest(Abc, number);
function f<T, U extends 12, V extends Surprise, W extends 'a' & 'b', X extends number>(t: T) {
    let bad1: rest(Abc, T);
    let bad2: rest(Abc, 12);
    let bad3: rest(Abc, Surprise);
    let bad4: rest(Abc, 'a' & 'b');
    let bad5: rest(Abc, number);
    let over: rest(T, 'a');
    return bad1;
}

