// let myName = "saroj     "
// let chai = "chai    "

// console.log(myName.truelength);


let MyHeros = ["thor", "spiderman"]

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`spidy power is ${this.spiderman}`);
  }
}

Object.prototype.saroj = function () {
  console.log(`spiderman power is presernt`);
}

// heroPower.getSpiderPower.saroj()
MyHeros.saroj()


// Inheritance


const user = {
  name: "chai",
  email: "chai@googel.com",
}

const teacher = {
  makevideo: true
}

const teachingSupport = {
  isAvailable: false
}

const TAsupport = {
  makeAssignment: 'js Assignment',
  fullTime: true,
   __proto__: teacher  // inherit the property of teacher (first way)
}
// old way to inherit the porperty.
teacher.__proto__ = user
console.log(TAsupport.__proto__);

// Modern syntax
const inherit = Object.setPrototypeOf(teachingSupport, teacher)
console.log(inherit);



const anotherusername = "saroj    "

String.prototype.truelength = function () {
  console.log(`This lenght is: ${this.trim().length}`);
}
anotherusername.truelength()
"koushal kumar sharma".truelength()
