// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
}

// Write a function that returns whether a given number is even

function isEven(num) {
  if (num % 2 === 1) {
    return false;
  } else {
    return true;
  }
}

// Return the biggest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else return b;
}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (a < b && b > c) {
    return b;
  } else {
    return c;
  }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  // we need to declare result such as integer.
  var result = 0;
  numbers.forEach(element => {
    result +=element; 
    console.log(result);
    
  });
  return result;
}


function isAnEmptyArray(array) {
  return array.length === 0;
}
// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
  var result = 0;
  if(!isAnEmptyArray(numbers)){
    numbers.forEach(element => {
      if(result < element){
        result = element;
      }
    });
    console.log(result);
    
    return result;
  }
  //
}

// Return the longest string in an array
function longestString(strings) {
  var long = " ";
  if(!isAnEmptyArray(strings)){
    for (let i = 0; i < strings.length; i++) {
      if(strings[i].length > long.length){
        long = strings[i];
      }
    }
    return long;
  }else{
    return false;
  }
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if(!isAnEmptyArray(wordsArr)){
    if(wordsArr.includes(word)){
      return true;
    } else{
      return false;
    }
  }
}

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  var sameWord;
  if(!isAnEmptyArray){
    for (var x = 0; x < wordsArr.length; x++) {
      sameWord = 0;
      for (var y = 0; y < wordsArr.length; y++) {
        if (wordsArr[x] === wordsArr[y]) {
          sameWord+= 1;
        }
      }
      if (sameWord < 2) {
        result = wordsArr[x];
        break;
      }
  }
}else{
    return false;
  }
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return  personObj["firstName"]+ " "+personObj["lastName"];
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  var firstArray  = 0;
  var secondArray = 0;
  var ThirdArray = 0;
  var result  = 0;
  
  firstArray = maxOfArray(matrix[0]);
  secondArray = maxOfArray(matrix[1]);
  ThirdArray = maxOfArray(matrix[2]);

  result =  maxOfThreeNumbers(firstArray, secondArray, ThirdArray);

  return result;

}
