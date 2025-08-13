/// array has some duplicate elements

const foodEater = ["sam", "san", "san", "tan", "sam", "nan", "can"];

function noDuplicate(array) {
  const unique = [];
  for (const item of array) {
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }
  return unique;
}

const uniqueArray = noDuplicate(foodEater);
console.log(uniqueArray);
