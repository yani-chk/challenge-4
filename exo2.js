const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number between 2 and 9: ", function(input) {
  let number = parseInt(input);

  if (number < 2 || number > 9) {
    console.log("Please enter a number between 2 and 9!");
  } else {
    console.log("Multiplication table for " + number + ":");
    for (let i = 1; i <= 10; i++) {
      console.log(number + " x " + i + " = " + (number * i));
    }
  }

  rl.close();
});
