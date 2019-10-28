// Write a function that returns the product of 2 numbers
function product(x, y) {

  return x*y;
  //
}

// Write a function that returns whether a given number is even

function isEven(num) {
  if ( num%2 === 0 ) {
    return true;
  } else { return false}
  //
}

// Return the biggest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if ( a>b){ return a;} else { return b}
  //
}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (( a>c)&&(a>b)) { return a}
  else { if (( b>a) && ( b>c)) { return b }
          else { if  ( (c>a) && ( c>b)) { return c} }
        }
  //
  }

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  var sum = 0;
  for ( var i=0; i<numbers.length ; i++){
    sum=sum + numbers[i];
  }
return sum ;

  //
}

// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
var highest=0;
for ( var i=0 ; i<numbers.length; i++) {
  if ( highest < numbers[i]) { highest = numbers[i]};
}

return highest;

  //
}

// Return the longest string in an array
function longestString(strings) {
 var longest = "";

 for ( var i=0; i<strings.length; i++){
   if ( longest.length<strings[i].length) { longest = strings[i]}
 }
  return longest;
  //
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
 var found = false ;
  for ( var i=0 ; i<wordsArr.length; i++){
    if ( word===wordsArr[i]){ found=true;}
  }
  return found;

  //
}

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
  var repeated=false;
  var norepeated="";

  for ( var i =0 ; i<wordsArr.length; i++){
    for ( var j=i+1; j<wordsArr.length ; j++ ){
      if ( wordsArr[i]=== wordsArr[j]){
            repeated=true;
            
        }
    } 
    if ( repeated===false) { norepeated=wordsArr[i]};

  }

  if ( wordsArr.length === 0 ){ return false }
  else { return norepeated; }
  
  //
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  var namecomplete = "";
  
  namecomplete=personObj.firstName+" "+personObj.lastName;
  return namecomplete;

  //
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
 var highestnumber = 0; 

 for ( var i=0; i<matrix.length; i++){
    for ( var j=0; j<matrix[i].length;  j++){
        if ( highestnumber< matrix[i][j]){
          highestnumber=matrix[i][j];
        }
    }
}

return highestnumber;

  //
}
