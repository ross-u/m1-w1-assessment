// Write a function that returns the product of 2 numbers
let x = 6;
let y = 4;
function product(x, y) {
  z = x * y;
  return z;
}

// Write a function that returns whether a given number is even

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

// Return the biggest of 2 numbers
let a = 3;
let b = 6;
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else if (a < 0 && b < 0) {
    return 0;
  }
}

// Return the biggest of 3 numbers

function maxOfThreeNumbers(a, b, c) {}

// Calculate the sum of an array of numbers
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function sumArray(numbers) {
  if (!arr) {
    return 0;
  }
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray(arr));

// Return the biggest number of a non-empty array
let array2 = [23, 3, 26, 15, 11, 87];
function maxOfArray(numbers) {
  let counter = 0;
  if (!array2) {
    for (let i = 0; i < array2.length; i++) {
      if (arr[i] > counter) {
        counter += arr[i];
      }
    }
  }
  return counter;
}
console.log(maxOfArray(array2));

// Return the longest string in an array
let array3 = ["carrot", "cabbage", "rice", "cucumber"];
function longestString(strings) {
  array3.forEach(function() {
    let longestString = "";
    if (array3[i].length > longestString.length) {
      longestString = array3[i];
    }
    return longestString;
  });
  return longestString;
}
console.log(longestString(array3));

// Return whether a word is in an array
let wordsArr = ["black", "white", "red", "yellow"];
function doesWordExist(wordsArr, word) {
  for (const word in wordsArr) {
    if (word === "black") {
      return word;
    }
  }
  return word;
}

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}

function getFullName(personObj) {
  let obj = {
    firstName: "Mike",
    lastName: "Till"
  };
  return `${obj.firstName} + ${obj.lastName}`;
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}
