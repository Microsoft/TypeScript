//// [genericMemberFunction.ts]
export class BuildError<A, B, C>{
  public parent<A, B extends A, C>(): FileWithErrors<A, B, C> {
    return undefined;
  }
}
export class FileWithErrors<A, B, C>{
  public errors<A, B extends A, C>(): BuildError<A, B, C>[] {
    return undefined;
  }
  public parent<A, B extends A, C>(): BuildResult<A, B, C> {
    return undefined;
  }
}
export class BuildResult<A, B, C>{
  public merge<A, B extends A, C>(other: BuildResult<A, B, C>): void {
    a.b.c.d.e.f.g = 0;
    removedFiles.forEach(<A, B extends A, C>(each: FileWithErrors<A, B, C>) => {
      this.removeFile(each);
    });
  }
}


//// [genericMemberFunction.js]
define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var BuildError = (function () {
        function BuildError() {
        }
        var proto_1 = BuildError.prototype;
        proto_1.parent = function () {
            return undefined;
        };
        return BuildError;
    }());
    exports.BuildError = BuildError;
    var FileWithErrors = (function () {
        function FileWithErrors() {
        }
        var proto_2 = FileWithErrors.prototype;
        proto_2.errors = function () {
            return undefined;
        };
        proto_2.parent = function () {
            return undefined;
        };
        return FileWithErrors;
    }());
    exports.FileWithErrors = FileWithErrors;
    var BuildResult = (function () {
        function BuildResult() {
        }
        var proto_3 = BuildResult.prototype;
        proto_3.merge = function (other) {
            var _this = this;
            a.b.c.d.e.f.g = 0;
            removedFiles.forEach(function (each) {
                _this.removeFile(each);
            });
        };
        return BuildResult;
    }());
    exports.BuildResult = BuildResult;
});
