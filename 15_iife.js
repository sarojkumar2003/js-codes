// Immediately invoked function Expression (IIFE)


// Globe scope ke polution ko remove karne ke liye iife ka use karte hai


(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();



(() => {
  // simple IIFE
  console.log(`DB CONNECTED TWO`);
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})('saroj');

