//// [tests/cases/conformance/parser/ecmascriptnext/numericSeperators/parser.numericSeperators.octalNegative.ts] ////

//// [1.ts]
0o00_

//// [2.ts]
0o_110

//// [3.ts]
0_O0101

//// [4.ts]
0o01__11

//// [5.ts]
0O0110_0110__

//// [6.ts]
0o___0111010_0101_1


//// [1.js]
0;
//// [2.js]
0;
_110;
//// [3.js]
0;
_O0101;
//// [4.js]
1;
_11;
//// [5.js]
294984;
_;
//// [6.js]
0;
___0111010_0101_1;
