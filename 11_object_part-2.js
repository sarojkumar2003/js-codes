// const tinderUser = new Object() //singleton object
const tinderUser = {}

tinderUser.id = "12345abc"
tinderUser.name = "summy"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
  email: "soeme@gmail.com",
  fullname: {
    userfullname: {
      firstname: "saroj",
      lastname: "sharma"
    }
  }
}

// console.log(regularUser.fullname.userfullname.firstname);

// optional channing => ?

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = { ...obj1, ...obj2}

// console.log(obj3);

const user = [
  {
    id: 1,
    email: "s@gmail.com",
  },
  {
    id: 1,
    email: "s@gmail.com",
  },
  {
    id: 1,
    email: "s@gmail.com",
  },
];


user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
  courseName : "js in hindi",
  price: "9999",
  courseInstructor: "saroj"
}

// course.courseInstructor

// const {courseInstructor}= course
const {courseInstructor: instructor} = course
console.log(instructor);

// JSON FORMATE

// {
//   "name": "saroj",
//     "course": "js in hinid",
//     "price": "false"
// }










