// Write a function that returns the product of 2 numbers
function product(x, y) {
  if(!x || !y){
    return false;
  }
  else{
  return x*y;
  }
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2===0){
    return true;
  }
  else {
    return false;
  }
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a>b){
    return a;
  }
  else{
    return b;
  }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if(!a || !b || !c){
    return false;
  }
  else if (a>b && a>c){
    return a;
  }
  else if (b>a && b>c){
    return b;
  }
  else {
    return c;
  }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if (!Array.isArray(numbers)){return false;}
  else
  {
    
    let sum=0;
   if(numbers.length>0){
  numbers.forEach(function(element,i){
    
    sum+=element});
  return sum;}
   else{
    return 0;
  }
}
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
 if (!Array.isArray(numbers)){return false}
 else{
 if (numbers.length===0){
   return false
 }
 else{
  let highestNumber=0;
  numbers.forEach(function(element){
    if (element>highestNumber){
      highestNumber=element;
    }
  }
  
  )
  return highestNumber;
}
 }
}

// Return the longest string in an array
function longestString(strings) {
  if (!Array.isArray(strings)){
    return false
  }
  else{
  
  let longestS=0;
  let longestI=0
  strings.forEach(function(element,i){
    if (element.length>longestS){
      longestS=element.length;
      longestI=i;
    }
  })
  return strings[longestI];
}
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if(wordsArr.includes(word)){
    return true;
  }
  else{
    return false;
  }
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if (!Array.isArray(wordsArr)){return false}
  else{
  
  if (wordsArr.length===0){
    return false;
  }
  else{
    let firstIndex;
    for (let i=0;i<wordsArr;i++)
      for(let j=i+1;j<wordsArr;j++){
        if(wordsArr[i]===wordsArr[j]){
          firstIndex=wordsArr[i];
        }
      }
      return firstIndex;
  }
}
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  
}
