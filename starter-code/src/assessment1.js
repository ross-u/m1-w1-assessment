// Write a function that returns the product of 2 numbers
function product(x, y) {
  if (Number.isInteger(x) && Number.isInteger(y)) {
    return x * y;
  }
  return false;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 == 0) {
    return true;
  }
  return false;
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)) {
    if (a > b && a > c) {
      return a;
    }
    else if (b > c && b > a) {
      return b;
    }
    else {
      return c;
    }
  }
  return false;
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let sum = 0
  if (numbers.length === 0) {
    return 0;
  }
  else if (!Array.isArray(numbers)) {
    return false;
  }

  else {
    sum = numbers.reduce((acc, curr) => {
      if (Number.isNaN(curr)) {
        nanFlag = true;
      }
      return acc += curr;
    }, 0)
  }

  if (Number.isNaN(sum)) {
    return false;
  }
  return sum;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  let max = 0;
  if (numbers.length === 0) {
    return false;
  }

  if (!Array.isArray(numbers)) {
    return false;
  }

  numbers.forEach(e => {
    if (e > max) {
      max = e;
    }
  })
  return max;
}

// Return the longest string in an array
function longestString(strings) {
  let longestString = "";

  if (!Array.isArray(strings) || strings.length === 0) {
    return false;
  }

  strings.forEach(str => {
    if (typeof str === "string" && str.length > longestString.length) {
      longestString = str;
    }
  })
  return longestString;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (!Array.isArray(wordsArr) || typeof word !== "string") {
    return false;
  }
  return wordsArr.includes(word)
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if (!Array.isArray(wordsArr)) {
    return false;
  }
  const unique = wordsArr.filter((e, i) => {
    return (!wordsArr.includes(e, i + 1))
  })
  if (unique.length === 0) {
    return false;
  }
  return unique[0];
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  if (typeof personObj === "object" && personObj !== null && !Array.isArray(personObj)) {
    if (personObj.firstName === undefined || personObj.lastName === undefined) {
      return false
    }
    else {
      return personObj.firstName + " " + personObj.lastName;
    }
  }
  return false;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  function flatten(ary) {
    var ret = [];
    for (var i = 0; i < ary.length; i++) {
      if (Array.isArray(ary[i])) {
        ret = ret.concat(flatten(ary[i]));
      } else {
        ret.push(ary[i]);
      }
    }
    return ret;
  }

  if (!Array.isArray(matrix)) {
    return false;
  }
  return maxOfArray(flatten(matrix))
}
