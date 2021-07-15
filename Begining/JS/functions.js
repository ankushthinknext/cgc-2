//function definition

/**
 *
 * @param {Number} number
 * @description This function will check if a number is even or not
 * @returns {Boolean}
 */
let isEven = (number) => number % 2 === 0;

/**
 *
 * @param {Number} number
 * @description return the square of a number
 * @returns {Number}
 */

let square = (number) => number ** 2;

let isEligible = (age) => age >= 18;

/**
 *
 * @param {Number} divident
 * @param {Number} divisor
 * @description checks if a number is divisble or not
 * @returns {Boolean}
 */
let isDivisible = (divident, divisor) => divident % divisor === 0;

/**
 *
 * @param {Number} number
 * @description if a numeber is prime or not
 * @returns {Boolean}
 */
let isPrime = (number) => {
	for (let i = 2; i < number; i++) if (isDivisible(number, i)) return false;
	return true;
};
function primeSeries(limit) {
	for (let i = 3; i <= limit; i++) {
		if (isPrime(i)) console.log(i);
	}
}

function sum(number1, number2) {
	if (
		isFinite(number1) &&
		isFinite(number) &&
		typeof number1 === "number" &&
		typeof number2 === "number" &&
		arguments.length === 2
	) {
		return number1 + number2;
	}
	throw new Error("INvalid arguments....");
}

function reverseTheNumber(number) {
	let reverseNumber = 0;
	while (number > 0) {
		let digit = number % 10; //extract last digit
		reverseNumber = reverseNumber * 10 + digit;
		number = Math.floor(number / 10); //reduce the number
	}
	return reverseNumber;
}

function isPalindrome(number) {
	return number === reverseTheNumber(number);
}

function palindromeNumbers(limit) {
	for (let i = 10; i <= limit; i++) {
		if (isPalindrome(i)) console.log(i);
	}
}
function sortArrayofObject(array, key, sortOrder) {}

export { isPalindrome, reverseTheNumber, isDivisible, isPrime };
