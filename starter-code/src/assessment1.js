// Write a function that returns the product of 2 numbers
function product(x, y) {
  //
  if (typeof x !== 'number' || typeof y !== 'number') return false;
  return x * y;
}

// Write a function that returns whether a given number is even

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

// Return the biggest of 2 numbers
function maxOfTwoNumbers(a, b) {
  const maxOfTwo = Math.max(a, b);
  return maxOfTwo;
}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  const maxOfThree = Math.max(a, b, c)
  return maxOfThree;
}

// Calculate the sum of an array of numbers
//const numberArray= [2, 5, 7, 12, 15];

function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
   }
   return sum;
  }

// Return the biggest number of a non-empty array
/* function maxOfArray(numbers) {
  let currentNum = numbers[i];
  let previousNum = currentNum - 1;
  let biggestNum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (currentNum > previousNum) {
      biggestNum = currentNum;
    }
  }
  return biggestNum;
} */

// Return the longest string in an array
/* longestString = ""
function longestString(strings) {
  strings.forEach(function(strings))
}
 */

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  let wordExists = wordsArr.includes(word);
  return wordExists;
}

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
 let fullName = `${personObj.firstName} + ${personObj.lastName}`;
 return fullName;
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}
