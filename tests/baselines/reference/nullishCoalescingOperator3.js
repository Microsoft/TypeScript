//// [nullishCoalescingOperator3.ts]
declare const a1: 'literal' | undefined | null
declare const a2: '' | undefined | null
declare const a3: 1 | undefined | null
declare const a4: 0 | undefined | null
declare const a5: true | undefined | null
declare const a6: false | undefined | null


const aa1 = a1 ?? a2 ?? a3 ?? a4 ?? a5 ?? a6 ?? 'whatever'


//// [nullishCoalescingOperator3.js]
var _a, _b, _c, _d, _e;
"use strict";
var aa1 = (_e = (_d = (_c = (_b = (_a = (a1 != null ? a1 : a2), (_a != null ? _a : a3)), (_b != null ? _b : a4)), (_c != null ? _c : a5)), (_d != null ? _d : a6)), (_e != null ? _e : 'whatever'));
