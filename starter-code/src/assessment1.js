// Write a function that returns the product of 2 numbers
function product(x, y) {
  //
  if (typeof x !== 'number' || typeof y !== 'number') return false;
  return x * y;
}

// Write a function that returns whether a given number is even

function isEven(num) {
  if(num % 2 === 0){
    return true;
  } return false;
}

// Return the biggest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } return b;
}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  let highestNumber = Math.max(a, b, c);
 return highestNumber;
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  sum = 0;
  for(let i = 0; i< numbers.length; i++) {
    sum += numbers[i];
  } return sum;
}

// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
  let biggestNumber = "";
  for(let i = 0; i< numbers.length; i++) {
    if(biggestNumber < numbers[i]) {
      biggestNumber = numbers[i];
    } 
  }return biggestNumber;
}

// Return the longest string in an array
function longestString(strings) {
  let longest = [];
  for (let i = 0; i< strings.length; i++) {
    if(longest.length < strings[i].length) {
      longest = strings[i];
    } 
  } return longest;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  for(let i = 0; i<wordsArr.length; i++) {
    if(word === wordsArr[i]) {
      return true;
    }
  }return false;
}

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  if(wordsArr.length === 0) {
    return false;
  } let unique = [];
  for(let i = 0; i<wordsArr.length; i++) {
    if(wordsArr.indexOf(wordsArr[i]) === -1) {
      unique = wordsArr[i];
    }
  } return unique;
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {

}
