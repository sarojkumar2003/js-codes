// Dates


let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

//  let newDate = new Date(2024, 0, 3)
// let newDate = new Date(2024, 0, 25, 5, 3);
// let newDate = new Date("2024-01-14");
let newDate = new Date("01-21-2024");
// console.log(newDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDates = new Date()
// console.log(newDates);
// console.log(newDates.getMonth()+1);
// console.log(newDates.getDay());

newDates.toLocaleString('default', {
  weekday: "long",
})








