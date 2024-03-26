// # Primitive

// 7 types : String, Number, Boolean, null, Undefinde,Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLogin = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const BigNumber = 238474736389474748373764n
console.log(typeof BigNumber);
// Reference (Non primitive)

// Array, Objects, functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
  name: "saoj",
  age: 21,
}

const myfunction = function () {
  console.log("Hello world");
}


//*****************************************************

// Stact (Primitive) get copy value / Heap (Non-Primitive) get reference value

let myName = "saroj"
let anotherName = myName

anotherName = "koshal"
console.log(myName);
console.log(anotherName);

let userOne = {
  email: "user@gamil.com",
  upi: "user@ybl",
}

let userTwo = userOne
userTwo.email = "saroj@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);