/*
Problem 10: Summation of primes

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

var start = new Date().getTime();


/**
 * step 1: Marked all numbers as true;
 * step 2: loop and maked multiple as false
 * step 3: stop when the limit is reached.
 * step 4: index with marked as true are primeNumbers
 */
let n = 2000000;
let prime = [];
let sum = 0;

function SieveOfEratosthenes(number) {

    let isPrime = new Array(number);

    for (let i = 2; i < number; i++) {
        isPrime[i] = true;
    }

    for (let i = 2; i < number; i++) {
        if (isPrime[i] == true) {
            for (let j = i * i; j < number; j = j + i) {
                isPrime[j] = false;
            }
        }
    }

    for (let i = 2; i < isPrime.length; i++) {
        if (isPrime[i] == true) {
            prime.push(i)
            sum = sum + i;
        }
    }
}

SieveOfEratosthenes(n);

console.log("sum of prime numbers under 2M: " + sum);



var end = new Date().getTime();
var time = end - start;
console.log('Execution time: ' + time + 'ms');