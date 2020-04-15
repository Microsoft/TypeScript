// ==ORIGINAL==

import { X } from "lib";
import type Y from "lib";
import { Z } from "lib";
import type { A, B } from "lib";

export { A, B, X, Y, Z };
// ==ORGANIZED==

import {
    X,

    Z
} from "lib";
import type Y from "lib";
import type { A, B } from "lib";

export { A, B, X, Y, Z };
