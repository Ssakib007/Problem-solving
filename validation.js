function multiply(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Please provide a number";
  }
  const multiply = num1 * num2;
  return multiply;
}

const result = multiply("six", "seven");
console.log(result);

function fullname(first, second) {
  if (typeof first !== "string") {
    return "first name should be a string";
  } else if (typeof second !== "string") {
    return "second name should be a string";
  }
  const full = first + " " + second;
  return full;
}
const full = fullname(5, 7);
console.log(full);

function getPrice(product) {
  if (typeof product !== "object") {
    return "please provide an object";
  }
  const price = product.price;
  return price;
}

//const price = getPrice({ name: "itching rod", price: 35, color: "blue" });
const price = getPrice(5);
console.log(price);

function getSecond(numbers) {
  if (Array.isArray(numbers) === false) {
    return "please provide an array";
  }
  const second = numbers[1];
  return second;
}

const second = getSecond(25);
console.log(second);
