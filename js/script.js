const guessedLetters = document.querySelector(".guessed-letters");
const buttonGuess = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuess = document.querySelector(".remaining");
const span = document.querySelector("span");
const message = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again hide");
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
