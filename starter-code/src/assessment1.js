// Write a function that returns the product of 2 numbers
function product(x, y) {
  //
  if (typeof x !== 'number' || typeof y !== 'number') return false;
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
  if (a > b) {
    return a;
  }
  return b;
}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  //
  let max = Math.max(a, b, c);
  return max;
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  //
  let sum = 0;
  numbers.forEach(function (arr) {
    sum += arr;
  });
  return sum;
}

// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
  let max = 0;
  numbers.forEach(function (num) {
    if (max < num) {
      max = num;
    }
  });
  return max;

}

// Return the longest string in an array
function longestString(strings) {
  //
  let long = "";
  strings.forEach(function (word) {
    if (long.length < word.length) {
      long = word;
    }
  })
  return long;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  //
  let array = [];
  wordsArr.forEach(function (element) {
    if (element === word) {
      array.push(element);
    }
  });
  return !!array.length;
}

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  //
  let array = [];
  // iterate over words
  wordsArr.forEach(function (element) {
    // if word does not exist in the
    if (array.indexOf(element) === -1) {
      // push to array
      array.push(element);
    }
  });
  return array;
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  //
  return `${personObj.firstName} ${personObj.lastName}`
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //

}