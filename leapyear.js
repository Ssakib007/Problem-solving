/// simple logic : year will be a leap year if the year is divisible by 4

function isLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}
const isLY = isLeapYear(2052);
console.log(isLY);

/// those year that is not divisible by 100 and if the year is divisible by 4, then it will be leap year.
//// if the year is divisible by 100 and also divisible by 400, its a leap year
/// else it is not a leap year

function isLeapYear2(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  } else if (year % 100 === 0 && year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
const isLY2 = isLeapYear2(2100);
const isLY3 = isLeapYear2(2400);
const isLY4 = isLeapYear2(1900);
const isLY5 = isLeapYear2(2052);
console.log(isLY2, isLY3, isLY4, isLY5);
