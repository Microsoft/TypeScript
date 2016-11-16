//// [await_unaryExpression_es6_3.ts]

async function bar1() {
    ++await 42; // Error
}

async function bar2() {
    --await 42; // Error
}

async function bar3() {
    var x = 42;
    await x++; // OK but shouldn't need parenthesis
}

async function bar4() {
    var x = 42;
    await x--; // OK but shouldn't need parenthesis
}

//// [await_unaryExpression_es6_3.js]
const __awaiter = (this && this.__awaiter) || ((thisArg, _arguments, P, generator) => {
    return new (P || (P = Promise))((resolve, reject) => {
        const fulfilled = value => { try { step(generator.next(value)); } catch (e) { reject(e); } }
        const rejected = value => { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        const step = result => { result.done ? resolve(result.value) : new P(resolve => { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
});
function bar1() {
    return __awaiter(this, void 0, void 0, function* () {
        ++;
        yield 42; // Error
    });
}
function bar2() {
    return __awaiter(this, void 0, void 0, function* () {
        --;
        yield 42; // Error
    });
}
function bar3() {
    return __awaiter(this, void 0, void 0, function* () {
        var x = 42;
        yield x++; // OK but shouldn't need parenthesis
    });
}
function bar4() {
    return __awaiter(this, void 0, void 0, function* () {
        var x = 42;
        yield x--; // OK but shouldn't need parenthesis
    });
}
