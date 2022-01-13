const shownLetters = document.querySelector(".guessed-letters");
const buttonGuess = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuess = document.querySelector(".remaining");
const span = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again");
const word = "magnolia";
const guessedLetters = [];

// Placeholders for the words with ● //
const lettersUnkown = function () {
  const dotArray = [];
  for (const letter of word) {
    dotArray.push("●");
  }
  console.log(dotArray);
  wordInProgress.innerText = dotArray.join("");
};

lettersUnkown(word);

// Event listener for the button //

buttonGuess.addEventListener("click", function (e) {
  e.preventDefault();
  const guess = letterInput.value;
  console.log(inputValidation(guess));
  letterInput.value = "";
  inputValidation(guess);
});

// Create a Function to Check Player’s Input //

const inputValidation = function (guess) {
  const acceptedLetter = /[a-zA-Z]/;
  if (guess.length === 0) {
    message.innerText = "You need to add a letter!";
  } else if (guess.length > 1) {
    message.innerText = "Only add one letter!";
  } else if (guess != guess.match(acceptedLetter)) {
    message.innerText = "You need to add a letter, not number or symbol!";
  }
  return guess;
};

// Function to capture input //

const makeGuess = function (letter) {};
