// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
  //
}

// Write a function that returns whether a given number is even
function isEven(num) {
  return num % 2 === 0;
  //
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
  //
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if (!numbers) {
    return 0;
  } else {
    let sum = numbers.reduce((a, b) => {
      return a + b;
    }, 0);
    return sum;
  }
}
// }
// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  let maxNum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNum) {
      maxNum = numbers[i];
    }
  } //
  return maxNum;
}

// Return the longest string in an array
function longestString(strings) {
  let biggestString = "";
  for (let j = 0; j < strings.length; j++) {
    if (strings[j].length > biggestString.length) {
      biggestString = strings[j];
    }
  }
  return biggestString;
  //
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  return wordsArr.includes(word);
  //
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if (wordsArr.length === 0) {
    return false;
  } else {
    let onlyUnique = (val, i, s) => {
      return s.indexOf(val) === i;
    };
    let unique = wordsArr.filter(onlyUnique);

    return unique[0];
  }
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  let fullName = personObj.firstName + " " + personObj.lastName;
  //
  return fullName;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  var maxRow = matrix.map(function(row) {
    return Math.max.apply(Math, row);
  });

  var max = Math.max.apply(null, maxRow);

  return max;
  //totally didnt google this one
}
