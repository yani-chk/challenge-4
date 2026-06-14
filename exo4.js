const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function celsiusToFahrenheit(celsius) {
 return celsius * 9 / 5 + 32;
}


function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 9 / 5;
}

rl.question("Enter a temperature in Celsius: ", function(input) {
  let celsius = parseFloat(input);

  let fahrenheit = celsiusToFahrenheit(celsius);
  console.log(celsius + "°C = " + fahrenheit.toFixed(2) + "°F");

  let backToCelsius = fahrenheitToCelsius(fahrenheit);
  console.log(fahrenheit.toFixed(2) + "°F = " + backToCelsius.toFixed(2) + "°C");

  rl.close();
});
