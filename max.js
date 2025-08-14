const Dean = 56;
const Sal = 95;

if (Dean > Sal) {
  console.log("Dean will get the strawberry");
} else {
  console.log("Sal will get the strawberry");
}

// inside a function

function getMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
const max1 = getMax(56, 79);
const max2 = getMax(56, 98);
const ultimateMax = getMax(max1, max2);
console.log("Max of two is", ultimateMax);
