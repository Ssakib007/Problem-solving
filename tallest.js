const heights = [65, 66, 68, 72, 60, 65, 66];

function getMax(numbers) {
  let max = heights[0];
  for (const number of numbers) {
    if (number > max) {
      max = number;
    }
  }
  return max;
}
const max = getMax(heights);
console.log("Max value is ", max);

///.....................///

const heights2 = [65, 66, 68, 72, 60, 65, 66];
function getMin(numbers) {
  let min = heights2[0];
  for (const number of numbers) {
    if (number < min) {
      min = number;
    }
  }
  return min;
}
const min = getMin(heights2);
console.log("Min value is", min);
