// year => 6

class user{
  constructor(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
  }

  encryptPassword() {
    return `${this.password}abc`
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`
  }
}

const chai = new user("chai aur code", "chia@gmail.com", "123")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the scrren

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`
}

User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};


const chai1 = new User("chai aur code", "chia@gmail.com", "123");
console.log(chai1.encryptPassword());
console.log(chai1.changeUsername());

