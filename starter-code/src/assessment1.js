// Write a function that returns the product of 2 numbers
function product(x, y) {
  
  if(typeof x != "number" || typeof y != "number"){
    return false;
  } else{
  return x * y;
  }
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if(num % 2 === 0){
    return true;
  } else {
    return false;
  }
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if(a > b){
    return a
  } else if (b > a){
    return b;
  }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if(a > b && a > c){
    return a;
  } else if (b > a && b > c){
    return b;
  } else {
    return c;
  }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if(numbers.length === 0) {
    return 0;
  }
  let result = numbers.reduce(function(accumulator, currentValue){
    return accumulator += currentValue;
  }, 0);
  return result;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  let sortedArray = numbers.sort(function(a, b){
    if( a > b){
      return -1;
    } else if ( a < b){
      return 1;
    } else {
      return 0;
    }
  })
  return sortedArray[0];
}

// Return the longest string in an array
function longestString(strings) {
  let sortedArray = strings.sort(function(a, b){
    if( a.length > b.length){
      return -1;
    } else if ( a.length < b.length){
      return 1;
    } else {
      return 0;
    }
  })
  return sortedArray[0];
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if(wordsArr.includes(word)){
    return true;
  } else {
    return false;
  }
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if(wordsArr.length === 0) {
    return false;}

  for( let i = 0; i < wordsArr.length; i++){
    if(wordsArr[0] === wordsArr[i]){
      wordsArr.shift();
    }
  }
  return wordsArr[0]; 
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {

   /*for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
      let sortedArray =  matrix.sort(function(a, b){
        if(a[i][j] > b[i][j]){
          return -1;
        } else if (a[i][j]< b[i][j]){
          return 1;
        } else {
          return 0;
        }
      })
      return sortedArray;
    }*/
    
}












   