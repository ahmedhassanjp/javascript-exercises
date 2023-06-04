function convertToCelsius(degFah) {
  var resCel = ((degFah - 32) * 5/9);
  // +resCel
  return +resCel.toFixed(1);
}

function convertToFahrenheit(degCel) {
  var resFah = ((degCel * 9/5 + 32));
  // +resFah
  return +resFah.toFixed(1);
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
