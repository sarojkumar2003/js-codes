function multiplayBy5(num) {
  return num*5
}
multiplayBy5.power = 2

// console.log(multiplayBy5(5));
// console.log(multiplayBy5.power);
// console.log(multiplayBy5.prototype);



function creatUser(username, score) {
  this.username = username
  this.score = score
}

creatUser.prototype.increment = function () {
  this.score++
}

creatUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
}

const chai = new creatUser("chai", 25)
const tea = new creatUser("tea", 250)

chai.printMe()
chai.increment()
chai.printMe();
