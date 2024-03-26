// arrays

const myArray = [0, 1, 2, 3, 4]
const myHero = ["shaktiman", "naagraj"]

const myHero2 = new Array(1,2,3,4)
// console.log(myArray);
// console.log(myArray[0]);


// Array Method

// myArray.push(9)
// myArray.pop()
// myArray.unshift(1)
// myArray.shift()

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(3));


// const newArray = myArray.join()
// console.log(myArray);
// console.log(newArray); 


// Slice, splice
console.log("A", myArray);

const myn1 = myArray.slice(1, 3)
console.log(myn1);

console.log("B", myArray);

const myn2 = myArray.splice(1, 3) 
console.log("c", myArray); // Splice manuplate the array.
console.log(myn2);

