// Write a function that returns the product of 2 numbers
function product(x, y) {
  //
  if (typeof x !== 'number' || typeof y !== 'number') return false;
  return x * y;
}

// Write a function that returns whether a given number is even

function isEven(num) {
  //
  if (num % 2 == 0) {
    return true;
  }
  return false;
}

// Return the biggest of 2 numbers
function maxOfTwoNumbers(a, b) {
  //
  return Math.max(a,b);
}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  //
  return Math.max(a,b,c);
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  //
  let sum = 0;
  numbers.forEach(element => sum += element);
  return sum;
}

// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
  //
  return Math.max(...numbers);
}

// Return the longest string in an array
function longestString(strings) {
  let lengthsArray = strings.map(string => string.length);
  let indexOfLongest = lengthsArray.indexOf(maxOfArray(lengthsArray));
  return strings[indexOfLongest];
}


// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  //
  if (wordsArr.includes(word)) {
    return true;
  }
  return false;
}

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  for (let i = 0; i < wordsArr.length; i++) {
    if(wordsArr.indexOf(wordsArr[i]) == wordsArr.lastIndexOf(wordsArr[i])) {
      return wordsArr[i];
    }
  }
  return false;
  //
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  //
  return `${personObj.firstName} ${personObj.lastName}`;
}

let personObj = {
  firstName: 'tony',
  lastName: 'stark'
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let containerArr = [];
  matrix.forEach(array => containerArr.push(maxOfArray(array)));
  return maxOfArray(containerArr);
}