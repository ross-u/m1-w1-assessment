// Write a function that returns the product of 2 numbers

function product(x, y) {
	return x * y;
}
product(2, 3);

// Write a function that returns whether a given number is even

function isEven(num) {
	return num % 2 == 0 ? true : false;
}

// Return the biggest of 2 numbers

function maxOfTwoNumbers(a, b) {
	if (a > b) {
		return a;
	} else if (b > a) {
		return b;
	} else if (a < 0 && b < 0) {
		return 0;
	}
}

// Return the biggest of 3 numbers

function maxOfThreeNumbers(a, b, c) {
	return Math.max(a, b, c);
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
	return numbers.reduce(function(accum, currentValue) {
		return accum + currentValue;
	}, 0);
}

// Return the biggest number of a non-empty array

function maxOfArray(numbers) {
	return numbers.reduce(function(total, cur) {
		if (cur > total) return cur;
		return total;
	}, 0);
	return Math.max(...numbers);
}

// Return the longest string in an array

function longestString(strings) {
	return strings.reduce(function(total, curr) {
		if (total.length >= curr.length) {
			return total;
		}
		return curr;
	}, '');
}

// Return whether a word is in an array

function doesWordExist(wordsArr, word) {
	return wordsArr.includes(word);
}

// Finding the first non-duplicate word in an array
function findUnique(wordsArr) {
	if (!wordsArr.length) {
		return false;
	}
	return wordsArr.find(function(el) {
		return wordsArr.indexOf(el) === wordsArr.lastIndexOf(el);
	});
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}

function getFullName(personObj) {
	return `${personObj.firstName} ${personObj.lastName}`;
}

// Return the biggest number in a two dimensional array
function maxTwoDimArray(matrix) {
	let max = 0;
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (max < matrix[i][j]) {
				max = matrix[i][j];
			}
		}
	}
	return max;
}
