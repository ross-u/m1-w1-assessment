// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x*y;
}

// Write a function that returns whether a given number is even

function isEven(num) {
    if(num % 2 === 0){
      return true;
    }
      return false;
  }

// Return the biggest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b){
    return a;
  }
  return b;
}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a > b){
    return a;
  }
  return b;
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  var result= 0;
  if(numbers.length === 0){
    return result;
  }
  for(var i = 0; i<numbers.length; i++){
    result += numbers[i]
  }
  return result;
}

// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
    return Math.max(...numbers);
}


// Return the longest string in an array
function longestString(strings) {
  if (strings.length === 0) {
    return undefined;
  }
  if (strings.length === 1) {
    return arr[0];
  }
  var largest = "";

  for (var i = 0; i < strings.length; i++) {
    if (strings[i].length > largest.length) {
      largest = strings[i];
    }
  }
  return largest;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
    for (var i = 0; i < wordsArr.length; i++) {
      if (wordsArr[i] === word) {
        return true;
      }
    }
    return false;
  }

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  var newArr = [];
  if(wordsArr.length === 0){
    return undefined;
  }
  else if(wordsArr.length === 1){
    newArr.push(wordsArr[0]);
  }
  else{
  for(var i = 0; i<wordsArr.length; i++){
    if(newArr.indexOf(wordsArr[i]) === -1){
    newArr.push(wordsArr[i]);
    }
  }
}
return newArr;
}


// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
 personObj.firstName = firstname;
 personObj.lastName = lastname;
  return `${this.firstName} + ${this.lastName}`;
}


// Return the biggest number in a two dimensional array
// function maxTwoDimArray(arr) {
//   var maximum = 0;

//   for (var i = 0; i < arr[0].length - 3; i++) {
//     for (var j = 0; j < arr.length - 3; j++) {
//       if (maximum < arr[i][j] * arr[i][j + 1] * arr[i][j + 2] * arr[i][j + 3]) {
//         maximum = arr[i][j] * arr[i][j + 1] * arr[i][j + 2] * arr[i][j + 3];
//       }
//       if ( i < (arr[i][j] * arr[i + 1][j] * arr[i + 2][j] * arr[i + 3][j]) ) {
//         maximum = arr[i][j] * arr[i + 1][j] * arr[i + 2][j] * arr[i + 3][j];
//       }
//     }
//   }
//   return maximum;
// }
