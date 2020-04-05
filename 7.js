/*
Problem 7: 10001st prime
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

let MAX_NUMBER = 1000000;

let isPrime = new Array(MAX_NUMBER);

let prime = [];

function SieveOfEratosthenes() {
    for (let i = 0; i < MAX_NUMBER; i++) {
        isPrime[i] = true;
    }

    for (let i = 2; i < MAX_NUMBER; i++) {
        if (isPrime[i] == true) {
            for (let j = i * i; j < MAX_NUMBER; j = j + i) {
                isPrime[j] = false;
            }
        }
    }

    for (let i = 2; i < MAX_NUMBER; i++) {
        if (isPrime[i] == true) {
            prime.push(i);
        }
    }
}

SieveOfEratosthenes();

console.log(prime[10000]);