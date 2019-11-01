// Write a function that returns the product of 2 numbers
function product(x, y) {
  //
  return x * y;
}

// Write a function that returns whether a given number is even

function isEven(num) {
  //
  if (num % 2 === 0) return true;
  else return false;
}

// Return the biggest of 2 numbers
function maxOfTwoNumbers(a, b) {
  //
  if (a > b) return a;
  else return b;
}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  //
  return Math.max(a, b, c);
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  //
  var sum = 0;
  numbers.forEach(function (elem) {
    sum += elem;
  });
  return sum;
}

// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
  //
  if (numbers.length !== 0){
    return Math.max.apply(null, numbers);
  } else {
    return 'Empty array';
  }
}

// Return the longest string in an array
function longestString(strings) {
  //
  var longest = 0;
  var longestId = 0;
  for (var i = 0; i < strings.length; i++){
    if (strings[i].length > longest){
      longest = strings[i].length;
      longestId = i;
    }
  }
  return strings[longestId];
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  //
  if (wordsArr.includes(word)){
    return true;
  }
  else {
    return false;
  }
}

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  
  if (wordsArr.length === 0){
    return false;
  }
  
//   for (var i = 0; i < wordsArr.length-1; i++){
//     if (!(wordsArr.includes(wordsArr[i]), i+1)){
//       return wordsArr[i];
//     }
//   }

  var result = wordsArr.find(x => wordsArr.indexOf(x) === wordsArr.lastIndexOf(x));
  
  return result;
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  //
  return (personObj.firstName + ' ' + personObj.lastName);
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
  var max = 0;
  for (var i = 0; i < matrix.length; i++){
    for (var j = 0; j < matrix.length; j++){
      if (matrix[i][j] > max){
        max = matrix[i][j];
      }
    }
  }
  return max;
}
