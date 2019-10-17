// Write a function that returns the product of 2 numbers
function product(x, y) {
  //
  if (typeof x !== "number" || typeof y !== "number") return false;
  return x * y;
}

// Write a function that returns whether a given number is even

function isEven(num) {
  //
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

// Return the biggest of 2 numbers
function maxOfTwoNumbers(a, b) {
  //
  return a > b ? a : b;
}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  //
  return a > b && a > c ? a : b > c ? b : c;
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  //
  return numbers != "" ? numbers.reduce((a, b) => a + b) : 0;
}

// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
  //
  let biggest = 0;
  numbers.forEach(number => {
    if (biggest < number) {
      biggest = number;
    }
  });
  return biggest;
}

// Return the longest string in an array
function longestString(strings) {
  //
  let longest = "";
  strings.forEach(string => {
    if (longest < string.length) {
      longest = string;
    }
  });
  return longest;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  //
  let exist = false;
  wordsArr.forEach(arrWord => {
    if (arrWord === word) {
      exist = true;
    }
  });
  return exist;
}

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  //
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  //
  return `${personObj.firstName} ${personObj.lastName}`;
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
  let biggest = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let e = 0; e < matrix[i].length; e++) {
      if (matrix[i][e] > biggest) {
        biggest = matrix[i][e];
      }
    }
  }
  return biggest;
}
