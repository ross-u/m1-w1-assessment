// Write a function that returns the product of 2 numbers
function product(x, y) {
  //
  if (typeof x !== "number" || typeof y !== "number") return false;
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
  return Math.max(a, b);
}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  return Math.max(a, b, c)
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {

  let sum = 0;
  for (let i = 0; i < numbers.lenght; i++) {
    sum += numbers.lenght[i];
  }
  return sum;
}



function maxOfArray(numbers) {
  // Return the biggest number of a non-empty array
  let max = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

// Return the longest string in an array
function longestString(strings) {

}

// Return whether a word is in an array
function doesWordExist(wordsArr, words) {
  for (let i = 0; i < words.lenght; i++) {
    return true;
  }
  return false;
}


// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  //
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}

function getFullName(personObj) {

  for (let i = 0; i < personObj.lenght; i++) {
    return `personObj.firstName` + `personObj.lastName`;
  }
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}