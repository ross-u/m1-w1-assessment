// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
}

// Write a function that returns whether a given number is even

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

// Return the biggest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  if (b > a && b > c) {
    return b;
  }
  return c;
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let sum = 0;
  if (numbers.length === 0) {
    return 0;
  }
  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i]
  }
  return sum;
}

// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
  return (Math.max(...numbers));
}

// Return the longest string in an array
function longestString(strings) {
  let longestSTR = 0;
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > longestSTR) {
      longestSTR = strings[i].length;
    }

  }
  return longestSTR;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {

  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr.includes(word)) {
      return true;
    }
    return false;
  }
}

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  let uniq = [];
  if (wordsArr.length === 0) {
    return false;
  }
  /*for(let i = 0; i < wordsArr.length; i++) {
     if(uniq.indexOf(wordsArr(wordsArr[i] == -1))){
       
     }
     return uniq;
   } */
}



// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return personObj.fistName + ' ' + sonObj.lastName + ' ';
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}