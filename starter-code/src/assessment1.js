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
  if (a > b) {
    return a;
  }
  return b;
}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  }
  return c;
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let x = 0;
  numbers.forEach(num => {
    x += num;
  });
  return x;
}

// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
  let biggestNum = 0;
  if (!numbers.length) {
    return null;
  }
  for (num of numbers) {
    if (num > biggestNum) {
      biggestNum = num;
    }
  }
  return biggestNum;
}

// Return the longest string in an array
function longestString(strings) {
  let ctrlString = "";
  for (string of strings) {
    if (string.length > ctrlString.length) {
      ctrlString = string;
    }
  }
  return ctrlString;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (wordsArr.includes(word)) {
    return true;
  }
  return false;
}

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  let uniqWords = [];
  if (!wordsArr.length) {
    return false;
  }
  wordsArr.forEach(word => {
    if (wordsArr.indexOf(word) < 0) {
      wordsArr.push(word);
    }
  });
  return uniqWords[0];
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`;
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    arr = Math.max(...matrix[i]);
  }
  const max = Math.max(...arr);
  return max;
}
