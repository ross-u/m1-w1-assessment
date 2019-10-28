// Write a function that returns the product of 2 numbers
function product(x, y) {
  if((x === NaN || y === NaN) || (x === undefined || y === undefined)) {
    return false;
  } else {
  return(x * y);
  }
}
// Write a function that returns whether a given number is even

function isEven(num) {
  if(num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Return the biggest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if(a > b) {
    return a;
  } else {
    return b;
  }
}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if((a === NaN || b === NaN || c === NaN) || (a === undefined || b === undefined || c === undefined)) {
    return false;
  } else {
  var abcArr = [a,b,c];
  var highestNum = Number.MIN_SAFE_INTEGER;
  for(let i = 0; i < abcArr.length; i++) {
    if(typeof abcArr[i] != "number") {
      return false;
    }
    if(abcArr[i] > highestNum) {
      highestNum = abcArr[i]
    }
  }
  return highestNum;
}
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if(Array.isArray(numbers) === false) {
    return false;
  }
  var sum = 0;
  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] === NaN || numbers[i] === undefined) {
      return false;
    }
    sum += numbers[i];
  }
  return sum;
}

// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
  if((Array.isArray(numbers) === false || numbers === undefined) || numbers.length === 0) {
    return false;
  } 
  maxNum = Number.MIN_SAFE_INTEGER;
  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] > maxNum) {
      maxNum = numbers[i];
    }
  }
  return maxNum;
}

// Return the longest string in an array
function longestString(strings) {
  if(strings[0] == undefined || Array.isArray(strings) === false) {
    return false;
  } else {
  var longestString = "";
  for(let i = 0; i < strings.length; i++) {
    if(typeof strings[i] != "string") {
      continue;
    }
    if(strings[i].length > longestString.length) {
      longestString = strings[i];
    }
  }
  return longestString;
}
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  for(let i = 0; i < wordsArr.length; i++) {
    if(wordsArr[i] === word) {
      return true;
    }
  }
  return false;
}

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  if(wordsArr[0] == undefined || Array.isArray(wordsArr) === false) {
    return false;
  } else {
  for(let i = 0; i < wordsArr.length; i++) {
    var currentWord = wordsArr[i];
    var dupeCount = 0;
    for(let j = 0; j < wordsArr.length; j++) {
      if(j == i) {
        continue;
      }
      if((wordsArr[j] == currentWord)) {
        dupeCount += 1;
      }
    }
    if(dupeCount == 0) {
      return currentWord;
    }
  }
}
return nonDupeWord;
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  if(typeof personObj != 'object' || typeof personObj.firstName != "string" || typeof personObj.lastName != "string") {
    return false;
  } else {
  return personObj.firstName + " " + personObj.lastName;
  }
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  if((Array.isArray(matrix) === false || matrix === undefined) || matrix.length === 0) {
    return false;
  } 
  var highestNum = Number.MIN_SAFE_INTEGER;
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] > highestNum) {
        highestNum = matrix[i][j];
      }
    }
  }
  return highestNum;

}
