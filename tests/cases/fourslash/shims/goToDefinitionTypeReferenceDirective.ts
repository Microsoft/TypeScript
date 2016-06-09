/// <reference path="../fourslash.ts"/>

// @typesRoot: src/types
// @Filename: src/types/lib/index.d.ts
/////*0*/declare let $: {x: number};

// @Filename: src/app.ts
//// /// <reference types="lib/*1*/"/>
//// $.x;

goTo.marker("1");
goTo.definition();
verify.caretAtMarker("0");