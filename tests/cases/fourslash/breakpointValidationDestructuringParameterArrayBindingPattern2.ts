/// <reference path='fourslash.ts' />

////declare var console: {
////    log(msg: any): void;
////}
////type Robot = [string, [string, string]];
////var robotA: Robot = ["trimmer", ["trimming", "edging"]];
////function foo1([, skillA]: Robot) {
////    console.log(skillA);
////}
////function foo2([nameMB]: Robot) {
////    console.log(nameMB);
////}
////function foo3([nameMA, [primarySkillA, secondarySkillA]]: Robot) {
////    console.log(nameMA);
////}
////function foo4([...multiRobotAInfo]: Robot) {
////    console.log(multiRobotAInfo);
////}
////foo1(robotA);
////foo1(["Roomba", ["vacuum", "mopping"]]);
////foo2(robotA);
////foo2(["Roomba", ["vacuum", "mopping"]]);
////foo3(robotA);
////foo3(["Roomba", ["vacuum", "mopping"]]);
////foo4(robotA);
////foo4(["Roomba", ["vacuum", "mopping"]]);

verify.baselineCurrentFileBreakpointLocations();
