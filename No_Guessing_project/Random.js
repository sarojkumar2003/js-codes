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
