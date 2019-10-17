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
  return a > b ? a : b;
}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(num1, num2, num3) {
  return [num1, num2, num3].sort(function(a, b) {
    return b - a;
  })[0];
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let sum = 0;
  numbers.forEach(function(num) {
    sum += num;
  });
  return sum;
}

// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
  return numbers.sort(function(a, b) {
    return b - a;
  })[0];
}

// Return the longest string in an array
function longestString(strings) {
  return strings.sort(function(a, b) {
    return b.length - a.length;
  })[0];
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  return wordsArr.includes(word);
}

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  if (wordsArr.length < 1) {
    return false;
  }
  for (let word of wordsArr) {
    if (wordsArr.indexOf(word) === wordsArr.lastIndexOf(word)) {
      return word;
    }
  }
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`;
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let highestNum = -Infinity;
  matrix.forEach(function(array) {
    array.forEach(function(num) {
      if (num > highestNum) {
        highestNum = num;
      }
    });
  });
  return highestNum;
}
