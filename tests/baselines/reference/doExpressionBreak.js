//// [doExpressionBreak.ts]
for (const i of [1]) {
    (do {
        if (i === 1) break;
        1;
    })
}


for (const i of [1]) {
    for (const i of [1]) {
        (do {
            if (i === 1) break;
            1;
        })
    }
}

a: for (const i of [1]) {
    for (const i of [1]) {
        (do {
            if (i === 1) break a;
            1;
        })
    }
}

a: {
    (do { break a })
}


//// [doExpressionBreak.js]
var _a, _b, _c, _d;
for (const i of [1]) {
    var _e = {};
    try {
        ((() => {
            if (i === 1)
                throw _e;
            _a = 1;
        })(), _a);
    }
    catch (_f) {
        if (_f == _e)
            break;
        throw _f;
    }
}
for (const i of [1]) {
    for (const i of [1]) {
        var _g = {};
        try {
            ((() => {
                if (i === 1)
                    throw _g;
                _b = 1;
            })(), _b);
        }
        catch (_h) {
            if (_h == _g)
                break;
            throw _h;
        }
    }
}
a: for (const i of [1]) {
    var _j = {};
    try {
        for (const i of [1]) {
            ((() => {
                if (i === 1)
                    throw _j;
                _c = 1;
            })(), _c);
        }
    }
    catch (_k) {
        if (_k == _j)
            break;
        throw _k;
    }
}
a: {
    var _l = {};
    try {
        ((() => { throw _l; })(), _d);
    }
    catch (_m) {
        if (_m == _m)
            break a;
        throw _m;
    }
}
