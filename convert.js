/// 12 inch = 1 feet

function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}
const personHeight = inchToFeet(75);
console.log(personHeight);

function inchToFeet2(inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const inchRemaining = inch % 12;
  const result = feetNumber + " ft " + inchRemaining + " inch ";
  return result;
}

const personHeight2 = inchToFeet2(75);
console.log(personHeight2);

function mileToKilometer(mile) {
  const kilo = mile * 1.60934;
  return kilo;
}

function kilometerToMiles(kilo) {
  const mile = kilo * 0.21371;
  return mile;
}


