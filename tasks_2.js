/// TASK  1
///Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
// console.log(Math.min(...heights2));

function lowestNumber(numbers) {
  let low = numbers[0];
  for (const number of numbers) {
    if (low > number) {
      low = number;
    }
  }
  return low;
}
const lowest = lowestNumber(heights2);
console.log(lowest, "is the lowest number");

/// TASK  2
// Find the friend with the smallest name.
const heights3 = ["rahim", "robin", "rafi", "ron", "rashed"];

function smallestName(names) {
  let smallest = heights3[0];
  for (const name of names) {
    if (smallest.length > name.length) {
      smallest = name;
    }
  }
  return smallest;
}
const small = smallestName(heights3);
console.log("Smallest name is", small);

/// TASK  3
///Your task is to calculate the total budget required to buy electronics:
//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget(
  laptopQuantity,
  tabletQuantity,
  mobileQuantity
) {
  const laptopPrice = 35000;
  const tabletPrice = 15000;
  const mobilePrice = 20000;

  let laptopTotalCost = laptopPrice * laptopQuantity;
  let tabletTotalCost = tabletPrice * tabletQuantity;
  let mobileTotalCost = mobilePrice * mobileQuantity;

  let totalCost = laptopTotalCost + tabletTotalCost + mobileTotalCost;
  return totalCost;
}
const cost = calculateElectronicsBudget(2, 3, 4);
console.log("total cost is ", cost);

/// TASK  4
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phones) {
  let totalCost = 0;
  for (const phone of phones) {
    totalCost = totalCost + phone.price;
  }
  const averageCost = totalCost / phones.length;
  return averageCost;
}
const average = findAveragePhonePrice(phones);
console.log("Average price of the phones are ", average.toFixed(2));

/// TASK  5
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function totalSalary(employees) {
  let total = 0;
  for (const employee of employees) {
    const currentSalary =
      employee.starting + employee.increment * employee.experience;
    total = total + currentSalary;
  }
  return total;
}
const total = totalSalary(employees);
console.log("Company total salary is ", total);
