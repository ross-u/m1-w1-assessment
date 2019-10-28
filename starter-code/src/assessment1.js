// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
}


// Write a function that returns whether a given number is even
function isEven(num) {
  if(num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}


// Return the biggest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}


// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
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
  var sum = 0;
  numbers.forEach(function(num) {
    sum += num;
  })
  return sum;
}


// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
  if(numbers.length > 0) {
    numbers.sort(function(a, b) { return b - a; });
    return numbers[0];
  }
}


// Return the longest string in an array
function longestString(strings) {
  strings.sort(function (a,b) { return b.length - a.length; });
  return strings[0];
}


// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if(wordsArr.includes(word)) {
    return true;
  } else {
    return false;
  }
}


// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {

  
  if(wordsArr[0] === undefined) { // return false if the first argument is an empty array  
    return false;
  } 
  else {
    // loop on the array of words
    for(var i = 0; i < wordsArr.length; i++) {
      // create a variable for first unique word initialized as the current word, and a count variable
      var currentWord = wordsArr[i];
      var firstUnique = 0; //0: true and 1: false
     
      // 
      for(var j = 0; j < wordsArr.length; j++) {
        if(j == i) { // if same word, skip
          continue; 
        }
        if((wordsArr[j] == currentWord)) { // if current word finds an occurence, set to false (this is not a unique word)
          firstUnique = 1; 
        }
      } // end of inner for loop

      if(firstUnique === 0) { // if true
        //console.log(firstUniqueWord);
        var firstUniqueWord = currentWord;
        return firstUniqueWord; // return the current word that has unique value
      }
    } // end of outer for loop
   } // end of else
}
//console.log(findUnique(stringsArr));


// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return personObj.firstName + ' ' + personObj.lastName;
}


// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  if (typeof matrix !== 'object' || matrix.length === 0){
    return false;
  } 
  else {
    var newArray = [];
    matrix.forEach(function(obj) {
      highestObjNum = obj.sort(function(a,b) { return b - a});
      newArray.push(highestObjNum)
      //console.log(newArray);
    });
    
    newArray.sort(function (a,b) { return b[0] - a[0]});
    return newArray[0][0];
  }
}