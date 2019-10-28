// Write a function that returns the product of 2 numbers
function product(x, y) {
    var product = x * y;
    return product;
}

// Write a function that returns whether a given number is even

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }

    if (num % 2 !== 0) {
        return false;
    }


}

// Return the biggest of 2 numbers
function maxOfTwoNumbers(a, b) {
    var higherNum = Math.max(a, b);
    return higherNum;
}

// Return the biggest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
    var higherNum = Math.max(a, b, c);
    return higherNum;
}

// Calculate the sum of an array of numbers

function sumArray(numbers) {
    let total = 0;
    for (i = 0; i < numbers.length; i++) {
        total += numbers[i];


    }

    return total;
}



// Return the biggest number of a non-empty array
function maxOfArray(numbers) {
    if (numbers.length === 0) {
        return `The array is empty`;
    } else {

        var newArr = 0;

        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] > newArr) {
                newArr = numbers[i]
            }


        }

        return newArr;
    }


}

// Return the longest string in an array
function longestString(strings) {
    var longestWord = 0;
    for (let i = 0; i < strings.length; i++) {
        if (strings[i] > longestWord) {
            strings[i] = longestWord;
        }
    }
    return strings[i];

}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
    for (let i = 0; i < wordsArr.length; i++) {
        if (wordsArr[i].includes(word)) {
            return true;
        } else { return false; }
    }
}


// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
    for (let i = 0; i < wordsArr.length; i++) {
        if (wordsArr[i] === wordsArr)


    }

}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
    var firstName = personObj.firstName;
    var lastName = personObj.lastName;

    var fullName = personObj.firstName + " " + personObj.lastName;
    return fullName;
}


// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {

}