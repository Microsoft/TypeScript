//// [parserRealSource1.ts]
// Copyright (c) Microsoft. All rights reserved. Licensed under the Apache License, Version 2.0. 
// See LICENSE.txt in the project root for complete license information.

///<reference path='typescript.ts' />

module TypeScript {
    export module CompilerDiagnostics {
        export var debug = false;
        export interface IDiagnosticWriter {
            Alert(output: string): void;
        }

        export var diagnosticWriter: IDiagnosticWriter = null;

        export var analysisPass: number = 0;

        export function Alert(output: string) {
            if (diagnosticWriter) {
                diagnosticWriter.Alert(output);
            }
        }

        export function debugPrint(s: string) {
            if (debug) {
                Alert(s);
            }
        }

        export function assert(condition: boolean, s: string) {
            if (debug) {
                if (!condition) {
                    Alert(s);
                }
            }
        }

    }

    export interface ILogger {
        information(): boolean;
        debug(): boolean;
        warning(): boolean;
        error(): boolean;
        fatal(): boolean;
        log(s: string): void;
    }

    export class NullLogger implements ILogger {
        public information(): boolean { return false; }
        public debug(): boolean { return false; }
        public warning(): boolean { return false; }
        public error(): boolean { return false; }
        public fatal(): boolean { return false; }
        public log(s: string): void {
        }
    }

    export class LoggerAdapter implements ILogger {
        private _information: boolean;
        private _debug: boolean;
        private _warning: boolean;
        private _error: boolean;
        private _fatal: boolean;

        constructor (public logger: ILogger) { 
            this._information = this.logger.information();
            this._debug = this.logger.debug();
            this._warning = this.logger.warning();
            this._error = this.logger.error();
            this._fatal = this.logger.fatal();
        }


        public information(): boolean { return this._information; }
        public debug(): boolean { return this._debug; }
        public warning(): boolean { return this._warning; }
        public error(): boolean { return this._error; }
        public fatal(): boolean { return this._fatal; }
        public log(s: string): void {
            this.logger.log(s);
        }
    }

    export class BufferedLogger implements ILogger {
        public logContents = [];

        public information(): boolean { return false; }
        public debug(): boolean { return false; }
        public warning(): boolean { return false; }
        public error(): boolean { return false; }
        public fatal(): boolean { return false; }
        public log(s: string): void {
            this.logContents.push(s);
        }
    }

    export function timeFunction(logger: ILogger, funcDescription: string, func: () =>any): any {
        var start = +new Date();
        var result = func();
        var end = +new Date();
        logger.log(funcDescription + " completed in " + (end - start) + " msec");
        return result;
    }

    export function stringToLiteral(value: string, length: number): string {
        var result = "";

        var addChar = (index: number) => {
            var ch = value.charCodeAt(index);
            switch (ch) {
                case 0x09: // tab
                    result += "\\t";
                    break;
                case 0x0a: // line feed
                    result += "\\n";
                    break;
                case 0x0b: // vertical tab
                    result += "\\v";
                    break;
                case 0x0c: // form feed
                    result += "\\f";
                    break;
                case 0x0d: // carriage return
                    result += "\\r";
                    break;
                case 0x22:  // double quote
                    result += "\\\"";
                    break;
                case 0x27: // single quote
                    result += "\\\'";
                    break;
                case 0x5c: // Backslash
                    result += "\\";
                    break;
                default:
                    result += value.charAt(index);
            }
        }

        var tooLong = (value.length > length);
        if (tooLong) {
            var mid = length >> 1;
            for (var i = 0; i < mid; i++) addChar(i);
            result += "(...)";
            for (var i = value.length - mid; i < value.length; i++) addChar(i);
        }
        else {
            length = value.length;
            for (var i = 0; i < length; i++) addChar(i);
        }
        return result;
    }
}


//// [parserRealSource1.js]
// Copyright (c) Microsoft. All rights reserved. Licensed under the Apache License, Version 2.0. 
// See LICENSE.txt in the project root for complete license information.
///<reference path='typescript.ts' />
var TypeScript;
(function (TypeScript) {
    var CompilerDiagnostics;
    (function (CompilerDiagnostics) {
        CompilerDiagnostics.debug = false;
        CompilerDiagnostics.diagnosticWriter = null;
        CompilerDiagnostics.analysisPass = 0;
        function Alert(output) {
            if (CompilerDiagnostics.diagnosticWriter) {
                CompilerDiagnostics.diagnosticWriter.Alert(output);
            }
        }
        CompilerDiagnostics.Alert = Alert;
        function debugPrint(s) {
            if (CompilerDiagnostics.debug) {
                Alert(s);
            }
        }
        CompilerDiagnostics.debugPrint = debugPrint;
        function assert(condition, s) {
            if (CompilerDiagnostics.debug) {
                if (!condition) {
                    Alert(s);
                }
            }
        }
        CompilerDiagnostics.assert = assert;
    })(CompilerDiagnostics = TypeScript.CompilerDiagnostics || (TypeScript.CompilerDiagnostics = {}));
    var NullLogger = /** @class */ (function () {
        function NullLogger() {
        }
        var proto_1 = NullLogger.prototype;
        proto_1.information = function () { return false; };
        proto_1.debug = function () { return false; };
        proto_1.warning = function () { return false; };
        proto_1.error = function () { return false; };
        proto_1.fatal = function () { return false; };
        proto_1.log = function (s) {
        };
        return NullLogger;
    }());
    TypeScript.NullLogger = NullLogger;
    var LoggerAdapter = /** @class */ (function () {
        function LoggerAdapter(logger) {
            this.logger = logger;
            this._information = this.logger.information();
            this._debug = this.logger.debug();
            this._warning = this.logger.warning();
            this._error = this.logger.error();
            this._fatal = this.logger.fatal();
        }
        var proto_2 = LoggerAdapter.prototype;
        proto_2.information = function () { return this._information; };
        proto_2.debug = function () { return this._debug; };
        proto_2.warning = function () { return this._warning; };
        proto_2.error = function () { return this._error; };
        proto_2.fatal = function () { return this._fatal; };
        proto_2.log = function (s) {
            this.logger.log(s);
        };
        return LoggerAdapter;
    }());
    TypeScript.LoggerAdapter = LoggerAdapter;
    var BufferedLogger = /** @class */ (function () {
        function BufferedLogger() {
            this.logContents = [];
        }
        var proto_3 = BufferedLogger.prototype;
        proto_3.information = function () { return false; };
        proto_3.debug = function () { return false; };
        proto_3.warning = function () { return false; };
        proto_3.error = function () { return false; };
        proto_3.fatal = function () { return false; };
        proto_3.log = function (s) {
            this.logContents.push(s);
        };
        return BufferedLogger;
    }());
    TypeScript.BufferedLogger = BufferedLogger;
    function timeFunction(logger, funcDescription, func) {
        var start = +new Date();
        var result = func();
        var end = +new Date();
        logger.log(funcDescription + " completed in " + (end - start) + " msec");
        return result;
    }
    TypeScript.timeFunction = timeFunction;
    function stringToLiteral(value, length) {
        var result = "";
        var addChar = function (index) {
            var ch = value.charCodeAt(index);
            switch (ch) {
                case 0x09: // tab
                    result += "\\t";
                    break;
                case 0x0a: // line feed
                    result += "\\n";
                    break;
                case 0x0b: // vertical tab
                    result += "\\v";
                    break;
                case 0x0c: // form feed
                    result += "\\f";
                    break;
                case 0x0d: // carriage return
                    result += "\\r";
                    break;
                case 0x22: // double quote
                    result += "\\\"";
                    break;
                case 0x27: // single quote
                    result += "\\\'";
                    break;
                case 0x5c: // Backslash
                    result += "\\";
                    break;
                default:
                    result += value.charAt(index);
            }
        };
        var tooLong = (value.length > length);
        if (tooLong) {
            var mid = length >> 1;
            for (var i = 0; i < mid; i++)
                addChar(i);
            result += "(...)";
            for (var i = value.length - mid; i < value.length; i++)
                addChar(i);
        }
        else {
            length = value.length;
            for (var i = 0; i < length; i++)
                addChar(i);
        }
        return result;
    }
    TypeScript.stringToLiteral = stringToLiteral;
})(TypeScript || (TypeScript = {}));
