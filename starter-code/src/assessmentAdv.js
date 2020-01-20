function product(x, y) {
    if (typeof(x) != "number" || typeof(y) != "number"){
        return false;
    } else {
        return x * y;
    }
};


function isEven(num) {
    if (num % 2 != 0) {
        return false;
    }
    return true;
}

function maxOfTwoNumbers(a, b) {
    if (a < 0 && b < 0){
      if (a > b){
        return a;
      } else if (b > a){
        return b;
        }
    } 
    if (a > b) {
        return a;
     } else {
        return b;
    }
}

function maxOfThreeNumbers(a, b, c) {
    if (isNaN(a) || isNaN(b) || isNaN(c)){
      return false
    } else if (a > b && a > c){
      return a;
    } else if (b > a && b > c ) {
      return b;
    } else {
      return c;
    }
  }

  