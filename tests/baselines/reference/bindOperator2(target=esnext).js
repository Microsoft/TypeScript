//// [bindOperator2.ts]
declare const map: <T, U>(this: T[], callbackFn: (value: T) => U) => U[]
declare const arr: number[]
declare const obj: { func: (this: number[]) => number }

const ok1 = arr::obj.func
const val1 = ok1()

const bad1 = obj::obj.func
const bad2 = 0::obj.func
const bad3 = obj::map





//// [bindOperator2.js]
"use strict";
const ok1 = arr::obj.func;
const val1 = ok1();
const bad1 = obj::obj.func;
const bad2 = 0::obj.func;
const bad3 = obj::map;
