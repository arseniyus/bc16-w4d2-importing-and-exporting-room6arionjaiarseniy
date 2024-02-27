// PLAN:
// Create bootcampers.js file in root of project ✅
// Inside bootcampers.js create an introduce function ✅
// Introduce function = takes in a bootcamper object, returns a string back
// Bootcamper object is string with name, age, pets
// OR string with name, age and without pets
// Export the introduce function
// Import data from bootcampers.json
// Function takes an object and pulls back a string

import bootcampers from './bootcampers.json' with { "type": "json" }

let temporaryObject = {
  "firstName": "Arion",
  "lastName": "King",
  "age": 27,
  "hasPets": true
}

function introduce(e) {
  // const { firstName, lastName, age, hasPets } = bootcampers;

  if(e.hasPets === true) {
    return`Hi, my name is ${e.firstName} ${e.lastName}. I'm ${e.age} years old and I'm a pet owner.`
  }

  else {
    return`Hi, my name is ${e.firstName} ${e.lastName}. I'm ${e.age} years old and I have no pets.`
  }
} 
console.log(introduce(bootcampers[2]))