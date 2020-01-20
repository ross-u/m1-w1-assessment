// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
}

product();

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
isEven();

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
maxOfTwoNumbers();

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

maxOfThreeNumbers();

// Calculate the sum of an array of numbers 
function sumArray(numbers) {
  let sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
sumArray();

// Return the largest number of a non-empty array

function maxOfArray(numbers) {
  let largestNumber = numbers[0];
  for (let i = 0; i < maxOfArray.length; i++) {
    if (numbers[i] > largestNumber){
      largestNumber = numbers[i];
    }
  return largestNumber;
  }
}
maxOfArray();

// Return the longest string in an array
function longestString(strings) {
  for (let i = 0; i < strings.length; i++) {
    length = 0;
    longestString;
    if (strings[i].length > length){
      length = strings[i].length;
      longestString = strings[i];
    }
  return longestString;
  }
}
longestString();

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i] === word) {
        return true;
      } else {
        return false;
      }
  }
}
doesWordExist();

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  for (let i = 0; i < wordsArr.length; i++) {
    wordsArr.indexO
  }
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
    return `${personObj.firstName} ${personObj.lastName}`;
  }

getFullName();

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}
