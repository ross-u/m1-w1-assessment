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
  let array = [];
  let maxNumber = 0;
  array.push(a, b, c);

  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxNumber) {
      maxNumber = array[i];
    }
  }

  return maxNumber;
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
  let maxNumber = 0;

  if (!numbers.length) {
    return null;
  }

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }

  return maxNumber;
}

// Return the longest string in an array
function longestString(strings) {
  let longestString = "";

  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > longestString.length) {
      longestString = strings[i];
    }
  }

  return longestString;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i] === word) {
      return true;
    }
  }

  return false;
}

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  if (!wordsArr.length) {
    return false;
  }

  for (let i = 0; i < wordsArr.length; i++) {
    if (i === wordsArr.lastIndexOf(wordsArr[i])) {
      return wordsArr[i];
    }
  }
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`;
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  console.log(matrix);
  let biggestNumber = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i][j] > biggestNumber) {
        biggestNumber = matrix[i][j];
      }
    }
  }

  return biggestNumber;
}
