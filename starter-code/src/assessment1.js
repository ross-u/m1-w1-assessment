// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x*y;
}

// Write a function that returns whether a given number is even

function isEven(num) {
  if (num%2===0) {
    return true;
  }else {
    return false;
  }
}

// Return the biggest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a>b) {
    return a;
  }else{
    return b;
  }
}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  return maxOfTwoNumbers(maxOfTwoNumbers(a,b),c);
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let result = numbers.reduce(function (accumulator,element) {
    return accumulator + element;
  },0);
  return result;
}

// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
  let maxNumber;
  numbers.forEach((element,index) => {
    if (index === 0) {
      maxNumber = element;
    }else if(element > maxNumber) {
      maxNumber = element;
    }
  });
  return maxNumber;
}

// Return the longest string in an array
function longestString(strings) {
  let longestArray = 0;
  strings.forEach((element,index) => {
    if(element.length > strings[longestArray].length) {
      longestArray = index;
    }
  });
  return strings[longestArray];
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if(wordsArr.includes(word)) {
    return true;
  }else {
    return false;
  }
}

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  if (wordsArr.length === 0) {
    return false;
  }
  let firstUnique;
  let found = false;
  wordsArr.forEach(function (element,index) {
    console.log(wordsArr.slice(index+1).indexOf(element));
    if ((wordsArr.slice(index+1).indexOf(element) === -1) && !found) {
      firstUnique = element;
      found = true;
    }
  });
  return firstUnique;
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return personObj.firstName + ' ' + personObj.lastName;
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let maxElement = matrix [0] [0];
  matrix.forEach(function(element,index) {
    element.forEach(element => {
      if(element>maxElement) {
        maxElement = element;
      }
    });
  });
  return maxElement;
}
