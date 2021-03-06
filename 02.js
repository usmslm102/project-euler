/*
Problem 2: Even Fibonacci numbers
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/

var start = new Date().getTime();

let a = 0;
let b = 1;
let sum = 0;
let z = 0;

while (z <= 4000000) {
    z = a + b;
    a = b;
    b = z
    if (z % 2 == 0) {
        sum += z;
    }
}
console.log(sum);


var end = new Date().getTime();
var time = end - start;
console.log('Execution time: ' + time + 'ms');