import bootcampers from './bootcampers.json' with { type: "json" };

export function introduce(bootcamper) {
  const { firstName, lastName, age, hasPets } = bootcamper;

  if (hasPets) {
    return `Hi, my name is ${firstName} ${lastName}. I'm ${age} years old and I am a pet owner.`; 
  } else {
    return `Hi, my name is ${firstName} ${lastName}. I'm ${age} years old and I have no pets.`;
  }
}


export function pickRandomBootcamper(bootcamper) {
  // pick a random bootcamper
  // pick a random object from an array
  // convert it to a number
  const random = Math.floor(Math.random() * bootcamper.length);
  const randomBootcamper = bootcamper[random];
  // console.log it
  // return it
  //console.log(randomBootcamper);
    return randomBootcamper
}

// export bootcampers
// import botocampers
// create export function introduce which will console.log this string:
// ""Hi, my name is John Doe. I'm 32 years old and I have no pets.
// {$ } for names, ages, and pets.

// console.log(
//   introduce({
//     firstName: "Tom",
//     lastName: "Pauley",
//     age: "29",
//     hasPets: true
//   })
// )

