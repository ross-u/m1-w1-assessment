// Write a function that returns the product of 2 numbers
// advanced: should return false when one or more of the arguments is not a number
function product(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    return x * y;
  } else {
    return false
  }
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num%2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a>b){
    return a;
  } else {
    return b;
  }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
  if (a > 0 && b > 0 && c > 0) {
        if (a > b && c) {
          return a;
        } else if (b > c) {
          return b;
        } else {
          return c;
        }
        } else {
          if (a > b && c) {
            return a;
          } else if (b > c) {
            return b;
          } else {
            return c;
          }
      }
  } else {
    return false;
  }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if (Array.isArray(numbers)){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
      if (typeof numbers[i] === "number") {
        sum += numbers[i]
      } else {
        return false;
      }
      
    }
    return sum;
  } else {
    return false;
  }
}

// new functions
function arrayEmpty(array){
  if (array.length < 1) {
    return true;
  } else {
    return false;
  }
}

function isArray (array) {
  if (Array.isArray(array)) {
    return true;
  } else {
    return false;
  }
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  if (isArray(numbers) && !arrayEmpty(numbers)) {
    let highest = 0;
    for(let i = 0; i < numbers.length; i++) {
      if (numbers[i] > highest) {
        highest = numbers[i];
      }
    }
    return highest;
  } else {
    return false;
  }
  
}

// Return the longest string in an array
function longestString(strings) {
  if (isArray(strings) && !arrayEmpty(strings)) {
    let longest = "";
    for(let i = 0; i < strings.length; i++) {
      if (strings[i].length > longest.length) {
        longest = strings[i];
      }
    }
    return longest;
  } else {
    return false;
  }
  
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (isArray(wordsArr)) {
    if (wordsArr.includes(word)){
      return true;
    } else {
      return false;
    }
  } else {
    return false
  }
  
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if (isArray(wordsArr)) {
    if (wordsArr.length < 1) {
      return false;
    } else {
      let wordPos = 0;
      let word = wordsArr[0]
      while (wordsArr.indexOf(word, wordPos+1) !== -1) {
        wordPos++;
        word = wordsArr[wordPos];
      }
      return wordsArr[wordPos];
    }
  } else {
    return false;
  }
  
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  if (isArray(matrix) && !arrayEmpty(matrix)) {
    let highest = 0;
    for(let i = 0; i<matrix.length;i++) {
      if (maxOfArray(matrix[i]) > highest) {
        highest = maxOfArray(matrix[i]);
      }
    }
    return highest;
  } else {
    return false;
  }
}
