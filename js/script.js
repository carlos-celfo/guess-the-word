const guessedLetters = document.querySelector(".guessed-letters");
const buttonGuess = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuess = document.querySelector(".remaining");
const span = document.querySelector("span");
const message = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again hide");
const word = ["m", "a", "g", "n", "o", "l", "i", "a"];

const lettersUnkown = function () {
  wordInProgress.innerText = "●";
};

lettersUnkown(word.join(""));
