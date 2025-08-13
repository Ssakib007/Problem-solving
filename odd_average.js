/// create a function which will take an array as a parameter and will give the average of the odd numbers in the array

/// put the odd numbers in an array
/// add those numbers and get sum
/// determine the length of the array
/// divide sum by length

function oddAverage(numbers) {
  const odds = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      odds.push(number);
    }
  }
  let sum = 0;
  for (const number of odds) {
    sum = sum + number;
  }
  const count = odds.length;
  const avg = sum / count;
  console.log(sum, count);
  return avg;
}

const numbers = [42, 13, 58, 65, 81, 96, 7, 105];
const avg = oddAverage(numbers);
console.log("average of the odd number is:", avg);
