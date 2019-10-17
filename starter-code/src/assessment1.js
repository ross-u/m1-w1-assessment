// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
  //
}

// Write a function that returns whether a given number is even

function isEven(num) {
  return num % 2 === 0;
}

// Return the biggest of 2 numbers
function maxOfTwoNumbers(a, b) {
  return Math.max(a, b);
  //
}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  //
  return Math.max(a, b, c);
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let sum = 0;
  numbers.forEach(number => {
    sum += number;
  });
  return sum;
  //
}

// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
  let biggestNumber = 0;
  numbers.forEach(number => {
    if (number > biggestNumber) {
      biggestNumber = number;
    }
  });
  return biggestNumber;
  //
}

// Return the longest string in an array
function longestString(strings) {
  let carachters = "";
  strings.forEach(string => {
    if (string.length > carachters.length) {
      carachters = string;
    }
  });
  return carachters;
  //
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  return wordsArr.indexOf(word) >= 0;
  //
}

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  console.log(wordsArr);
  if (wordsArr.length == 0) {
    return false;
  }

  let nonDuplicates= []
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr.indexOf(wordsArr[i]) === wordsArr.lastIndexOf(wordsArr[i])){
      nonDuplicates.push(wordsArr[i])
    }
    }
 

  return nonDuplicates[0];
  //
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`;

  //
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let biggestNumber = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > biggestNumber) {
        biggestNumber = matrix[i][j];
      }
    }
  }
  return biggestNumber;
  //
}
