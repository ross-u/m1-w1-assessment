// Write a function that returns the product of 2 numbers
function product(x, y) {
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
  if (numbers.length === 0) {
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
  let biggest = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > biggest) {
      biggest = numbers[i];
    }
  }
  return biggest;
}

// Return the longest string in an array
function longestString(strings) {
  let longest = strings[0];
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > longest.length) {
      strings[i] = longest;
    }
  }
  return longest;
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
  let nonDup = wordsArr[0];
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i].includes(nonDup)) {
      continue;
    } else {
      nonDup = wordsArr[i];
    }
    return nonDup;
  }
  return false;
}


// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  let fullName = `${personObj.firstName} + " " + ${personObj.lastName}`;
  return fullName;
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}