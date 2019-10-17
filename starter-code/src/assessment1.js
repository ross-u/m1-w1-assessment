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
  } else {
    return b;
  }
}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  let maxValue = Math.max(a, b, c);
  return maxValue;
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    count += numbers[i];
  }
  return count;
}

// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
  var maxValue = Math.max.apply(null, numbers);
  return maxValue;
}

// Return the longest string in an array
function longestString(strings) {
  let numberCounter = [];

  for (i = 0; i < strings.length; i++) {
    numberCounter.push(strings[i].length);
    let wordLength = Math.max.apply(null, numberCounter);
    if (wordLength === strings[i].length) {
      result = strings[i];
    }

  }
  return result;
}


// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  for (let i = 0; i < wordsArr.length; i++) {
    if (word === wordsArr[i]) {
      return true;
    } else {
      return false;
    }
  }
}

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {



}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {

  return personObj.firstName + " " + personObj.lastName;
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  return Math.max.apply(Math, matrix.map(function (i) {
    return i[0] + i[1] + i[2];
  }));
}