/// <reference path='fourslash.ts' />

////function f(a: number) {
////    try {
////        throw "Hello";
////        
////        try {
////            throw 10;
////        }
////        catch (x) {
////            [|return|] 100;
////        }
////        finally {
////            throw 10;
////        }
////    }
////    catch (x) {
////        [|throw|] "Something";
////    }
////    finally {
////        [|throw|] "Also something";
////    }
////    if (a > 0) {
////        [|return|] (function () {
////            return;
////            return;
////            return;
////
////            if (false) {
////                return true;
////            }
////            throw "Hello!";
////        })() || true;
////    }
////
////    [|th/**/row|] 10;
////
////    var unused = [1, 2, 3, 4].map(x => { throw 4 })
////
////    [|return|];
////    [|return|] true;
////    [|throw|] false;
////}

test.ranges().forEach(r => {
    goTo.position(r.start);

    test.ranges().forEach(range => {
        verify.occurrencesAtPositionContains(range, false);
    });

    verify.occurrencesAtPositionCount(test.ranges().length);
});

goTo.marker();
test.ranges().forEach(range => {
    verify.occurrencesAtPositionContains(range, false);
});
