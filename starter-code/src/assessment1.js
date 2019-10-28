// Write a function that returns the product of 2 numbers
function product(x, y) {

  return x * y

};

// Write a function that returns whether a given number is even

function isEven(num) {

  if (num % 2 === 0) {
    return true;
  }
  else {
    return false
  };

};

// Return the biggest of 2 numbers
function maxOfTwoNumbers(a, b) {

  return Math.max(a, b);

};

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {

  if (a > b && a > c) {
    return a
  };

  if (b > a && b > c) {
    return b
  };

  if (c > a && c > b) {
    return c
  };
};

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  
  var sum = 0;

  for (var i = 0; i < numbers.length; i++) {
    result = sum += numbers[i];
  };

  if (numbers == 0) {
    return 0
  }
  else {
    return result
  };

};

// Return the biggest number of a non-empty array
function maxOfArray(numbers) {

return Math.max(...numbers);
  
};

// Return the longest string in an array
function longestString(strings) {
  
  var longStr = '';

  for (i = 0; i < strings.length; i++) {
    if (strings[i].length > longStr) {
      longStr = longStr + strings[i];
    }; 
    return longStr
  }
};

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {

  if (wordsArr.includes(word) == true) {
    return true
  }
  else {
    return false
  };
};

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  
 // My guess is the built in methods .filter() and .indexOf but coundn't figure it out
  
};

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {

  return personObj.firstName + ' ' + personObj.lastName
};

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  // Did run out of time to get a look
};
