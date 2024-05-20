class User{
  constructor(email, password) {
    this.email = email
    this.password = password
  }
  get password() {
    return `${this._password}`
  }
  set password(value) {
    this._password = value
  }

  get email() {
    return `${this._email}`
  }
  set email(value) {
    this._email = value
  }
}

const saorj = new User("s@gmail.com", "123")
console.log(saorj.password)
console.log(saorj.email);
