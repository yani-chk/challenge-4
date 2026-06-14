const values = [3, 11, 7, 2, 9, 10];

//Sum
let sum = 0;
for (let i = 0; i < values.length; i++) {
  sum = sum + values[i];
}
console.log("Sum: " + sum);

//Average 
function calculateAverage(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total = total + array[i];
  }
  return total / array.length;
}
console.log("Average: " + calculateAverage(values));

//Max n min
function getMaxAndMin(array) {
  let max = array[0];
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
    if (array[i] < min) {
      min = array[i];
    }
  }
  return { max: max, min: min };
}

let result = getMaxAndMin(values);
console.log("Maximum: " + result.max);
console.log("Minimum: " + result.min);
