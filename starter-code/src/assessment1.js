// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
  //
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 === 0 ) {
    return true
  }
  else {
    return false}
  //
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  }
    else {
      return b;
    }
  }

  //

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  //
  if (a > b && a > c) {
    return a;
  }
  else if (b > a && b > c) {
    return b;
  }
  else if (c > a && c > b) {
    return c;
  }
}

// Calculate the sum of an array of numbers

const numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//OPTION 1 with reduce
// function sumArray(numbers) {
//   return numbers.reduce(function (accumulator, currentValue){
//       const updatedAccumulator = accumulator + currentValue;
//           return updatedAccumulator;
//     }, 0);
// }

//OPTION 2 with loop
var total = 0;
function sumArray(numbers) {
  var total = 0;
  for(var i = 0; i < numbers.length; i++) {
      total += numbers[i];
  }

  return total;
}



// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  //
}

// Return the longest string in an array
function longestString(strings) {
  //
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  //
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  //
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  //
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}
