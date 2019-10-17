// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
}

// Write a function that returns whether a given number is even

function isEven(num) {
  if (num % 2 == 0) {
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
  return Math.max(a, b, c);
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if (numbers.length == 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
  if (numbers.length == 0) {
    return 0;
  }
  let highest = "";
  for (let i = 0; i < numbers.length; i++) {
    if (highest < numbers[i]) {
      highest = numbers[i];
    } else {
      continue;
    }
  }
  return highest;
}

// Return the longest string in an array
function longestString(strings) {
  let longest = "";
  for (let i = 0; i < strings.length; i++) {
    if (longest.length < strings[i].length) {
      longest = strings[i];
    } else {
      continue;
    }
  }
  return longest;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (wordsArr.includes(word) === true) {
    return true;
  }
  return false;
}

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  if (wordsArr.length == 0) {
    return false;
  }
  let firstUnique = wordsArr.find(x => wordsArr.indexOf(x) === wordsArr.lastIndexOf(x));
  return firstUnique;
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return personObj.firstName + " " + personObj.lastName;
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let highestNum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (highestNum < matrix[i][j]) {
        highestNum = matrix[i][j];
      } else {
        continue;
      }
    }
  }
  return highestNum;
}