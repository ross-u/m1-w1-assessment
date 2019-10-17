// Write a function that returns the product of 2 numbers
function product(x, y) {
  // returns the product of 2 numbers
  return x * y
}

// Write a function that returns whether a given number is even

function isEven(num) {
  // if number is even
  if (num % 2 == 0) {
    return true;
  }
  // if number is odd
  return false;
}

// Return the biggest of 2 numbers
function maxOfTwoNumbers(a, b) {
  //returns biggest of 2 numbers
  return Math.max(a, b);
}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  // returns biggest of 3 numbers
  return Math.max(a, b, c);
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  // calculates sum of array
  return numbers.reduce((a, b) => a + b, 0);
}

// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
  // returns biggest value array
  return Math.max(...numbers);
}

// Return the longest string in an array
function longestString(strings) {
  // initialize empty string
  let longestString = "";

  // iterate over words in array
  strings.forEach(function (word) {
    // if word in array is longer than longestString
    if (word.length > longestString.length) {
      // assign word to longestString variable
      longestString = word;
    }
  });
  return longestString;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  // if word is in array
  if (wordsArr.includes(word) > 0) {
    return true;
  }
  return false;
}

// Finding the first non-duplicate word in an array
// DOES NOT WORK FOR SOME REASON :( )
function findUnique(wordsArr) {
  // returns false if array is empty
  if (!wordsArr.length) {
    return false;
  }

  // iterate over words in array
  for (let i = 0; i < wordsArr.length; i++) {
    // if word exist return it
    if (doesWordExist(wordsArr, word)) {
      return word
    }
  }
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {

  // return fullName
  return personObj.firstName + " " + personObj.lastName;
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  // initialize variables
  let biggestNumberArray;
  let biggestNumber = 0;

  // iterate over arrays 
  matrix.forEach(function (array) {

    // calculate biggest number in array
    biggestNumberArray = maxOfArray(array)

    // if this number is bigger than biggestNumber
    if (biggestNumberArray > biggestNumber) {

      // assign it to biggestNumber variable
      biggestNumber = biggestNumberArray;
    }
  })
  return biggestNumber;
}