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
