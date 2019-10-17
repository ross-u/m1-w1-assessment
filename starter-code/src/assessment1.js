// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
}

// Write a function that returns whether a given number is even

function isEven(num) {
  return num % 2 === 0;
}

// Return the biggest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  }
}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  }
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
  let highestNumber = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > highestNumber) {
      highestNumber = numbers[i];
    }
  }
  return highestNumber;
}
// Return the longest string in an array
function longestString(strings) {
  let longestString = " ";
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > longestString.length)
      longestString = strings[i];
  }
  return longestString;
}

// Return whether a word is in an array
function doesWordExist(wordsArray, word) {
  if (wordsArray.includes(word)) {
    return true;
  } else {
    return false;
  }
}

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  let firstUniqueString = "";
  for (let i = 0; i < strings.length; i++) {
    if (wordsArr.includes(wordsArr[i])) {
      firstUniqueString = wordsArr[i];
      break;
    }
  }
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return personObj.firstName + " " + personObj.lastName
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let maxValue = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > maxValue) {
        maxValue = matrix[i][j];
      }
    }
  }
  return maxValue
}