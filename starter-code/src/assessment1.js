// Write a function that returns the product of 2 numbers
function product(x, y) {
  
}

// Write a function that returns whether a given number is even

function isEven(num) {
  if (num % 2 === 0) {
    return true
  } else {}
  return false
}

// Return the biggest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a
  } else if (a < b) {
    return b
  } 
}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a > b && c) {
    return a;
  } else if ( b > a && c) {
    return b;
  } else if (c > a && b) {
    return c;
  };
};

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
  } if (numbers[0] === undefined) {
    return 0
  } else {
    return sum += numbers[i]
  }
}

// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
  for (let i = 0; i < numbers.length; i++) {
  } return Math.max(numbers[i])
}

// Return the longest string in an array
function longestString(strings) {
  var longestWord = '';
  for(var i = 0; i < strings.length; i++){
    if(strings[i].length > longestWord){ 
	longestWord = strings[i].length; 
     }
  } return longestWord
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
}

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  //
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}
