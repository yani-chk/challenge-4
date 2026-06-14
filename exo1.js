const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the raw price: ", function(rawPrice) {
  rawPrice = parseFloat(rawPrice);

  let finalPrice = rawPrice + (rawPrice * 18.5 / 100);

  console.log("Raw price: " + rawPrice);
  console.log("Final price with VAT (18.5%): " + finalPrice.toFixed(2));

  rl.close();
});
