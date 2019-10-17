// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
}

// Write a function that returns whether a given number is even

function isEven(num) {
  return num % 2 === 0;
}

// Return the biggest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  let max = a;
  if (a > b) {
    if (a > c) {
      return a;
    }
    return c;
  }
  max = b;
  if (b > c) {
    return b;
  }
  return c;
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let sum = 0;
  numbers.forEach(element => {
    sum += element;
  });
  return sum;
}

// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
  let max = numbers[0];
  numbers.forEach(element => {
    if (element > max) {
      max = element;
    }
  });
  return max;
}

// Return the longest string in an array
function longestString(strings) {
  let longestWord = strings[0].length;
  strings.forEach(element => {
    if (element.length >= longestWord) {
      longestWord = element;
    }
  });
  return longestWord;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  let result = false;
  wordsArr.forEach(element => {
    if (element === word) {
      result = true;
    }
  });
  return result;
}

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  if (wordsArr.length === 0) {
    return false;
  }
  for (let j = 0; j < wordsArr.length; j++) {
    let wordsCopy = wordsArr.slice(j + 1, wordsArr.length);

    if (wordsCopy.indexOf(wordsArr[j]) === -1) {
      return wordsArr[j];
    }
  }
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return personObj.firstName + " " + personObj.lastName;
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}
