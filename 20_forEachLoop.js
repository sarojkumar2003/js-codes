const coding = ["js", "rubby", "java", "python", "cpp"]

// coding.forEach(function (item) {
//   console.log(item);
// } )

// coding.forEach((item) => {
//   console.log(item);
// })


// function printMe(item) {
//   console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach((item, index, arrList) => {
//   console.log(`item is ${item} & index is ${index} and Array List is ${arrList}`);
// })


const myCodding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "python",
  },
  {
    languageName: "python",
    languageFileName: "js",
  },
];

myCodding.forEach((item) => {
  console.log(item.languageName);
});

myCodding.forEach((item) => {
  console.log(item.languageName, item.languageFileName);
});