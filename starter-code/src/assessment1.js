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
  if (a > b) {
    return a;
  }
  return b;
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
  let sum = 0;
  numbers.forEach(function (a) {
    sum += a;
  })
  return sum;
}

// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
  let largest = 0;
  numbers.forEach(function (a) {
    if (a > largest) {
      largest = a;
    }
  });
  return largest;
}


// Return the longest string in an array
function longestString(strings) {
  let longestStr = '';
  strings.forEach(function (word) {
    if (word.length > longestStr.length) {
      longestStr = word;
    }
  });
  return longestStr;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr.includes(word)) {
      return true;
    }
  }
  return false;
}

//   wordsArr.forEach(function (word) {
//     if (wordsArr.includes(word)) {
//       return true;
//     });
//   } return false;
// }

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {

  let uniqueStr = wordsArr[0];
  if (!wordsArr[0]) {
    return false;
  }
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i] !== uniqueStr) {
      uniqueStr = wordsArr[i];
      return uniqueStr;
    }
    // wordsArr.forEach(function (a) {
    //   if (a !== uniqueStr) {
    //     uniqueStr = a;
    //     return uniqueStr;
    //   }
    // });
  }
}


let woArr = ['ok', 'get', 'get', 'get', 'go', 'let'];
console.log(findUnique(woArr));
// console.log(wordsArr.splice(0, 1));


// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return personObj.firstName + ' ' + personObj.lastName;
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let bigNum = 0;
  matrix.forEach(function (arr1) {
    arr1.forEach(function (num) {
      if (num > bigNum) {
        bigNum = num;
      }
    });
  });
  return bigNum;
}