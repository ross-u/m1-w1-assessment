// Write a function that returns the product of 2 numbers
function product(x, y) {
  //
  if (typeof x !== 'number' || typeof y !== 'number') return false;
  return x * y;
}

// Write a function that returns whether a given number is even

function isEven(num) {
  return num % 2 === 0;
}

// Return the biggest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a
  }
  return b;
}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  let maxNum;
  if (a > b && a > c) {
    maxNum = a;
  } else if (b > c && b > a) {
    maxNum = b;
  } else {
    maxNum = c;
  }
  return maxNum;
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let sumNumbers = 0;
  numbers.forEach(function (numb) {
    sumNumbers += numb;
  })
  return sumNumbers;
}

// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
  let biggestNum = 0;
  numbers.forEach(function (numb) {
    if (numb > biggestNum) {
      biggestNum = numb;
    }
  })
  return biggestNum;
}

// Return the longest string in an array
function longestString(strings) {
  let longestStr = "";
  strings.forEach(function (string) {
    if (string.length > longestStr.length) {
      longestStr = string;
    }
  })
  return longestStr;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  return wordsArr.indexOf(word) !== -1;
}

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  for (let i = 0; i < wordsArr.length; i++) {
    let uniqueTest = true;
    for (let j = (i + 1); j < wordsArr.length; j++) {
      if (wordsArr[j] === wordsArr[i]) {
        wordsArr[j] = wordsArr[wordsArr.length - 1];
        uniqueTest = false;
        break;
      }
    }
    if (uniqueTest) {
      return wordsArr[i]
    }
  }
  return false;
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return personObj.firstName + " " + personObj.lastName;
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let biggestNum = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] > biggestNum) {
        biggestNum = matrix[row][col];
      }
    }
  }
  return biggestNum;
}