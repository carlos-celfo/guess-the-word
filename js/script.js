const guessedLetters = document.querySelector(".guessed-letters");
const buttonGuess = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuess = document.querySelector(".remaining");
const span = document.querySelector("span");
const message = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again hide");
const word = "magnolia";

const lettersUnkown = function () {
  for (const letters of lettersUnkown) {
    wordInProgress.innerText = "●";
    lettersUnkown.push(`${letters}`); 
};

lettersUnkown(word.join(""));
