// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  return num % 2 === 0;
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
}

// // Calculate the sum of an array of numbers
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}

// // Return the largest number of a non-empty array
function maxOfArray(numbers) {
  let maxOfArray = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (maxOfArray < numbers[i]) {
      maxOfArray = numbers[i];
    }
  }
  return maxOfArray;
}

// Return the longest string in an array
function longestString(strings) {
  let longestString = "";
  for (let i = 0; i < strings.length; i++) {
    if (longestString.length < strings[i].length) {
      longestString = strings[i];
    }
  }
  return longestString;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  return wordsArr.includes(word);
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if (wordsArr.length < 1) {
    return false;
  } else {
    wordsArr.forEach(element => {
      for (let i = 0; wordsArr.length; i++) {
        wordCount = 0;
        if (element === wordsArr[i]) {
          wordCount++;
        }
        if (wordCount > 1) {
          return element;
        }
      }
    });
  }
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let maxOfArray = 0;
  matrix.forEach(element => {
    for (let i = 0; i < element.length; i++) {
      if (maxOfArray < element[i]) {
        maxOfArray = element[i];
      }
    }
  });
  return maxOfArray;
}
