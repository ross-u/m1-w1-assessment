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
  if (Math.max(a, b, c) === a) {
    return a;
  } else if (Math.max(a, b, c) === b) {
    return b;
  }
  return c;
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let sum = 0;
  numbers.forEach(function(number) {
    sum += number;
  });
  return sum;
}

// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
  let highestNum = 0;
  numbers.forEach(function(number) {
    if (number > highestNum) {
      highestNum = number;
    }
  });
  return highestNum;
}

// Return the longest string in an array
function longestString(strings) {
  let longestStr = "";
  strings.forEach(function(word) {
    if (word.length > longestStr.length) {
      longestStr = word;
    }
  });
  return longestStr;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  for (let i = 0; i < wordsArr.length; i++) {
    if (words.indexOf(wordsArr) === 0) {
      return true;
    }
    return false;
  }
}

// "Michael".indexOf("Hans","Klaus") // -1
// "Michael".indexOf("Michael","Klaus") // 0

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  let unique = "";
  if (wordsArr.length === 0) {
    return false;
  }
  wordsArr.forEach(function(element) {
    if (element.indexOf(wordsArr) === 0) {
      unique.push(element);
      return unique;
    }
  });
}
// if

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  let fullName = `${personObj.firstName} ${personObj.lastName}`;
  return fullName;
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  biggestNum = 0;
  numX = 0;
  numY = 0;
}
//
