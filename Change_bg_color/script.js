//  Generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)]
  }
  return color;
};

// console.log(randomColor());
let intervalId;
const startChangingColor = function () {

  const changeBgColor = function () {
  document.body.style.backgroundColor = randomColor()
  }

   if (!intervalId) {
    intervalId = setInterval(changeBgColor,1000)
  }
}
const stopChangingColor = function () {
  clearInterval(intervalId)
  intervalId = null;
}
document.getElementById('start').addEventListener('click', startChangingColor)
document.getElementById('stop').addEventListener('click', stopChangingColor)
