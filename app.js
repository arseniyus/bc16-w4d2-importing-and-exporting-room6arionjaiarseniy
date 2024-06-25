// TICKET 3 BABY!
// PLAN:
// import JSON data from bootcampers.json ✅
// store in variable
// export from bootcampers.js ✅
// import introduce function from bootcampers.js
// create variables to store each bootcamper in
// call the function

import bootcampers from "./bootcampers.json" with { type: "json"};
import { introduce } from "./bootcampers.js";

let bootcamperData = bootcampers

const arseniy = bootcamperData[0];
const jai = bootcamperData[1]
const arion = bootcamperData[2]

console.log(introduce(arseniy));
console.log(introduce(jai));
console.log(introduce(arion));