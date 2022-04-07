var randomDice = function () {
  // generate a random decimal from 0 to 5 inclusive
  var randomDecimal = Math.random() * 6;
  // generate a random integer from 1 to 6 inclusive
  var randomInteger = Math.floor(randomDecimal);
  var randDR = randomInteger + 1;

  return randDR;
};

var lucky11Main = function (userGuess) {
  // Complete the Base: Lucky 11 exercise below with lucky11Main as the main function.
  // generate 2 dice numbers, dice1 and dice2
  var dice1 = randomDice();
  console.log(`dice 1 = ${dice1}`);
  var dice2 = randomDice();
  console.log(`dice 2 = ${dice2}`);
  // set default losing message
  var myOutputValue = "Better luck next time://";
  // if userGuess matches dice1 or dice2, show winning message instead
  if (userGuess == dice1 || userGuess == dice2) {
    myOutputValue = `Congratulations!! The dicerolls are ${dice1} and ${dice2}.`;
  }

  return myOutputValue;
};

var hawkerFoodCategorisationMain = function (hawkerDish) {
  // Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.
  console.log("hello");
  var outputValue = "something";
  if (
    hawkerDish == "nasi lemak" ||
    hawkerDish == "chicken rice" ||
    hawkerDish == "bak kut teh"
  ) {
    outputValue = "rice";
  } else if (hawkerDish == "hokkien mee" || hawkerDish == "laksa") {
    outputValue = "noodle";
  } else {
    outputValue = "other";
  }
  return outputValue;
};

var digitGenerator = function () {
  var randomDecimal = Math.random() * 9;
  var randomInteger = Math.floor(randomDecimal);
  var randomDigit = randomInteger + 1;
  return randomDigit;
};

var fourDSingleDigitMain = function (input) {
  // Complete the Comfortable: 4D with Single-Digit Comparison exercise below with fourDSingleDigitMain as the main function.
  // generate 4 random digits.
  var randomDigit1 = digitGenerator();
  var randomDigit2 = digitGenerator();
  var randomDigit3 = digitGenerator();
  var randomDigit4 = digitGenerator();
  // if input digit matches with any of the 4 digits generated, show winning message.
  if (
    input == randomDigit1 ||
    input == randomDigit2 ||
    input == randomDigit3 ||
    input == randomDigit4
  ) {
    var myOutputValue = `Congratulations! The winning digits are ${randomDigit1}, ${randomDigit2}, ${randomDigit3}, ${randomDigit4}`;
  }
  // otherwise, show losing message.
  else {
    myOutputValue = "Better luck next time";
  }
  return myOutputValue;
};

var randDishNumber = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var numberGenerated = randomInteger + 1;
  return numberGenerated;
};

var hawkerFoodRandomnessMain = function (dishName) {
  // Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.
  // generate a random number from 1 to 6 inclusive
  var randDish = randDishNumber();
  // var randDish = 6;
  console.log(`random number generated = ${randDish}.`);
  if (randDish == 1) {
    var dishServed = "chicken rice";
  }
  if (randDish == 2) {
    dishServed = "roti prata";
  }
  if (randDish == 3) {
    dishServed = "nasi lemak";
  }
  if (randDish == 4) {
    dishServed = "hokkien mee";
  }
  if (randDish == 5) {
    dishServed = "bak kut teh";
  }
  if (randDish == 6) {
    dishServed = "laksa";
  }
  console.log(`The dish served by uncle is ${dishServed}.`);

  if (dishName == dishServed) {
    var myOutputValue = `Congratulations! Enjoy your free ${dishServed}!`;
  } else {
    myOutputValue = `Better luck next time://`;
  }
  return myOutputValue;
};

var fourDWinningRangeMain = function (userGuess) {
  // Complete the More Comfortable: 4D with Winning Range exercise below with fourDWinningRangeMain as the main function.
  // generate random 4 digit number (1000 =< x <= 10000)
  var random4D = Math.floor(1000 + Math.random() * 9000);
  // var random4D = 5000;
  console.log(`The winning 4D is ${random4D}.`);
  // if user Guess is within 1000 (above or below) of the winning number, output winning message
  if (Math.abs(userGuess - random4D) < 1000 && userGuess != random4D) {
    var myOutputValue = `Congratulations! Your guess lies within 1000 of the winning 4D number that is ${random4D}.`;
  }
  // else, output losing message
  else if (userGuess == random4D) {
    myOutputValue = `WOW, you made an exact guess! Hmm...are you sure you didn't cheat?`;
  } else {
    myOutputValue = `Your guess was too far off. Better luck next time!`;
  }
  return myOutputValue;
};

var hawkerFoodOmakaseMain = function (customerOrder) {
  // if user inputs 'rice', uncle will choose 2 out of the 3 rice dishes to cook --- chicken rice(1), nasi lemak(2), bak kut teh(3)
  if (customerOrder == "rice") {
    // generate 2 numbers from 0 to 3 inclusive
    while (true) {
      var randomRiceDish1 = Math.floor(Math.random() * 4);
      console.log(`Rice dish 1 == ${randomRiceDish1}`);
      var randomRiceDish2 = Math.floor(Math.random() * 4);
      console.log(`Rice dish 2 == ${randomRiceDish2}`);
      if (randomRiceDish1 - randomRiceDish2 != 0) break;
    }
    if (randomRiceDish1 == 1) {
      var randDishServed1 = "chicken rice";
    } else if (randomRiceDish1 == 2) {
      randDishServed1 = "nasi lemak";
    } else if (randomRiceDish1 == 3) {
      randDishServed1 = "bak kut teh";
    } else {
      randDishServed1 = "roti prata";
    }
    console.log(`RiceDish 1 == ${randDishServed1}`);

    if (randomRiceDish2 == 1) {
      var randDishServed2 = "chicken rice";
    } else if (randomRiceDish2 == 2) {
      randDishServed2 = "nasi lemak";
    } else if (randomRiceDish2 == 3) {
      randDishServed2 = "bak kut teh";
    } else {
      randDishServed2 = "roti prata";
    }
    console.log(`RiceDish 2 == ${randDishServed2}`);

    var myOutputValue = `Uncle will serve you ${randDishServed1} and ${randDishServed2}. Enjoy!`;

    if (randDishServed1 == "nasi lemak" || randDishServed2 == "nasi lemak") {
      myOutputValue += `<br>Sambal is provided:)`;
    }

    return myOutputValue;
  }

  // if the 2 numbers are the same, generate again until 2 different numbers are obtained.

  // if user inputs 'noodle', uncle will choose 2 out of the 3 noodle dishes to cook --- hokkien mee(4), laksa(5), beef hor fun(6)
  else if (customerOrder == "noodle") {
    // generate 2 numbers from 4 to 7 inclusive
    while (true) {
      var randomNoodleDish1 = Math.floor(4 + Math.random() * 4);
      // var randomNoodleDish1 = 4;
      // The above is a test for the scenario of duplicate dishes
      console.log(`Noodle dish 1 == ${randomNoodleDish1}`);
      var randomNoodleDish2 = Math.floor(4 + Math.random() * 4);
      // var randomNoodleDish2 = 4;
      // The above is a test for the scenario of duplicate dishes
      console.log(`Noodle dish 2 == ${randomNoodleDish2}`);
      if (randomNoodleDish1 - randomNoodleDish2 != 0) break;
    }
    if (randomNoodleDish1 == 4) {
      var randDishServed1 = "hokkien mee";
    } else if (randomNoodleDish1 == 5) {
      randDishServed1 = "laksa";
    } else if (randomNoodleDish1 == 6) {
      randDishServed1 = "beef hor fun";
    } else {
      randDishServed1 = "roti prata";
    }
    console.log(`NoodleDish 1 == ${randDishServed1}`);

    if (randomNoodleDish2 == 4) {
      var randDishServed2 = "hokkien mee";
    } else if (randomNoodleDish2 == 5) {
      randDishServed2 = "laksa";
    } else if (randomNoodleDish2 == 6) {
      randDishServed2 = "beef hor fun";
    } else {
      randDishServed2 = "roti prata";
    }
    console.log(`NooleDish 2 == ${randDishServed2}`);
  }
  var myOutputValue = `Uncle will serve you ${randDishServed1} and ${randDishServed2}. Enjoy!`;

  return myOutputValue;
};

// if 7 or 0 is generated, roti prata will be served as one of the dishes

// if nasi lemak(2) is served, include sambal in the output message
