const user = {
  username: "saroj",
  liginContact: 8,
  signedIn: true,

  getUserDetial: function () {
    // console.log("Got user details form database");
    // console.log(`username: ${this.username}`);
    // console.log(this);

  }
}

// console.log(user.username);
// console.log(user.getUserDetial());
// console.log(this);


// *******Constructor function

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`welcome ${this.username}`);
  }
  return this
}

// ** NEW KEYWORDS **
// 1=> when we use that time create empty object.
// 1=> consturctor function call by new keyword and pack all argumetns.
// 1=> inject all the keyword using this keyword.
// 1=> we can get in our fuction.


const userOne = new User("Koushal kumar sharma", 12, true)
const userTwo = new User("saorj kumar sharma", 15, false)
console.log(userOne.constructor);
// console.log(userTwo);

