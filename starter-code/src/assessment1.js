// Write a function that returns the product of 2 numbers
function product(x, y) {
  //
  if (typeof x =="number" && typeof y=="number"){
    return x*y;
  }
  else{
    return false;
  }
}

// Write a function that returns whether a given number is even
function isEven(num) {
  //
  return num%2==0? true: false;
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  //
  return a>b?a:b;
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  //
  if(typeof a == "number" && typeof b == "number" && typeof c =="number"){
    if (a>b&& a>c ){
      return a;
    }
    else if(b>a&&b>c){
      return b;
    }
    else{
      return c;
    }
  }
  else{
    return false;
  }  
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  //
  if(numbers.length == 0){
    return 0;
  }
  else{
    let sum = 0;
    for(let i = 0; i<numbers.length; i++){
      if (typeof numbers[i] == "number"){
        sum += numbers[i];
      }
      else{
        return false;
      }
    }
    return sum;
  }
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  //
  if (numbers.length ==0){
    return false;
  }
  let max = 0;
  for (let i =0; i < numbers.length; i++){
    if(typeof numbers[i] == "number"){
      if(max < numbers[i]){
        max = numbers[i];
      }
    }
    else{
      return false;
    }
  }
  return max;
}

// Return the longest string in an array
function longestString(strings) {
  //
  if (strings.length ==0 || !Array.isArray(strings)){
    return false;
  }
  maxLength = 0;
  maxString = "";
  for (let i = 0; i<strings.length ; i++){
    if (maxLength < strings[i].length){
      maxLength = strings[i].length;
      maxString = strings[i];
    }
  }
  return maxString;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  //
  if(wordsArr.length == 0){
    return false;
  }
  for (let i=0; i<wordsArr.length; i++){
    if(wordsArr[i]== word){
      return true;
    }
  }
  return false;
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  //
  if (wordsArr.length == 0 || !(Array.isArray(wordsArr))){
    return false;
  }
  let unique = false;
  for (let i= 0; i<wordsArr.length-1; i++){
    for(let j = i+1; j<wordsArr.length; j++){
      if(wordsArr[i]!=wordsArr[j]){
        unique = true;
      }
      else{
        unique = false;
        break; 
      }
    }
    if(unique){
      return wordsArr[i];
    }
  }

}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  //
  if (typeof personObj != "object" ||(personObj.firstName == undefined && personObj.lastName == undefined)){
    return false;
  }
  else{
    return personObj.firstName +' '+ personObj.lastName;
  }
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
  if(matrix.length == 0 || !Array.isArray(matrix)){
    return false;
  }
  else{
    let maximum = 0;
    for(let i=0; i<matrix.length; i++){
      let maximum = matrix[i];
      for (let j = 0; j<matrix[i].length; j++){
          if(maximum<matrix[i][j]){
            maximum = matrix[i][j];
          }
        }
      }
    return maximum;
    }
  }
