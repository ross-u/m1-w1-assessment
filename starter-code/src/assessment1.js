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
  if (a < 0 && b < 0) {
    if (0 - a < 0 - b) {
      return a;
    }
  }
  if (a > b) {
    return a;
  } else return b;
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
  let sum = 0;
  if (numbers.length === 0) {
    return 0;
  }
  numbers.forEach(num => {
    sum += num;
  });
  return sum;
}

// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
  let biggestNum = 0;
  numbers.forEach(num => {
    if (num > biggestNum) {
      biggestNum = num;
    }
  });
  return biggestNum;
}

// Return the longest string in an array
function longestString(strings) {
  let longestWord = "";
  strings.forEach(word => {
    if (word.length > longestWord.length) {
      longestWord += word;
    }
  });
  return longestWord;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (wordsArr.includes(word)) {
    return true;
  }
  return false;
}

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  if (wordsArr.length === 0) {
    return false;
  }
  for (i = 0; i < wordsArr.length; i++) {
    if (wordsArr.indexOf(wordsArr[i]) === wordsArr.lastIndexOf(wordsArr[i])) {
      return wordsArr[i];
    }
  }
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}