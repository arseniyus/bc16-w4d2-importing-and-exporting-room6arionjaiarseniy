// TICKET 3 BABY!
// PLAN:
// import JSON data from bootcampers.json ✅
// store in variable
// export from bootcampers.js ✅
// import introduce function from bootcampers.js
// create variables to store each bootcamper in
// call the function

import data from './bootcampers.json' with { "type": "json" }
import introduce from './bootcampers.js'

const arion = data[0]
const arseniy = data[1]
const jai = data[2]

console.log(introduce(jai));
console.log(introduce(arion));
console.log(introduce(arseniy));