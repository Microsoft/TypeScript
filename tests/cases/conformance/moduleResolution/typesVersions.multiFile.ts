// @traceResolution: true
// @target: esnext
// @module: commonjs
// @filename: node_modules/ext/package.json
{
    "name": "ext",
    "version": "1.0.0",
    "types": "index",
    "typesVersions": {
        ">=3.1.0-0": { "*" : ["ts3.1/*"] }
    }
}

// @filename: node_modules/ext/index.d.ts
export const a = "default a";

// @filename: node_modules/ext/other.d.ts
export const b = "default b";

// @filename: node_modules/ext/ts3.1/index.d.ts
export const a = "ts3.1 a";

// @filename: node_modules/ext/ts3.1/other.d.ts
export const b = "ts3.1 b";

// @filename: main.ts
import { a } from "ext";
import { b } from "ext/other";

const aa: "ts3.1 a" = a;
const bb: "ts3.1 b" = b;

// @filename: tsconfig.json
{}