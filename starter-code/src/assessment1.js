// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
}

// Write a function that returns whether a given number is even

function isEven(num) {
  if (num % 2 == 0){
  return true;
  }
  else {
    return false;
  }
}

// Return the biggest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a >= b) {
    return a;
  }
  if (a < b) {
    return b;
  }
}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  var biggest;
  if (a >= b) {
    biggest = a;
  }
  if (a < b) {
    biggest = b;
  }
  if (c > biggest) {
    biggest = c
  }
  return biggest;
  }


// Calculate the sum of an array of numbers
function sumArray(numbers) {
var sum = 0;
for (let i = 0; i < numbers.length; i++){
sum += numbers[i];
}
return sum;
}

// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
  var biggest = 0;
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > biggest){
      biggest = numbers[i];
    }
    }
    return biggest;
}

// Return the longest string in an array
function longestString(strings) {
  var longest = '';
  for (let i = 0; i < strings.length; i++){
    if (strings[i].length > longest.length){
      longest = strings[i];
    }
    }
    return longest;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (wordsArr.includes(word)){
    return true;
  }
  else{
    return false
  }
}

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  if (wordsArr.length == 0){
    return false;
  } 
  for (let i = 0; i < wordsArr.length; i++){
    for (let j = i+1; j < wordsArr.length; j++){
      if (wordsArr[i] = wordsArr[j]){
        wordsArr.splice(i,1);
        wordsArr.splice(j-1,1);
      }
    }
    }
    return wordsArr[0];
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return personObj.firstName + ' ' + personObj.lastName;

}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  var highestNum = 0;
  for(let i = 0; i<matrix.length; i++){
    for(let j = 0; j<matrix[i].length; j++){
      if (matrix[i][j] > highestNum){
        highestNum = matrix[i][j];
      }
    }
  }
  return highestNum;
}
