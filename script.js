var main = function (input) {
  var myOutputValue = "Hello World";
  // if input is our secret password, print another message by changing the value of myOutputValue
  if (input == "HeresJohnny") {
    myOutputValue = "You said the secret password!!";
  } else {
    myOutputValue = "INTRUDER!!";
  }
  return myOutputValue;
};
