const Phones = [
  { name: "samsung", price: 20000, camera: "12mp", color: "black" },
  { name: "Xiaomi", price: 18000, camera: "12mp", color: "black" },
  { name: "Oppo", price: 30000, camera: "12mp", color: "black" },
  { name: "Iphone", price: 100000, camera: "12mp", color: "black" },
  { name: "Walton", price: 31000, camera: "12mp", color: "black" },
  { name: "HTC", price: 27000, camera: "12mp", color: "black" },
];

function getCheapestPhone(Phones) {
  let min = Phones[0];
  for (const phone of Phones) {
    if (phone.price < min.price) {
      min = phone;
    }
  }
  return min;
}

const cheap = getCheapestPhone(Phones);
console.log("Cheapest Phone is", cheap);
