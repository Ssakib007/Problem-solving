const Phones = [
  { name: "samsung", price: 20000, camera: "12mp", color: "black" },
  { name: "Xiaomi", price: 18000, camera: "12mp", color: "black" },
  { name: "Oppo", price: 30000, camera: "12mp", color: "black" },
  { name: "Iphone", price: 100000, camera: "12mp", color: "black" },
  { name: "Walton", price: 31000, camera: "12mp", color: "black" },
  { name: "HTC", price: 27000, camera: "12mp", color: "black" },
];

function mostExpensive(Phones) {
  let expensive = Phones[0];
  for (const phone of Phones) {
    if (expensive.price < phone.price) {
      expensive = phone;
    }
  }
  return expensive;
}
const expensive = mostExpensive(Phones);
console.log("Most expensive phone is", expensive);
