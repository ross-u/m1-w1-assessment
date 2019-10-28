// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x*y;
}

// Write a function that returns whether a given number is even

function isEven(num) {
  if (num%2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Return the biggest of 2 numbers
function maxOfTwoNumbers(a, b) {
  return Math.max(a,b);
}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  var maxNum = Math.max(a,b,c);
  if (maxNum === a) {
    return a;
  } else if (maxNum === b) {
    return b;
  } else if (maxNum === c) {
    return c;
  }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if (numbers.length != 0) {
    var sumOfArray = numbers.reduce( function(accumulator, currentValue) {
      return accumulator + currentValue;
    });
    return sumOfArray
  } else {
    return 0;
  }  
}

// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
  var highestNum = 0;
  numbers.forEach( function (element) {
    if (element > highestNum) {
      highestNum = element;
    }
  })

  return highestNum;
}

// Return the longest string in an array
function longestString(strings) {
  var longestWord = '';
  strings.forEach( function (element) {
    if (element.length > longestWord) {
      longestWord = element;
    }
  })

  return longestWord;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (wordsArr.includes(word)) {
    return true;
  } else {
    return false;
  }
}

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  
  // I should count the times the word appears, and the first time the count === 1 break the for loop and return that word with count === 1
  
  // if (wordsArr.length != 0) {
  //   var uniqueWord = '';
  //   for (var i=0;i<wordsArr.length;i++) {
  //     for (var j=i;j<wordsArr.length-i;i++) {
  //       if (wordsArr[i] != wordsArr[j]) {
  //         uniqueWord = wordsArr[i];
  //       }
  //     }
  //   }
  //   return
  // } else {
  //   return false;
  // }
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  var absoluteMax = 0;
  for (var i=0; i<matrix.length; i++) {
      var maxNumInArr = maxOfArray(matrix[i]);
      if (maxNumInArr > absoluteMax) {
        absoluteMax = maxNumInArr;
      }
  }
  return absoluteMax
}
