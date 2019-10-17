// Write a function that returns the product of 2 numbers
function product(x, y) {
  //
  if (typeof x !== "number" || typeof y !== "number") return false;
  return x * y;
}

// Write a function that returns whether a given number is even

function isEven(num) {
  if (num % 2 === 0) return true;
  return false;
}

// Return the biggest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) return a;
  else if (a < b) return b;
}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a > b && a > c) return a;
  else if (b > c && b > a) return b;
  return c;
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}

// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
  return Math.max.apply(null, numbers);
}

// Return the longest string in an array
function longestString(strings) {
  let word = "";
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > word.length) {
      word = strings[i];
    }
  }
  return word;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (wordsArr.includes(word)) return true;
  return false;
}

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  return (
    wordsArr.filter(function(value) {
      return wordsArr.indexOf(value) === wordsArr.lastIndexOf(value);
    })[0] || -1
  );
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return personObj.firstName + " " + personObj.lastName;
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let biggestNumber = [0][0];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > biggestNumber) {
        biggestNumber = matrix[i][j];
      }
    }
  }
  return biggestNumber;
}
