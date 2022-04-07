// set default game mode as - waiting for user name
var gameMode = "waiting for username";
var userName = "";

// define global variables for games won, games lost and total games played
var gamesPlayed = 0;
var gamesWon = 0;
var gamesLost = 0;
var gamesTied = 0;

// default message showing user's win loss record
defaultWinLoss = function () {
  return `Games Played == ${gamesPlayed}<br>Games Won == ${gamesWon}<br>Games Lost == ${gamesLost}<br>Games Tied == ${gamesTied}`;
};

// define aiChoose function that returns scissors, paper or stone for computer
var aiChoose = function () {
  var number = Math.floor(Math.random() * 3);
  if (number == 0) {
    return "scissors";
  } else if (number == 1) {
    return "paper";
  } else {
    return "stone";
  }
};

var main = function (input) {
  var myOutputValue = "";
  if (gameMode == "waiting for username") {
    userName = input;
    // change gamemode to SPS
    gameMode = "SPS";
    return `Hello ${userName}, nice to meet you. Let's play a game!<br>Please choose "scissors", "paper" or "stone" :))`;
  } else if (gameMode == "SPS") {
    // SPS logic
    // validate user input - only scissors, paper or stone allowed
    if (input !== "scissors" && input !== "paper" && input !== "stone") {
      return `Invalid input. Please enter 'scissors', 'paper' or 'stone'.`;
    }

    var computerChose = aiChoose();

    // tie
    if (input == computerChose) {
      gamesPlayed += 1;
      gamesTied += 1;
      myOutputValue =
        `${userName}: I choose ${input}!<br><br>Computer: I choose ${computerChose}!<br><br>It's a tie!<br>` +
        defaultWinLoss() +
        `<br><br>Play again?`;
    }
    // player beats computer
    if (
      (input == "scissors" && computerChose == "paper") ||
      (input == "paper" && computerChose == "stone") ||
      (input == "stone" && computerChose == "scissors")
    ) {
      gamesPlayed += 1;
      gamesWon += 1;
      myOutputValue =
        `${userName}: I choose ${input}!<br><br>Computer: I choose ${computerChose}!<br><br>Great job ${userName}, you beat the computer!!<br>` +
        defaultWinLoss() +
        `<br><br>Play again?`;
    }
    // player loses to computer
    if (
      (input === "scissors" && computerChose === "stone") ||
      (input === "paper" && computerChose === "scissors") ||
      (input === "stone" && computerChose === "paper")
    ) {
      gamesPlayed += 1;
      gamesLost += 1;
      myOutputValue =
        `${userName}: I choose ${input}!<br><br>Computer: I choose ${computerChose}!<br><br>You lose!!<br>` +
        defaultWinLoss() +
        `<br><br>Play again?`;
    }
    return myOutputValue;
  }
};
