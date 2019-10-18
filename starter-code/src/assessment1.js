// Write a function that returns the product of 2 numbers
function product(x, y) {
  //
  return x * y;
}

// Write a function that returns whether a given number is even

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Return the biggest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  return numbers.reduce(function(total, cur) {
    return total + cur;
  }, 0);
}

// Return the biggest number of a non-empty array

function maxOfArray(numbers) {
  let res = Math.max(...numbers);
  console.log(res);
  return res;
}

// Return the longest string in an array
function longestString(strings) {
  return strings.reduce(function(total, cur) {
    if (total.length >= cur.length) return total;
    return cur;
  }, "");
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  return wordsArr.includes(word);
}
//

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  if (!wordsArr.length) return false;
  return wordsArr.find(function(el) {
    return wordsArr.indexOf(el) === wordsArr.lastIndexOf(el);
  });
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`;
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  return Math.max(...matrix.map(array => Math.max(...array)));
}
console.log("hi recap");
