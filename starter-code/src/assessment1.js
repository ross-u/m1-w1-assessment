// Write a function that returns the product of 2 numbers
function product(x, y) {
  if (typeof x != "number" || typeof y != "number") {
    return false;
  }
  return x * y;
  //
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
  //
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  }
  //
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (typeof a != "number" || typeof b != "number" || typeof c != "number") {
    return false;
  }
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  }
  //
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if (typeof numbers != "object") {
    return false;
  }

  if (numbers.length === 0) {
    return 0;
  }

  for (var i = 0; i < numbers.length; i++) {
    if (typeof number !== "number") {
      return false;
    }
  }

  let totalSum = 0;
  numbers.forEach(function (number) {
    totalSum += number;
  });
  return totalSum;
  //
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  if (numbers.length === 0 || typeof numbers != "object") {
    return false;
  }

  let largestNumber = 0;
  numbers.forEach(function (number) {
    if (number > largestNumber) {
      largestNumber = number;
    }
  });
  return largestNumber;
}

// Return the longest string in an array
function longestString(strings) {
  if (strings.length === 0 || typeof strings != "object") {
    return false;
  }

  let wordLenght = 0;
  let longuestWord;
  strings.forEach(function (word) {
    if (typeof word != "string") {
      //pass
    } else if (word.length > wordLenght) {
      wordLenght = word.length;
      longuestWord = word;
    }
  });
  return longuestWord;
  //
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (typeof wordsArr != "object") {
    return false;
  }
  return wordsArr.includes(word);
  //
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if (wordsArr.length === 0 || typeof wordsArr != "object") {
    return false;
  }
  for (var i = 0; i < wordsArr.length; i++) {
    if (wordsArr.indexOf(wordsArr[i], i+1) === -1) {
      return wordsArr[i];
    }
  }
  //
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  if (typeof personObj === "object") {
    if (personObj.firstName === undefined || personObj.lastName === undefined) {
      return false;
    }
    return `${personObj.firstName} ${personObj.lastName}`;
  }
  //
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  if (matrix.length === 0 || typeof matrix != "object") {
    return false;
  }

  let highestNum = 0;
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > highestNum) {
        highestNum = matrix[i][j];
      }
    }
  }
  return highestNum;
  //
}
