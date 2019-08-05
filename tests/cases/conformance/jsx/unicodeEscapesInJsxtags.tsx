// @filename: file.tsx
// @jsx: react
// @noLib: true
// @skipLibCheck: true
// @libFiles: react.d.ts,lib.d.ts
import * as React from "react";
declare global {
    namespace JSX {
        interface IntrinsicElements {
            "a-b": any;
            "a-c": any;
        }
    }
}
const Compa = (x: {x: number}) => <div>{"" + x}</div>;

let a = <\u0061></a>; // works
let ab = <\u0061-b></a-b>; // works
let ac = <a-\u0063></a-c>; // works
let compa = <Comp\u0061 x={12} />; // works
