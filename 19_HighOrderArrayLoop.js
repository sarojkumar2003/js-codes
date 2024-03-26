// for of loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
  // console.log(num);  
}

const greeting = "Hello world!"
for (const greet of greeting) {
  // console.log(`Each char is ${greet}`);
}

// const greeting = ["ram", "shayam", "geeta", "radha"];
// for (const greet of greeting) {
//   console.log(`Each char is ${greet}`);
// }


// Maps

const map = new Map()
map.set('IN', "INDIA")
map.set("USA", "UNITED STATE OF AMERICA");
map.set("FR", "FRANCE")

// console.log(map);

for (const key of map) {
  // console.log(key);
}

for (const [key, value] of map) {
  // console.log(key, ":-", value);
}

const myObj = {
  game1: 'NFS',
  game2 : 'spiderman' 
}

// for (const [key, value] of myObj) {
//    console.log(key, ":-", value);
// }


const myObject = {
  js: 'javascript',
  cpp: 'c++',
  rb: "rubby",
  swift: "swift by apple"

} 


for (const key in myObject) {
  // console.log(`${key} shortcut is for ${ myObject[key]}`);
}



const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
  // console.log(programming[key]);
}


const maps = new Map();
map.set("IN", "INDIA");
map.set("USA", "UNITED STATE OF AMERICA");
map.set("FR", "FRANCE");

for (const key in maps) {
  console.log(key);
}