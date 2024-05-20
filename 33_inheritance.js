class user{
  constructor(username) {
    this.username = username
  }

  LogMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class teacher extends user{
  constructor(username, email, password) {
    super(username) // access the user name form user class as a ** CALL **
    this.email = email
    this.password = password
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}, email: ${this.email}, Password: ${this.password}`);
  }
}


const chai = new teacher("chai aur code", "chai@gamil.com", "123@")
chai.addCourse()
chai.LogMe()
const masalachai = new user("chai hai kiya")
masalachai.LogMe()