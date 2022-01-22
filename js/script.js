const shownLetters = document.querySelector(".guessed-letters");
const buttonGuess = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuess = document.querySelector(".remaining");
const span = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again");
let word = "magnolia";
const guessedLetters = [];
let remainingGuesses = 8;

const getWord = async function () {
  const wordRequest = await fetch(
    "https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt"
  );
  const wordsRequested = await wordRequest.text();
  const wordArray = wordsRequested.split("\n");
  console.log(wordArray);
  const randomIndex = Math.floor(Math.random() * wordArray.length);
  word = wordArray[randomIndex].trim();
  lettersUnkown(word);
};

getWord();

// Placeholders for the words with ● //
const lettersUnkown = function (word) {
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
  message.innerText = "";
  const guess = letterInput.value;
  const goodGuess = inputValidation(guess);
  if (goodGuess) {
    makeGuess(guess);
  }
  letterInput.value = "";
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
  } else {
    return guess;
  }
};

// Function to capture input //

const makeGuess = function (guess) {
  guess = guess.toUpperCase();
  if (guessedLetters.includes(guess)) {
    message.innerText = "You already guessed that letter, try again!";
  } else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
    lettersGuessed();
    remaining(guess);
    updatedWord(guessedLetters);
  }
};

// Function to show the Guessed Letters //

const lettersGuessed = function () {
  shownLetters.innerHTML = "";
  for (const letter of guessedLetters) {
    const li = document.createElement("li");
    li.innerText = letter;
    shownLetters.append(li);
  }
};

// Function to Update the word in progress //

const updatedWord = function (guessedLetters) {
  const wordUpper = word.toUpperCase();
  const wordArray = wordUpper.split("");
  const wordReveal = [];
  for (const letter of wordArray) {
    if (guessedLetters.includes(letter)) {
      wordReveal.push(letter.toUpperCase());
    } else {
      wordReveal.push("●");
    }
    wordInProgress.innerText = wordReveal.join("");
  }
  successfullGuess();
};

// Function to count guesses remaining //

const remaining = function (guess) {
  const upperWord = word.toUpperCase(); // why does this new var???//
  if (upperWord.includes(guess)) {
    message.innerText = `Good guess, the word has the letter ${guess}`;
  } else {
    remainingGuesses -= 1;
    message.innerText = `The word doesn't include ${guess}`;
  }
  if (remainingGuesses === 0) {
    message.innerHTML = `Game over! the word was <span class="highlight">${word}</span>.`;
  } else if (remainingGuesses === 1) {
    span.innerText = `${remainingGuesses} guess`;
  } else {
    span.innerText = `${remainingGuesses} guesses`;
  }
};

// Function to check if the player won //

const successfullGuess = function () {
  if (wordInProgress.innerText === word.toUpperCase()) {
    message.classList.add("win");
    message.innerHTML = `
      <p class="highlight">You guessed correct the word! Congrats!</p>
      `;
  }
};
