/// <reference path='fourslash.ts' />

////interface MultiRobot {
////    name: string;
////    skills: {
////        [|primary|]: string;
////        secondary: string;
////    };
////}
////let multiRobot: MultiRobot, [|primary|]: string;
////for ({ skills: { [|primary|]: primaryA, secondary: secondaryA } } = multiRobot, i = 0; i < 1; i++) {
////    console.log(primaryA);
////}
////for ({ skills: { [|primary|], secondary } } = multiRobot, i = 0; i < 1; i++) {
////    console.log([|primary|]);
////}

const ranges = test.ranges();
const [r0, r1, r2, r3, r4, r5] = ranges;
const propertyRanges = [r0, r2, r3];
const valueRanges = [r1, r3, r4];
verify.renameLocations([r0, r2], propertyRanges);
verify.renameLocations([r1, r4], valueRanges);
verify.renameLocations(r3, ranges);
