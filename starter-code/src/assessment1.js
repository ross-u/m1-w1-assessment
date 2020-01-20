// Write a function that returns the product of 2 numbers
function product(x, y) {
   return x * y;

};

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else if (num % 2 !== 0) {
    return false;
  }
};

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  }
};

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if(a > b && a > c) {
    return a;
  } else if (b < c && a < c) {
    return c;
  } else if (b > a && b > c) {
    return b;
  }
};

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  return numbers.reduce(function(a, b) {
    return a + b;
  }, 0);
};
// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  var sorted = numbers.sort(function(a, b) {
    return b - a;
  }
)
return sorted[0];
};

// Return the longest string in an array
function longestString(strings) {
 var sorted = strings.sort(function (a, b) {
   return b.length - a.length;
 })
 return sorted[0];
 };

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (wordsArr.includes(word)) {
     return true;
   } else {
     return false;
   }
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {}
 

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  var fullName = personObj.firstName + ' ' + personObj.lastName;
  return fullName;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {}