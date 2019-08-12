//// [tests/cases/conformance/jsdoc/declarations/jsDeclarationsFunctionClassesCjsExportAssignment.ts] ////

//// [timer.js]
/**
 * @param {number} timeout
 */
function Timer(timeout) {
    this.timeout = timeout;
}
module.exports = Timer;
//// [hook.js]
/**
 * @typedef {(arg: import("./context")) => void} HookHandler
 */
/**
 * @param {HookHandler} handle
 */
function Hook(handle) {
    this.handle = handle;
}
module.exports = Hook;

//// [context.js]
/**
 * Imports
 *
 * @typedef {import("./timer")} Timer
 * @typedef {import("./hook")} Hook
 * @typedef {import("./hook").HookHandler} HookHandler
 */

/**
 * Input type definition
 *
 * @typedef {Object} Input
 * @prop {Timer} timer
 * @prop {Hook} hook
 */
 
/**
 * State type definition
 *
 * @typedef {Object} State
 * @prop {Timer} timer
 * @prop {Hook} hook
 */

/**
 * New `Context`
 *
 * @class
 * @param {Input} input
 */

function Context(input) {
    if (!(this instanceof Context)) {
      return new Context(input)
    }
    this.state = this.construct(input);
}
Context.prototype = {
    /**
     * @param {Input} input
     * @param {HookHandler=} handle
     * @returns {State}
     */
    construct(input, handle = () => void 0) {
        return input;
    }
}
module.exports = Context;


//// [timer.js]
/**
 * @param {number} timeout
 */
function Timer(timeout) {
    this.timeout = timeout;
}
module.exports = Timer;
//// [context.js]
/**
 * Imports
 *
 * @typedef {import("./timer")} Timer
 * @typedef {import("./hook")} Hook
 * @typedef {import("./hook").HookHandler} HookHandler
 */
/**
 * Input type definition
 *
 * @typedef {Object} Input
 * @prop {Timer} timer
 * @prop {Hook} hook
 */
/**
 * State type definition
 *
 * @typedef {Object} State
 * @prop {Timer} timer
 * @prop {Hook} hook
 */
/**
 * New `Context`
 *
 * @class
 * @param {Input} input
 */
function Context(input) {
    if (!(this instanceof Context)) {
        return new Context(input);
    }
    this.state = this.construct(input);
}
Context.prototype = {
    /**
     * @param {Input} input
     * @param {HookHandler=} handle
     * @returns {State}
     */
    construct: function (input, handle) {
        if (handle === void 0) { handle = function () { return void 0; }; }
        return input;
    }
};
module.exports = Context;
//// [hook.js]
/**
 * @typedef {(arg: import("./context")) => void} HookHandler
 */
/**
 * @param {HookHandler} handle
 */
function Hook(handle) {
    this.handle = handle;
}
module.exports = Hook;


//// [timer.d.ts]
export = Timer;
/**
 * @param {number} timeout
 */
declare function Timer(timeout: number): Timer;
declare class Timer {
    /**
     * @param {number} timeout
     */
    constructor(timeout: number);
    timeout: number;
}
//// [context.d.ts]
export = Context;
type Timer = import("./timer");
type Hook = import("./hook");
type HookHandler = (arg: import("./context") & {
    /**
     * @param {Input} input
     * @param {HookHandler=} handle
     * @returns {State}
     */
    construct(input: Input, handle?: any): State;
}) => void;
type Input = {
    timer: import("./timer");
    hook: import("./hook");
};
type State = {
    timer: import("./timer");
    hook: import("./hook");
};
/**
 * Imports
 *
 * @typedef {import("./timer")} Timer
 * @typedef {import("./hook")} Hook
 * @typedef {import("./hook").HookHandler} HookHandler
 */
/**
 * Input type definition
 *
 * @typedef {Object} Input
 * @prop {Timer} timer
 * @prop {Hook} hook
 */
/**
 * State type definition
 *
 * @typedef {Object} State
 * @prop {Timer} timer
 * @prop {Hook} hook
 */
/**
 * New `Context`
 *
 * @class
 * @param {Input} input
 */
declare function Context(input: Input): import("./context") & {
    /**
     * @param {Input} input
     * @param {HookHandler=} handle
     * @returns {State}
     */
    construct(input: Input, handle?: (arg: import("./context") & any) => void): State;
};
declare class Context {
    /**
     * Imports
     *
     * @typedef {import("./timer")} Timer
     * @typedef {import("./hook")} Hook
     * @typedef {import("./hook").HookHandler} HookHandler
     */
    /**
     * Input type definition
     *
     * @typedef {Object} Input
     * @prop {Timer} timer
     * @prop {Hook} hook
     */
    /**
     * State type definition
     *
     * @typedef {Object} State
     * @prop {Timer} timer
     * @prop {Hook} hook
     */
    /**
     * New `Context`
     *
     * @class
     * @param {Input} input
     */
    constructor(input: Input);
    state: State;
    construct: (input: Input, handle?: (arg: import("./context") & {
        /**
         * @param {Input} input
         * @param {HookHandler=} handle
         * @returns {State}
         */
        construct(input: Input, handle?: any): State;
    }) => void) => State;
}
declare namespace Context {
    export { Timer, Hook, HookHandler, Input, State };
}
//// [hook.d.ts]
export = Hook;
type HookHandler = (arg: import("./context") & {
    construct(input: import("./context").Input, handle?: any): import("./context").State;
}) => void;
/**
 * @typedef {(arg: import("./context")) => void} HookHandler
 */
/**
 * @param {HookHandler} handle
 */
declare function Hook(handle: (arg: import("./context") & {
    construct(input: import("./context").Input, handle?: any): import("./context").State;
}) => void): import("./hook");
declare class Hook {
    /**
     * @typedef {(arg: import("./context")) => void} HookHandler
     */
    /**
     * @param {HookHandler} handle
     */
    constructor(handle: (arg: import("./context") & {
        construct(input: import("./context").Input, handle?: any): import("./context").State;
    }) => void);
    handle: (arg: import("./context") & {
        construct(input: import("./context").Input, handle?: any): import("./context").State;
    }) => void;
}
declare namespace Hook {
    export { HookHandler };
}
