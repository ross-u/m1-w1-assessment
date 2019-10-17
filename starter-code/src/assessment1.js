// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y
}

// Write a function that returns whether a given number is even

function isEven(num) {
  if (num % 2 == 0) {
    return true
  }
  return false
}

// Return the biggest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a
  }
  return b
}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a > b && a > c) {
    return a
  } else if (b > a && b > c) {
    return b
  } return c
}

// Calculate the sum of an array of numbers

function sumArray(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  let sum = 0;
  numbers.forEach(function (add){
    sum += add;
  }); 
  return sum
}

// Return the biggest number of a non-empty array

function maxOfArray(numbers) {
  if (!numbers.length) {
    return null;
  }
  let biggestNumber = 0;
  for (let array of numbers) {
    if (biggestNumber < number) biggestNumber = number;
  }
  return biggestNumber;
}

/* doesn't work. Don't really know why. */


// Return the longest string in an array
function longestString(strings) {
  if (!strings.length) {
    return null;
  }
let longestWord = "";
for (let word of strings) {
  if (longestWord.length < word.length) longestWord = word;
}
return longestWord;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  words.forEach(function(word) {
    if (uniques.indexOf(word) === -1) {
      return true
    }
    return false
  }
}

/* had no time to do the rest, and this last one doesn't work yet... */

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  //
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  //
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}
