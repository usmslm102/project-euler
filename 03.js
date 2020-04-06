/*
Problem 3: Largest prime factor
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

var start = new Date().getTime();

let n = 600851475143;

let primeFactor = [];

while (n % 2 == 0) {
    primeFactor.push(2);
    n = n / 2;
}
console.log("The n is"+ n);

for (let i = 3; i <= n; i++) {
    while (n % i == 0) {
        primeFactor.push(i);
        n = n / i;
    }
}

if (n > 2) {
    primeFactor.push(n)
}

console.log(primeFactor);

var end = new Date().getTime();
var time = end - start;
console.log('Execution time: ' + time + 'ms');