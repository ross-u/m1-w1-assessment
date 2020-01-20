// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
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

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  return numbers.reduce((acc, curr) => {
    return acc += curr;
  }, 0)
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  let max = 0;
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
  strings.forEach(str => {
    if (str.length > longestString.length) {
      longestString = str;
    }
  })

  return longestString;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  return wordsArr.includes(word)
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  // wordsArr.forEach((e,i) => {
  //   if(!wordsArr.includes(e,i+1)){
  //     return e;
  //   }
  // })
  // return false;

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
  return personObj.firstName + " " + personObj.lastName;
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

  return maxOfArray(flatten(matrix))
}
