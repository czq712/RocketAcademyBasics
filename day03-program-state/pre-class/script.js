// define the rollDice function in global scope
var rollDice = function (rigged = false) {
  if (rigged) {
    console.log(`The dice has been rigged to always roll 6`);
    return 6;
  }

  var randomInteger = Math.floor(Math.random() * 6) + 1;

  console.log(`You rolled a ${randomInteger}`);

  return randomInteger;
};

// initial bankRoll state
var bankRoll = 10;

var introScopeMain = function (input) {
  var randomDiceNumber = rollDice((rigged = true));

  var myOutputValue = "you lose. current bank roll: " + bankRoll;

  // change bankRoll state if the dice matches the randomDiceNumber
  if (randomDiceNumber == input) {
    bankRoll = bankRoll + 1;

    myOutputValue = "you win. current bank roll: " + bankRoll;
  }

  return myOutputValue;
};

var appSetupMain = function (input) {
  // Attempt the Base: App Setup exercise from the Program Lifecycle and State module below with appSetupMain as the main function.
  var randomDiceNumber = rollDice();

  var myOutputValue = "you lose";

  if (randomDiceNumber == input) {
    myOutputValue = "you win";
  }

  return myOutputValue;
};

// define a function that recalls previous roll
var lastRoll = 0;
var getPrevRollInfo = function () {
  if (lastRoll == 0) {
    return `This is your first roll`;
  }

  return `Your last roll was ${lastRoll}`;
};

var lastRollMain = function (input) {
  var randomDiceNumber = rollDice((rigged = true));
  // set a function that returns a sting containing previous roll info
  // lastRoll = randomDiceNumber; (wrong order -- this line needs to come after the getPrevRollInfo fn is called)
  var prevRollInfo = getPrevRollInfo();
  lastRoll = randomDiceNumber;
  var myOutputValue =
    prevRollInfo +
    ". You just rolled a " +
    randomDiceNumber +
    ". You guessed " +
    input +
    ".";

  if (randomDiceNumber === input) {
    myOutputValue += "You win!";
  } else {
    myOutputValue += "You lose!";
  }

  return myOutputValue;
};

// define variables for numW and numL counters with default values of 0
var numW = 0;
var numPlayed = 0;
// define a function that obtains the win pct
var getWinPct = function () {
  var winRate = Math.floor((numW / numPlayed) * 100);
  return "You win " + winRate + "% of the time.";
};

var winLossMain = function (input) {
  // Change user input from a string to a number; then, assign it to a variable
  var userGuess = Number(input);
  // validate input -- only guesses from 1 to 6 are valid
  if (userGuess > 6 || userGuess < 1) {
    return "Please enter a number from 1 to 6";
  }
  var randomDiceNumber = rollDice((rigged = true));
  // if userGuess = dice number rolled, add 1 to numW, 1 to numPlayed, then display winning message including calculated win pct.
  if (userGuess === randomDiceNumber) {
    numW = numW + 1;
    console.log(`numW == ${numW}`);
    numPlayed = numPlayed + 1;
    console.log(`numPlayed == ${numPlayed}`);
    var myOutputValue =
      getWinPct() +
      `You rolled a ${randomDiceNumber} and you guessed ${userGuess}. You win!`;
  } else {
    numPlayed = numPlayed + 1;
    console.log(`numW = ${numW}`);
    console.log(`numPlayed = ${numPlayed}`);
    myOutputValue =
      getWinPct() +
      `You rolled a ${randomDiceNumber} and you guessed ${userGuess}. You Lose!`;
  }

  return myOutputValue;
};

var mostRolledMain = function (input) {
  // Attempt the More Comfortable: Most Rolled exercise from the Program Lifecycle and State module below with mostRolledMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

// initial point counter
var pointCount = 0;

var guessingMain = function (input) {
  // Attempt the More Comfortable: Guessing exercise from the Program Lifecycle and State module below with guessingMain as the main function.
  var randomDiceNumber = rollDice((rigged = true));

  var myOutputValue = "you lose. current points: " + pointCount;

  // if player guess is off by 1 they win 1 point. If the player guess is exact they win 2 points
  var doesPlayerGet1 =
    randomDiceNumber + 1 === input || randomDiceNumber - 1 === input;

  var doesPlayerGet2 = randomDiceNumber === input;

  if ((doesPlayerGet2 = true)) {
    pointCount = pointCount + 2;

    myOutputValue = "An exact guess! current points: " + pointCount;
  } else if ((doesPlayerGet1 = true)) {
    pointCount = pointCount + 1;

    myOutputValue = "you win. current points: " + pointCount;
  }

  return myOutputValue;
};

var advancedGuessingMain = function (input) {
  // Attempt the More Comfortable: Advanced Guessing exercise from the Program Lifecycle and State module below with advancedGuessingMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var followAlongMain = function (input) {
  // Attempt the Follow Along exercise from the Program State for Game Modes module below with followAlongMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var redModeMain = function (input) {
  // Attempt the Red Mode exercise from the Program State for Game Modes module below with redModeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
