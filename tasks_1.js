///TASK 1
// Write a function to convert temperature from Celsius to Fahrenheit.

function tempConverter(celsius) {
  let Fahrenheit = celsius * 1.8 + 32;
  return Fahrenheit;
}
console.log(tempConverter(-55));

///TASK 2
// You are given an array of numbers. Count how many times the a number is repeated in the array.
// sample-input: numbers = [5,6,11,12,98, 5]
// find: 5
// output: 2
// sample-input: numbers = [5,6,11,12,98, 5]
// find: 25
// output: 0

function findNumber(array, num) {
  let count = 0;
  for (const number of array) {
    if (number === num) {
      count++;
    }
  }
  return count;
}
let numbers = [5, 6, 11, 12, 98, 5];
let find = 5;
console.log(findNumber(numbers, find));

///TASK 3
// Write a function to count the number of vowels in a string.

function findVowel(string) {
  let letters = string.toLowerCase().split("");
  let count = 0;
  for (let letter of letters) {
    // if (
    //   letter === "a" ||
    //   letter === "e" ||
    //   letter === "i" ||
    //   letter === "o" ||
    //   letter === "u"
    // )
    if ("aeiou".includes(letter)) {
      count++;
    }
  }
  return count;
}

let sentence = "I am learning Programming to become a programmer";
console.log(findVowel(sentence));

///TASK 4
// Write a function to find the longest word in a given string.
// sample-input: I am learning Programming to become a programmer
// sample-output: Programming

function longestWord(string2) {
  let words = string2.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

let sentence2 = "I am learning Programming to become a programmer";
console.log(longestWord(sentence2));

///TASK 5
// Generate a random number between 10 to 20.
// Math.random() * (max - min) + min

let randomNumber = Math.round(Math.random() * (20 - 10) + 10);
console.log(randomNumber);
