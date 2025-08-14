const numbers = [65, 66, 68, 72, 60, 65, 66];

function getMax(numbers) {
  let max = Math.max(...numbers);
  return max;
}
const max = getMax(numbers);
console.log("Maximum number is ", max);

////.....................///

function getMin(numbers) {
  let min = Math.min(...numbers);
  return min;
}
const min = getMin(numbers);
console.log("minimum number is", min);
