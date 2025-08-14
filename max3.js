const jim = 56;
const tim = 89;
const kim = 68;

function maxOfThree(num1, num2, num3) {
  if (jim > tim && jim > kim) {
    return { name: "jim", value: 56 };
  } else if (tim > jim && tim > kim) {
    return { name: "tim", value: 89 };
  } else {
    return { name: "kim", value: 68 };
  }
}
const result = maxOfThree(jim, tim, kim);
console.log(result.name, "is the ultimate boss with value", result.value);

// const max = Math.max();
// console.log("Max using Math.max", max);
