// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
}

// Write a function that returns whether a given number is even

function isEven(num) {
  return num % 2 === 0 ? true : false;
}

// Return the biggest of 2 numbers
function maxOfTwoNumbers(a, b) {
  return Math.max(a, b);
}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  return a > b ? Math.max(a, c) : Math.max(b, c);
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  return numbers.length === 0 ? 0 : numbers.reduce((a, b) => a + b);
}

// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
  let length = 0;
  numbers.forEach(element => {
    if (element > length) {
      length = element
    };
  });
  return length;
}

// Return the longest string in an array
function longestString(strings) {
  let longestString = "";
  strings.forEach(element => {
    if (element.length > longestString.length) {
      longestString = element
    };

  });
  return longestString;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  return wordsArr.includes(word) ? true : false;
}

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  if (wordsArr.length === 0) {
    return false
  }
  for (let element of wordsArr) {
    if (wordsArr.lastIndexOf(element) === wordsArr.indexOf(element)) {
      return element;
    }
  }
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let highestNum = 0;
  matrix.forEach(element => {
    element.forEach(number => {
      if (number > highestNum) {
        highestNum = number;
      }
    });
  });
  return highestNum
}