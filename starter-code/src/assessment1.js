// Write a function that returns the product of 2 numbers
function product(x, y) {
  //
  if (typeof x !== 'number' || typeof y !== 'number') return false;
  return x * y;
}

// Write a function that returns whether a given number is even

function isEven(num) {
  if (num % 2 === 0){
    return true;
  } else {
    return false;
  }
}

// Return the biggest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b){
    return a;
  }else if ( b > a) {
    return b;
  }
}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a > b && a > c){
    return a;
  }else if (b > a && b > c){
    return b;
  }else if (c > a && c > b){
    return c;
  }

}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let sum = 0;
  if(numbers.length > 0){
    for(i = 0; i < numbers.length; i ++){
      sum += numbers[i];
    }
    return sum;
  } else {
    return 0;
  }
}

// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
  let highest = 0;

  for(i = 0; i < numbers.length; i ++){
    if (numbers[i] > highest){
      highest = numbers[i];
    }
  }
  return highest;
}

// Return the longest string in an array
function longestString(strings) {
    let longestStr = "";

    for(i = 0; i < strings.length; i ++){
      if (strings[i].length > longestStr.length){
        longestStr = strings[i];
      }
    }
    return longestStr;
  
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {

  for (i=0; i < wordsArr.length; i++){
    if (wordsArr[i] === word){
      return true;
    } 
    }
    return false;
  }


// Finding the first non-duplicate word in an array
// function findUnique(wordsArr) {
//   if(wordsArr[0].length === 0 && typeof wordsArr[0] === "object"){
//     return false;
//   }else {
//     for (let i = 0; i < arr.length; i++){
//       if(arr[i] === word){
//         result += 1;
//       }
//     }
//     if(result === 0){
//       return 0;
//     }
    
//   }
// }

function findUnique(wordsArr) {
  
  if(wordsArr[0].length === 0 && typeof wordsArr[0] === "object"){
    return false;
  }else {

    for (let i = 0; i < arr.length; i++){
      if(arr[i] === word){
        result += 1;
      }
    }
    if(result === 0){
      return 0;
    }
  }
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  let phrase;
  phrase = (`firstName: ${personObj.firstName}, lastName: ${personObj.lastName}`);
  return phrase;
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}
