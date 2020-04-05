/*
Problem 5: Smallest multiple
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

let n = 20;

for (let i = 2; i < Number.MAX_VALUE; i++) {
    for (let j = 2; j <= n; j++) {
        if (i % j != 0) {
            break;
        }
        if (j == n) {
            console.log("The smallest Number is: " + i);
            return;
        }
    }
}