class user{
  constructor(username) {
    this.uername = username
  }

  logMe() {
    console.log(`USERNAME: ${this.uername}`);
  }

  static createId() {
    return '123'
  }
}

const saroj = new user("saorj")
// console.log(saroj.createId());

class teacher extends user{
  constructor(username, email) {
    super(username)
    this.emali= email
  }
}

const iphone = new teacher("iphone", "i@phone.com")
iphone.logMe()
console.log(iphone.createId())