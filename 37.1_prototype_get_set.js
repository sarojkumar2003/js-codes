function User(email, password) {
  this._email = email; 
  this.password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });
}

const nepass = new User("chai@gmail.com", "chai");
console.log(nepass.email); 
