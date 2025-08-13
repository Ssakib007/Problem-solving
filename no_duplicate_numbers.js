const numbers = [1, 5, 61, 61, 7, 5, 87, 7, 5, 81, 61];

function noDuplicate(number) {
  const unique = [];
  for (const number of numbers) {
    if (unique.includes(number) === false) {
      unique.push(number);
    }
  }
  return unique;
}
const uniqueArray = noDuplicate(numbers);
console.log(uniqueArray);
