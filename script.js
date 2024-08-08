let randomNumber = parseInt(Math.random() * 100 + 1);

const guess = document.getElementById("guessField");
const guessSubmit = document.getElementById("subt");
const prev = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const loh = document.querySelector(".lowOrHi");
const start = document.querySelector(".resultParas");

let prevGuess = [];
let play = true;
let totGuess = 1;
const p = document.createElement("p");

if (play) {
  guessSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const numGuess = parseInt(guess.value);
    validGame(numGuess);
  });
}

const validGame = (input) => {
  if (isNaN(input)) {
    alert(`Invalid input.`);
  } else if (input > 100) {
    alert(`Input is greater than 100.`);
  } else if (input < 1) {
    alert(`Input is leser than 1.`);
  } else {
    prevGuess.push(input);
    if (totGuess === 11) {
      displayGuess(input);
      displayMessage(`No more guess availabe.`);
      endGame();
    } else {
      displayGuess(input);
      chekGuess(input);
    }
  }
};

const chekGuess = (input) => {
  if (input === randomNumber) {
    displayMessage(`You guessed it right.`);
    endGame();
  } else if (input < randomNumber) {
    displayMessage(`You guessed Too low`);
  } else if (input > randomNumber) {
    displayMessage(`You guessed Too high`);
  }
};
const displayGuess = (input) => {
  guess.value = "";
  prev.innerHTML += `${input} `;
  totGuess++;
  remaining.innerHTML = `${11 - totGuess}`;
};
const displayMessage = (input) => {
  console.log(`Displaying message: ${input}`);
  loh.innerHTML = `<h2>${input}</h2>`;
};
const endGame = () => {
  guess.value = "";
  guess.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  start.appendChild(p);
  play = false;
  newGame();
};

const newGame = () => {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    totGuess = 1;
    prev.innerHTML = ``;
    remaining.innerHTML = `${11 - totGuess}`;
    guess.removeAttribute("disabled");
    start.removeChild(p);
    play = true;
  });
};
