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

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
  return b;
  }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a > b && a > c){
    return a;
  } else if (b > a && b > c ) {
    return b;
  } else if (c > a && c > b) {
    return c;
  }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  for (let i = 0; i < numbers.length; i++){
    if (numbers = []){
      return 0;
    } else {
     return numbers[i]++;
    }
  }
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  const numbList = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > numbList[0]){
      numbList.push(i);
      return numbList[0];
    }
  }
}

// Return the longest string in an array
function longestString(strings) {
  for (let i = 0; i < strings.length; i++){
    const stringLong = [];
    if (strings =[]){
      return 0;
    } else if (strings[i].length > stringLong[0].length) {
      stringLong.push[i];
      return stringLong[0];
    }
  }
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  for (let i = 0; i < wordsArr.length; i++){
    if (wordsArr.includes(word)){
      return true;
    } else {
      return false;
    }
  }
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if (wordsArr = []) {
    return false;
  }
  for (let i = 0; i < wordsArr.length; i++){
    const wordsList = [wordsArr];
    if (wordsList.includes(i)){
      wordsList.delete(i);
    }
  } return wordslist;
}


// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} + ' ' + ${personObj.lastName}`;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[0].length; j++){
      const arrNum = [];
      if (matrix[j] > arrNum[0]) {
        arrNum.push(j);
        return arrNum;
      }
      const arr1Num = [];
      if (matrix[i] > arr1Num[0]) {
        arr1Num.push(i);
        return arr1Num;
      }
    if (arr1Num > arrNum){
      return arrNum;
    } else {
      return arr1Num;
    }
    }
  }
}
