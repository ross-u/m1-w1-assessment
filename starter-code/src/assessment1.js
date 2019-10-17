// Write a function that returns the product of 2 numbers
function product(x, y) {
  let prod = x * y;
  return prod;
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
  let max = Math.max(a, b);
  return max;
}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  let max = Math.max(a, b, c);
  return max;
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
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
  let maxStr = 0; // strings[0].length should work too, but then it fails the test on Jasmine
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > maxStr) {
      maxStr = strings[i];
    }
  }
  return maxStr;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (wordsArr.includes(word)) {
    return true;
  }
  return false;
}

// Finding the first non-duplicate word in an array 
// doesn´t work ¯\_(ツ)_/¯
function findUnique(wordsArr) {
  let headElement;
  for (let i = 0; i < wordsArr.length; i++) {
    headElement = wordsArr[i];
    if (wordsArr.splice(i, 1).indexOf(headElement) != -1) {
      continue;
    }
  }
  return headElement;
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  let fullName = "" + personObj.firstName + " " + personObj.lastName;
  return fullName;
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let max = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > max) {
        max = matrix[i][j];
      }
    }
  }
  return max;
}