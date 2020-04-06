/*
Problem 6: Sum square difference
The sum of the squares of the first ten natural numbers is,
1^2+2^2+...+10^2=385

The square of the sum of the first ten natural numbers is,
(1+2+...+10)^2=55^2=3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025−385=2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

var start = new Date().getTime();

let n = 100;

let sumOfIndividualSqaure = 0;
let sumOfAll = 0;
//Find squares of indiviual number

for (let i = 1; i <= n; i++) {
    sumOfIndividualSqaure += i * i;
    sumOfAll += i;
}


console.log((sumOfAll * sumOfAll) - sumOfIndividualSqaure)

var end = new Date().getTime();
var time = end - start;
console.log('Execution time: ' + time + 'ms');