// @jsx: react
// @filename: renderer.d.ts
declare global {
    namespace JSX {
        interface IntrinsicElements {
            [e: string]: any;
        }
    }
}
export function dom(...args: any[]): void;
export function createElement(...args: any[]): void;
// @filename: reacty.tsx
/** @jsx React.createElement */
import * as React from "./renderer";
<><h></h></>
// @filename: index.tsx
/** @jsx dom */
import { dom } from "./renderer";
<><h></h></>