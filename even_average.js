function evenAverage(numbers) {
  const even = [];
  for (const number of numbers) {
    if (number % 2 === 0) {
      even.push(number);
    }
  }
  let sum = 0;
  for (const number of even) {
    sum = sum + number;
  }
  let count = even.length;
  let avg = sum / count;
  console.log(sum, count);
  return avg;
}

const numbers = [42, 13, 58, 65, 81, 96, 7, 105];
console.log(evenAverage(numbers));
