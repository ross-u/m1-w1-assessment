// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x*y;
}

// Write a function that returns whether a given number is even

function isEven(num) {
  if (num % 2 === 0) {
  return true;
} else {
  return false;
}
}

// Return the biggest of 2 numbers
function maxOfTwoNumbers(a, b) {
 if (a > b) {
   return a;
 } else if (b > a){
   return b;
 }
 }


// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a > b && a > c ) {
    return a;
  } else if (b > a && b > c){
    return b;
  } else {
    return c;
  }
  }


// Calculate the sum of an array of numbers
function sumArray(numbers) {
   for(i=0; i<numbers.length;i++) {
    sum += numbers[i];
    return sum;
   }
}

// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
  for (i=0; i < numbers.length; i++ ) {
   if (numbers[i] > numbers[i+1]) {
     return numbers[i];
   }
  }
}

// Return the longest string in an array
function longestString(strings) {
  
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (wordsArr.includes(word)) {
    return true;
  } else {
    return false;
  }
}

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  
  }

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}

function getFullName(personObj) {
  return personObj.firstName + ' ' + personObj.lastName;
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}
