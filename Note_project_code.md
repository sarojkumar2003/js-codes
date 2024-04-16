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

# project 4 Solution

```javaScript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlote = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuss = [];
let numGuss = 1;

let PlayGame = true;

if (PlayGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);

    // if (userInput === '' || userInput <= 0 || userInput >= 10) {
    //   userInput.innerHTML = 'plese enter valid value'
    //   console.log(userInputf);
    // }
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Plese Enter a valid number");
  } else if (guess < 1) {
    alert("Plese Enter a number more than 1");
  } else if (guess > 100) {
    alert("Plese Enter a number less than 100");
  } else {
    prevGuss.push(guess);
    if (numGuss === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random numner was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Your Guess it Right `);
    endGame();
  } else if (guess <= randomNumber) {
    displayMessage(`Number is tooo low`);
  } else if (guess >= randomNumber) {
    displayMessage(`Number is tooo high`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlote.innerHTML += `${guess}, `;
  numGuss++;
  remaining.innerHTML = `${11 - numGuss}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = " "
  userInput.setAttribute('disabled', ' ')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
  startOver.appendChild(p)
  PlayGame = false
  newGame()
}

function newGame() {
  const newGamebutton = document.querySelector('#newGame')
  newGamebutton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuss = []
    numGuss = 1
    guessSlote.innerHTML = ''
    remaining.innerHTML = `${11 - numGuss}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    PlayGame = true
  })
}

```


# project 5 Solution
## Bg-update

```javaScript

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

```


# project 6 Solution
## key code Generator

```javaScript

const insert = document.querySelector("#insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
  <div class="coloe">
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  
  <tr>
    <td>${e.key === " " ? "space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>
  `;
});


```