//const coding = ["js", "ruby", "java", "python", "cpp"]


// const value = coding.forEach((item) => {
//   //console.log(item);
//   return item
// })

// console.log("value is " + value);


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8]
// // const newNums = myNums.filter((num) => num > 4)
// const newNums = myNums.filter((num) => {
//   return num > 4
// })

// const newNums = []
// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num)
//   }
// })

// console.log(newNums);

// const books = [
//   { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
//   { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
//   { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
//   { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
//   { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
//   { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
//   { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
//   { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
//   { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
// ];

// let userBooks = books.filter((bk) => bk.genre === "Science");

// userBooks = books.filter((bk) => bk.publish >= 2000);
// userBooks = books.filter((bk) => {
//   return bk.publish >= 2000 && bk.genre ==='History'
// });


// console.log(userBooks);


// const newNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// const newNums = newNumbers.map((num) => num + 10)
// console.log(newNums);
// const sk = newNumbers.forEach((num) => {
//   return console.log(num + 10);
  
// });



//++++++++  channing


// const newNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = newNumbers
//   .map((num) => num * 10)
//   .map((num) => num + 1)
//   .filter( (num) => num >= 40)

// console.log(newNums);




//++++++++  Reduce  ++++++++++

const myNums = [1, 2, 3]

const myTotal = myNums.reduce((acc, curr) => acc+curr, 0)

// const inisitalValue  = 0
// const myTotal = myNums.reduce(function (accumeletor, currentValue) {
//   console.log(`acc: ${accumeletor} and currval: ${currentValue}`);
//  return accumeletor + currentValue
// },inisitalValue)


// console.log(myTotal);


const shoppingCart = [
  {
    itemname: "js course",
    price: 2999,
  },
  {
    itemname: "Python course",
    price: 3999,
  },
  {
    itemname: "java course",
    price: 5999,
  },
  {
    itemname: "App course",
    price: 12999,
  },
];


const pricetopay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(pricetopay);




