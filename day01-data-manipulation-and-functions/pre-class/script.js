var main = function (input) {
  var pi = 3.14;
  var radius = 4;
  var area = pi * radius * radius;

  var myOutputValue =
    "Ball is Life. <br> The area is " + area + "<br>You input " + input;
  var additionalLog = "I like " + input + " too!";
  console.log(additionalLog);

  return myOutputValue;
};

var greetingMain = function (input) {
  // Attempt the Greeting Program exercise from the Our First Program module below with greetingMain as the main function.
  var myOutputValue =
    "Hello " +
    input +
    ", you look great today! " +
    input +
    " is a sexy ass name:)))";
  return myOutputValue;
};

var metricMain = function (input) {
  // Attempt the Metric Conversion Program exercise from the Our First Program module below with metricMain as the main function.
  var distanceInKm = input;
  var distanceInMiles = distanceInKm * 0.62;

  var myOutputValue =
    "Hi there! " +
    input +
    " kilometers is equal to " +
    distanceInMiles +
    " miles:)";
  return myOutputValue;
};

var functionsExampleMain = function (input) {
  // Attempt the Base: Run Example Code exercise from the Functions I module below with functionsExampleMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var trainSpeedMain = function (input) {
  // Attempt the Comfortable: Train Speed exercise from the Functions I module below with trainSpeedMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var clockMain = function (input) {
  // Attempt the More Comfortable: Clock exercise from the Functions I module below with clockMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
