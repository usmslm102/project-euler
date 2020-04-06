/*
Problem 4: Largest palindrome product
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

var start = new Date().getTime();

function reverseNumber(num) {
    return parseInt(num.toString().split("").reverse().join(""));
}

function IsPalindrom(n) {
    let reversedNumber = reverseNumber(n);
    return n === reversedNumber;

}

let largestPalindrom = 0;

for (let i = 999; i >= 100; i--) {
    for (j = 999; j >= 100; j--) {
        let product = i * j;
        if (IsPalindrom(product)) {
            if (product > largestPalindrom) {
                largestPalindrom = product;
            }
        }
    }
}

console.log("Largest Palindrom of 2 three digit product is: " + largestPalindrom);

var end = new Date().getTime();
var time = end - start;
console.log('Execution time: ' + time + 'ms');