# Project Related to DOM

## solution code

# project 1 solution

```javaScript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(buttons);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

# project 2 Solution

```javaScript
const form = document.querySelector('form')

//**NOTE => this usecase will give you empty
  // const height = parseInt(document.querySelector("#height").value)


form.addEventListener('submit',function (e) {
  e.preventDefault()  


  const height = parseInt(document.querySelector('#height').value)
  const width = parseInt(document.querySelector("#weight").value)
  const results = document.querySelector("#results")

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `plese Enter your valid height ${height}`
  } else if (width === '' || width < 0 || isNaN(width)) {
    results.innerHTML = `plese Enter your valid height ${width}`;
  } else {
    const bmi = (width / ((height * height) / 10000)).toFixed(2);
   
   
    let range = '';
    if (bmi <= 18.6) {
      range = ("under weight");
    } else if (bmi <= 18.6 && bmi >= 24.9) {
      range = "Normal Range";
    } else {
      range = "overweight";
    }
   
    // Show the result
    results.innerHTML = `<span>${bmi}</span>, your range is = ${range}`
  }
})

```


# project 3 Solution

```javaScript

const time = document.querySelector("#clock");


setInterval(function () {
  let date = new Date()
  // console.log(date);
  time.innerHTML = date.toLocaleTimeString()  
},1000)

```
