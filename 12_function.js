function sayMyName() {
  console.log("s");
  console.log("a");
  console.log("r");
  console.log("o");
  console.log("j");
}

// sayMyName()


// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2
  // return result
  return number1 +number2
}
const result = addTwoNumbers(3, 5)
// console.log("result: ", result);


// function loginUserMessage(username) {
//   if (username === undefined) {
//     console.log("Plese enter a username");
//     return
//   }
//   return `${username} just logged in`
// }


// function loginUserMessage(username) {
//   if (!username) {
//     console.log("Plese enter a username");
//     return;
//   }
//   return `${username} just logged in`;
// }

function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("Plese enter a username");
    return;
  }
  return `${username} just logged in`;
}
// console.log((loginUserMessage()));


// function calculateCartPrice(...num1) { //... =>rest and spred operator on time to use.
//   return num1
// }

function calculateCartPrice(var1,var2, ...num1) {
  return num1
}

// console.log(calculateCartPrice(200, 500, 500, 1000, 2000));


const user = {
  username: "saorj",
  prices: 199
}

function handleObject(anyobject) {
  console.log(
    `username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// console.log(user);

handleObject({
  username: "sam",
  price: 399
})

const myNewArray = [200, 300, 400, 100, 600]

function returnSecondValue(getArray) {
  return [getArray[1], getArray[2], getArray[3]]
}

function returnSecondValue(getArray) {
  return getArray[1]
}
console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));







