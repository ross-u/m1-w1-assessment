// Write a function that returns the product of 2 numbers
function product(x, y) {
  //
  return x * y;
}

// Write a function that returns whether a given number is even

function isEven(num) {
  //
  if (num % 2 == 0) {
    return true;
  }
  return false;
}

// Return the biggest of 2 numbers
function maxOfTwoNumbers(a, b) {
  //
  if (a > b) {
    return a;
  }
  return b;
}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  //
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  }
  return c;
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  //
  let sum = 0;

  numbers.forEach(function(element) {
    sum += element;
  });

  return sum;
}

// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
  //
  let biggerNum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > biggerNum) {
      biggerNum = numbers[i];
    }
  }
  return biggerNum;
}

// Return the longest string in an array
function longestString(strings) {
  //
  let longerWord = "";

  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > longerWord.length) {
      longerWord = strings[i];
    }
  }
  return longerWord;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  //
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr.indexOf(word) >= 0) {
      return true;
    }
  }
  return false;
}

// function findUnique(wordsArr) {
//   //
//   for (let i = 0; wordsArr.length >= 1; i++) {
//     let uniqueWord = wordsArr.shift();

//     console.log(uniqueWord);

//     console.log("arr " + wordsArr);
//     if (wordsArr.indexOf(uniqueWord) < 0) {
//       return uniqueWord;
//     }
//   }
//   return false;
// }

function findUnique(wordsArr) {
  //
  while (wordsArr.length >= 1) {
    let uniqueWord = wordsArr.shift();

    if (wordsArr.indexOf(uniqueWord) < 0) {
      return uniqueWord;
    }
  }
  return false;
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  //
  return personObj.firstName + " " + personObj.lastName;
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
  let biggestNum = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
      if (matrix[row][column] > 0) {
        biggestNum = matrix[row][column];
      }
    }
  }

  return biggestNum;
}
