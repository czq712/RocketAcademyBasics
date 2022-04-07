// define global variable to record number of correct guesses and how many more correct guesses needed to win
var numCorrectGuesses = 0;
var numGuessesNeeded = 2;

var randWord = "";

// define function to generate random word
var generateWord = function (rigged = false) {
  if (rigged) {
    randWord = "banana";
    console.log(`This game is now rigged to always give banana`);
    return randWord;
  } else {
    var randNumber = Math.floor(Math.random() * 3);
    if (randNumber == 0) {
      randWord = "banana";
    } else if (randNumber == 1) {
      randWord = "chisel";
    } else {
      randWord = "faucet";
    }
  }
  return randWord;
};

//
var secretWordBaseMain = function (input) {
  // call generateWord fn
  var computerWord = generateWord();
  // set default output
  var myOutputValue = "";
  // if input matches randWord, add 1 to numCorrectGuesses
  if (input === randWord) {
    numCorrectGuesses = numCorrectGuesses + 1;
    numGuessesNeeded = numGuessesNeeded - 1;
    console.log(`numCorrectGuesses == ${numCorrectGuesses}`);
    console.log(`numGuessesNeeded == ${numGuessesNeeded}`);

    myOutputValue = `You guessed ${input}. The secret word is ${computerWord}. Great job! ${numGuessesNeeded} more correct guesses to go!`;
  }
  // if input does not match randWord, output losing message
  else {
    console.log(`numCorrectGuesses == ${numCorrectGuesses}`);
    console.log(`numGuessesNeeded == ${numGuessesNeeded}`);

    myOutputValue = `You guessed ${input}. The secret word is ${computerWord}. Try again. ${numGuessesNeeded} more correct guesses to go!`;
  }

  // if numCorrectGuesses == 2, output winning message
  if (numCorrectGuesses == 2) {
    myOutputValue = `You win the game!`;
  }

  return myOutputValue;
};

var secretWordTwiceRowMain = function (input) {
  // call generateWord fn
  var computerWord = generateWord((rigged = true));
  // set default output
  var myOutputValue = "";
  // if input matches randWord, add 1 to numCorrectGuesses
  if (input === randWord) {
    numCorrectGuesses = numCorrectGuesses + 1;
    numGuessesNeeded = numGuessesNeeded - 1;
    console.log(`numCorrectGuesses == ${numCorrectGuesses}`);
    console.log(`numGuessesNeeded == ${numGuessesNeeded}`);

    myOutputValue = `You guessed ${input}. The secret word is ${computerWord}. Great job! ${numGuessesNeeded} more correct guesses to go!`;
  }
  // if input does not match randWord, output losing message
  else {
    numGuessesNeeded = 2;
    numCorrectGuesses = numCorrectGuesses - 1;

    if (numCorrectGuesses < 0) {
      numCorrectGuesses = 0;
    }
    console.log(`numCorrectGuesses == ${numCorrectGuesses}`);
    console.log(`numGuessesNeeded == ${numGuessesNeeded}`);

    myOutputValue = `You guessed ${input}. The secret word is ${computerWord}. Try again. ${numGuessesNeeded} more correct guesses to go!`;
  }
  return myOutputValue;
};
// function to generate number of correct guesses needed per round (random number from 2 - 4)
var correctGuesses = function () {
  var randomNumber = Math.floor(Math.random() * 3 + 2);
  return randomNumber;
};

var guesses = 0;
var guessesToWin = correctGuesses();

var secretWordXRowMain = function (input) {
  var computerWord = generateWord();
  // set default output
  var myOutputValue = "";
  // if input matches randWord, add 1 to numCorrectGuesses
  if (input == computerWord) {
    guesses = guesses + 1;
    myOutputValue = `You guessed ${input}. The secret word is ${computerWord}. Great job! ${numGuessesNeeded} more correct guesses to go!`;
  }
  return myOutputValue;
};

var diceWithinMain = function (input) {
  // Complete the More Comfortable: Dice Within exercise below with diceWithinMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceWithin2DiceMain = function (input) {
  // Complete the More Comfortable: Dice Within with 2 Dice exercise below with diceWithin2DiceMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var dice4DMain = function (input) {
  // Complete the More Comfortable: Dice 4D exercise below with dice4DeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordTwice2Main = function (input) {
  // Complete the More Comfortable: Secret Word Twice in a Row 2 exercise below with secretWordTwice2Main as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
