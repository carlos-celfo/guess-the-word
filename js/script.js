const guessedLetters = document.querySelector(".guessed-letters");
const buttonGuess = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuess = document.querySelector(".remaining");
const span = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again");
const word = "magnolia";

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
  console.log(guess);
  letterInput.value = "";
});

// Create a Function to Check Player’s Input //

const inputValidation = function (letterInput) {
  const acceptedLetter = /[a-zA-Z]/;
  if () {
    
  }
};
