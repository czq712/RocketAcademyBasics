var fahrenheitToCelsiusMain = function (input) {
  // Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
  var temperatureInCelsius = input - (32 * 5) / 9;
  var myOutputValue = temperatureInCelsius;
  return myOutputValue;
};

var roadTripCostBaseMain = function (distanceInKm) {
  // Complete the Base: Road Trip Cost exercise below with roadTripCostBaseMain as the main function.
  //convert distance in Km to distance in miles
  var distanceInMiles = distanceInKm * 0.62;
  //calculate fuel needed for trip
  var fuelNeeded = distanceInMiles / 9;
  //calculate total cost
  var costOfTrip = fuelNeeded * 2.2;
  return costOfTrip;
};

var roadTripCostComfortableMain = function (distanceInKm) {
  // Complete the Comfortable: Road Trip Cost exercise below with roadTripCostComfortableMain as the main function.
  //convert to distance to miles
  var distanceInMiles = distanceInKm * 0.62;
  //calculate the fuel needed for ferrari and train
  var fuelNeeded = distanceInMiles / 9;
  //calculate the respective costs
  var costForFerrari = fuelNeeded * 2.2;
  var costForTrain = fuelNeeded * 2;
  //calculate the difference in costs
  var savings = costForFerrari - costForTrain;
  return savings;
};

var iceMachineMain = function (numberOfGuests) {
  // Complete the More Comfortable: Ice Machine exercise below with iceMachineMain as the main function.
  //calculate the number of ice cubes
  var iceCubes = numberOfGuests * 2 * 4;
  //calculate total ice mass
  var iceMass = iceCubes * 1.5;
  //convert ice mass from grams to pounds
  var massInPounds = iceMass / 454;
  //output duration ice machine needs to run
  var runningDuration = (massInPounds / 5) * 60;

  return runningDuration;
};

var beerOrderMain = function (input) {
  // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.
  var x = input * 2;
  var y = x * 90;
  var z = y / 124;
  return z;
};

var cellularDataMain = function (cellularDataUsage) {
  // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.
  //case 1: user uses less than 50 GB
  //case 2: user uses more than 50 GB - purchase additional 50GB plan

  //output the cost per GB of data used

  if (cellularDataUsage <= 50) {
    var costPerData = 19.99 / cellularDataUsage;
  } else {
    var costPerData = (19.99 * 2) / cellularDataUsage;
  }
  return costPerData;
};
