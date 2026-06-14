const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

rl.question("Enter a string: ", function(input) {
  console.log("Number of vowels: " + countVowels(input));
  rl.close();
});
