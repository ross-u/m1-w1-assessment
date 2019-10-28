// Write a function that returns the product of 2 numbers
function product(x, y) {
  //
  var z = x * y;
  console.log(z);
  return z;
}

// Write a function that returns whether a given number is even

function isEven(num) {
  //
  return num % 2 === 0 ;
}

// Return the biggest of 2 numbers
function maxOfTwoNumbers(a, b) {
  //
  if ( a > b ) {
    return a;
  } else {
    return b;
  }

}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  //
  if ( a > b && a > c ){
    return  a;
  } else if ( b > a && b > c ) {
    return b;
  } else if (c > a && c >b ) {
    return c;
  }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  //
  /*
  if ( indexOf.numbers[0] = 0 ) {
    return 0;
  
  } else {
  for (i = 0; i < numbers.length; i++){ */
    var sum = 0;
    sum += numbers[i];
    console.log(sum);
    return sum;
/*
  }
  }
  */
}

// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
  //
  return  Math.max.apply(null, numbers);
}

// Return the longest string in an array
function longestString(strings) {
  //
  let longest = strings[0];
  for (  i = 1; i < strings.length; i++){
    if (strings[i].lenght > longest.length){
      longest = strings[i];
    }
  }
  return longest;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  //
  if ( wordsArr.includes(word )){
    return true;

  } else {
    return false;
  }
}
// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  //
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  //
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}
