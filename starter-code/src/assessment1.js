// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x* y;
}

// Write a function that returns whether a given number is even

function isEven(num) {
  if (num%2===0){
    return true;
  }
  else {
    return false;
  }
}

// Return the biggest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if(a > b){
    return a;
  }
  else {
    return b;
  }
}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  return Math.max(a, b, c)
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if(numbers.length===0){
    return 0;
  } else {
    return numbers.reduce((a, b)=>a+b)
  }
}

// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
  return Math.max(...numbers)
}

// Return the longest string in an array
function longestString(strings) {
  var longestStringo='';
  strings.forEach(string=>{
    if(string.length>longestStringo.length){
      longestStringo = string;
    }
  })
  return longestStringo;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if(wordsArr.includes(word)){
    return true
  }
  else {
    return false;
  }
}

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  console.log(wordsArr);
  var counterObj = {};
  if(wordsArr.length==0){
    return false;
  }
  else {
    wordsArr.forEach(word=>{
      if (!counterObj[word]){
        counterObj[`${word}`] = {counter: 1};
        console.log(counterObj);
      }
      else {
        counterObj[`${word}`].counter += 1;
      }
    })
    var uniqueWords = [];
    for (word in counterObj) {
      if(counterObj[`${word}`].counter==1) {
        uniqueWords.push(word);
      }
      console.log(uniqueWords);
    }
  }
  return uniqueWords[0];
}


// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  var longestInFirstArray = '';
  var longestInSecondArray = '';
  matrix[0].forEach(number=>{
    if(number > longestInFirstArray){
      longestInFirstArray = number;
    }
  })
  matrix[1].forEach(number=>{
    if(number > longestInSecondArray){
      longestInSecondArray = number;
    }
  })
  if(longestInFirstArray > longestInSecondArray){
    return longestInFirstArray;
  } else {
    return longestInSecondArray
  }
}
