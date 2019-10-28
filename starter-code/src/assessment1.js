// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
}

// Write a function that returns whether a given number is even

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Return the biggest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  return Math.max(a,b,c);
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
  let highestNumber = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > highestNumber) {
      highestNumber = numbers[i];
    }
  }
  return highestNumber;
}

// Return the longest string in an array
function longestString(strings) {
  let result = '';
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > result.length) {
      result = strings[i];
    }
  }
  return result;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (wordsArr.includes(word) === true) {
    return true;
  } else {
    return false;
  }
}

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  //use for loop && if else 
  if (wordsArr.length === 0) {
    return false;
  } else if (wordsArr.length > 0) {
    
  }
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return personObj.firstName + ' ' + personObj.lastName;
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}
