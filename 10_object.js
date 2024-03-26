// Singleton
// Object.create


// object literals

const mySym = Symbol("key1")

const JsUser = {
  name: "saroj",
  "full_name": "Saroj kumar Sharma",
  [mySym] : "key2",
  age: 21,
  location: "Delhi",
  email: "saroj@2003.gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email); 
// console.log(JsUser["email"]);  
// console.log(JsUser[mySym]);

JsUser.email = "saroj@chat.com"
// Object.freeze(JsUser)
JsUser.age = 50
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello js user");
}

JsUser.greetingTwo = function () {
  console.log(`Hello js user, ${this.name}`);
};
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());










