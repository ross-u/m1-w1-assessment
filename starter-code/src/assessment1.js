// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
}

// Write a function that returns whether a given number is even

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

// Return the biggest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a >= b) {
    return a;
  }
  return b;
}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  // return Math.max(a,b,c);
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  var result = 0;
  if (numbers.length === 0) {
    return result;
  }
  for (var i = 0; i < numbers.length; i++) {
    result += numbers[i]
  }
  return result;

  ///////OR
  // var sum = 0;
  // numbers.forEach(function (number){
  //   sum += number;
  // });
  // return sum;
}

// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
  // return Math.max(...numbers);
  /////////OR
  var max = 0; //OR = -Infinity;
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
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
      //////////OR
      // strings.forEach(function(string){
      // if(string > largest.length){
      //   largest = string;
      // }
      // });
    }
  }
  return largest;
}
//forEach we can use when we do not have cond for the loop, runs for all the array, if cond, use for loop


// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  for (var i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i] === word) {
      return true;
    }
  }
  return false;
}
// if(wordsArr.includes(word)){
//   return true;
// }
// else{
// return false;
// }

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
//   if (wordsArr.length === 0) {
//     return false;
//   } else if (wordsArr.length === 1) {
//     return wordsArr[0];
//   } else {
//     var wordUnique = wordsArr.find(elem =>
//       wordsArr.indexOf(elem) === wordsArr.lastIndexOf(elem)
//     )
//     return wordUnique;
//   }
// }
//////////OR
  if (wordsArr.length === 0) {
    return false;
  } 
var uniqueStr = [];
wordsArr.forEach(function(string, index){
  //DOESNT EXIST
  if(!uniqueStr.includes(string)){
    uniqueStr.push(string);
  }
  //it is not Unique
  else if(uniqueStr.includes(string)){
  var indexOfRepeatedStr = uniqueStr.indexOf(string);
    uniqueStr.splice(indexOfRepeatedStr, 1);
  }
});
return uniqueStr[0];
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`;
}


// Return the biggest number in a two dimensional array

function maxTwoDimArray(matrix) {
//   var absoluteMax = 0;
//   for (var i = 0; i < matrix.length; i++) {
//     var maxNumInArr = maxOfArray(matrix[i]);
//     if (maxNumInArr > absoluteMax) {
//       absoluteMax = maxNumInArr;
//     }
//   }
//   return absoluteMax;
// }
////OR
var max = -Infinity;

for (var i = 0; i < matrix.length; i++) {
  var innerArray = matrix[i];

  for(var j = 0; j<innerArray.length; j++){
    if(innerArray[j] > max){
      max = innerArray[j];
    }
  }
}
return max;
}


////////////////////////
///////////////////////
///////////////////////

// // Write a function that returns the product of 2 numbers
// function product(x, y) {

// }

// // Write a function that returns whether a given number is even

// function isEven(num) {

//   }

// // Return the biggest of 2 numbers
// function maxOfTwoNumbers(a, b) {

// }

// // Return the biggest of 3 numbers
// function maxOfThreeNumbers(a, b, c) {
//   // return Math.max(a,b,c);

// }

// // Calculate the sum of an array of numbers
// function sumArray(numbers) {

// }

// // Return the biggest number of a non-empty array
// function maxOfArray(numbers) {
//     // return Math.max(...numbers);
// }


// // Return the longest string in an array
// function longestString(strings) {

// }

// // Return whether a word is in an array
// function doesWordExist(wordsArr, word) {

//   }

// // Finding the first non-duplicate word in an array
// function findUnique(wordsArr) {

//   }


// // Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
// function getFullName(personObj) {

// }


// // Return the biggest number in a two dimensional array

// function maxTwoDimArray(matrix) {

// }