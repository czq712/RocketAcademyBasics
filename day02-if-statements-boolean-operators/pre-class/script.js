var orangeJuiceMain = function (numGuest, glassesPerGuest) {
  // Attempt the Orange Juice Calculator exercise from the Functions II module below with orangeJuiceMain as the main function.
  var orangesPerGlass = 4;
  var numGlasses = numGuest * glassesPerGuest;
  var numOranges = numGlasses * orangesPerGlass;
  var myOutputValue = `${numOranges} oranges are needed`;
  return myOutputValue;
};

var paintMain = function (pricePerLitre, numRooms, numCoatsPerArea) {
  // Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.
  var areaPerRoom = 3 * 3;
  var numCoatsPerArea = 2;
  var areaToPaint = areaPerRoom * numRooms * numCoatsPerArea;

  var areaPerLitre = 300;
  var litreUsed = areaToPaint / areaPerLitre;
  var cost = litreUsed * pricePerLitre;

  var myOutputValue = `Paint cost: $${cost}`;
  return myOutputValue;
};

var rollDice = function () {
  // Generate a decimal from 0 thru 6, inclusive of 0 and exclusive of 6
  var randomDecimal = Math.random() * 6;

  // use the Math.floor operation to remove the decimal
  // you will then get an integer from 0 to 5, inclusive of 0 and 5.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 thru 6, inclusive of 6:)
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

var randomDiceMain = function (input) {
  // Generate a random dice number
  var randomDiceNumber1 = rollDice((rigged = true));
  var randomDiceNumber2 = rollDice((rigged = true));

  // default output message tells user the two dice rolls.
  var myOutputValue = `You just rolled a ${randomDiceNumber1} and ${randomDiceNumber2}.`;

  // define variables for the 3 conditions
  var dice1Matched = input == randomDiceNumber1;
  var dice2Matched = input == randomDiceNumber2;

  // condition for snake eyes -- double '1'
  var gotSnakeEyes = randomDiceNumber1 == 1 && randomDiceNumber2 == 1;

  // If input value matches randomDiceNumber1 AND randomDiceNumber2 AND there are not snake eyes, output += 'you win!'

  if (dice1Matched && dice2Matched && !gotSnakeEyes) {
    myOutputValue += `You win!`;
  } else {
    myOutputValue += `You Lose!`;
  }
  return myOutputValue;
};

var secretPhraseMain = function (input) {
  // Attempt the Secret Phrase exercise from the If, Else, Else If module below with secretPhraseMain as the main function.
  var myOutputValue = "hello world";
  // if user enters any of the 3 secret phrases -- 'neat noodles', 'awesome ayam', or 'delicious dumplings', change output message
  if (
    input == "neat noodles" ||
    input == "awesome ayam" ||
    input == "delicious dumplings"
  ) {
    myOutputValue = "hey sexyy";
  }
  return myOutputValue;
};

var rollDice = function (rigged = false) {
  // rig the dice to return 6 in debug mode
  if (rigged) {
    console.log(`dice has been rigged and will return 6`);
    return 6;
  }

  // produce a float between 0 and 7
  var randomFloat = Math.random() * 7;
  // convert to integer from 1 to 6 inclusive
  var randomInteger = Math.floor(randomFloat);

  return randomInteger;
};

var twiceGuessMain = function (input) {
  // Attempt the Twice the Guess exercise from the If, Else, Else If module below with twiceGuessMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
