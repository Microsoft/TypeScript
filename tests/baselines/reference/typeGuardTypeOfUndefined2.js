//// [typeGuardTypeOfUndefined2.ts]
function test1(a: { b: number } | { b: null }) {
    if (typeof a.b === "undefined") {
        a; // never
    }
    else {
        a; // { b: number } | { b: null }
    }
  }
  
  function test2(a: { b: number } | { b: null }) {
    if (typeof a.b !== "undefined") {
        a; // { b: number } | { b: null }
    }
    else {
        a; // never
    }
  }
  
  function test3(a: { b: number } | { b: undefined }) {
    if (typeof a?.b === "undefined") {
      a; // { b: undefined }
    }
    else {
      a; // { b: number }
    }
  }
  
  function test4(a?: { b: number } | { b: undefined }) {
    if (typeof a?.b === "undefined") {
      a; // { b: undefined } | undefined
    }
    else {
      a; // { b: number }
    }
  }
  
  function test5(a?: { b: number } | { b: undefined } | { b: null } | null) {
    if (typeof a?.b === "undefined") {
      a; // { b: undefined } | null | undefined
    }
    else {
      a; // { b: number } | { b: null }
    }
  }
  
  function test6(a?: { b: number } | { b: undefined } | { b: null } | null) {
    if (typeof a?.b !== "undefined") {
      a; // { b: number } | { b: null }
    }
    else {
      a; // { b: undefined } | null | undefined
    }
  }

//// [typeGuardTypeOfUndefined2.js]
"use strict";
function test1(a) {
    if (typeof a.b === "undefined") {
        a; // never
    }
    else {
        a; // { b: number } | { b: null }
    }
}
function test2(a) {
    if (typeof a.b !== "undefined") {
        a; // { b: number } | { b: null }
    }
    else {
        a; // never
    }
}
function test3(a) {
    if (typeof (a === null || a === void 0 ? void 0 : a.b) === "undefined") {
        a; // { b: undefined }
    }
    else {
        a; // { b: number }
    }
}
function test4(a) {
    if (typeof (a === null || a === void 0 ? void 0 : a.b) === "undefined") {
        a; // { b: undefined } | undefined
    }
    else {
        a; // { b: number }
    }
}
function test5(a) {
    if (typeof (a === null || a === void 0 ? void 0 : a.b) === "undefined") {
        a; // { b: undefined } | null | undefined
    }
    else {
        a; // { b: number } | { b: null }
    }
}
function test6(a) {
    if (typeof (a === null || a === void 0 ? void 0 : a.b) !== "undefined") {
        a; // { b: number } | { b: null }
    }
    else {
        a; // { b: undefined } | null | undefined
    }
}
