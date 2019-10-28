// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y
}

// Write a function that returns whether a given number is even

function isEven(num) {
  return num % 2 === 0;
}

// Return the biggest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else if (a == b) {
    return 'a = b'
  } else {
    return b;
  }

}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  return Math.max(a, b, c);
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    return sum;
  }
}

// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
  //
}

// Return the longest string in an array
function longestString(strings) {
  var longString = longestString[0];
  for (var i = 0; i < strings.length; i++) {
    if (longestString[i] > longString.length) {
      longString = longestString[i];
    }
  }
  return longString;
}


// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  for (var i = 0; i < wordsArr.length; i++) {
    wordsArr[i].includes('word');
  }
}

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  //
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return 'firstName: ' + personObj.firstName + ', lastName:' + personObj.lastName;
  // for (var name in personObj) {
  // return 'firstName: ' + personObj.name + ', lastName:' + personObj.name;
}


// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}