// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x*y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num%2===0){
    return true
  }else{
    return false
  }
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if ( a>b){
    return a
  } if (a<b){
    return b
  }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a> b && a > c){
    return a
  } if ( b> a && b>c){
    return b
  } else {
    return c
  }
}

// Calculate the sum of an array of numbers
function sumArray (numbers){

  var sumatotal = 0;
  for (var i = 0; i<numbers.length;i++){
  sumatotal= sumatotal+numbers[i];
  }
  return sumatotal;
}
// PREGUNTAR PER QUE NO VA AMB EL =

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  
  var posicion=0;

  for (var i=0; i<numbers[0];i++){
  if (numbers[i]< numbers[i]+1){
    posicion=i+1;
  }
  }
  return numbers[posicion] 
}

// Return the longest string in an array
function longestString(strings) {
  var contarLength = strings[0].length;
  var posicion=0;

  for (var i=0; i<strings[0].length;i++){
  if (contarLength<strings[i].length){
    contarLength=strings[i].length;
    posicion=i;
  }
  }
  return strings[posicion]
}
 
// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
    for (var i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i] === word) {
      return true;
    }else {
      return false
    }
  }
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {

  // var newArray = [];
  //     for ( var i=0; i < wordsArr.length; i++){
  //     if (wordsArr.indexOf(wordsArr[i]) = wordsArr[i]+1) 
  //     }
  //   return newArray;
  }

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}
