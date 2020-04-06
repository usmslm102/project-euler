/*
Problem 9: Special Pythagorean triplet

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
Problem
*/

var start = new Date().getTime();
let n = 1000;

function pythagoreanTriplet(n) {

    for (let i = 2; i < n; i++) {

        for (let j = i; j < n; j++) {

            for (let k = j; k < n; k++) {

                if (i * i + j * j == k * k && i + j + k == n) {
                    console.log(i, j, k);
                    console.log(i * j * k);
                    return;
                }
            }
        }
    }
}

pythagoreanTriplet(n);


var end = new Date().getTime();
var time = end - start;
console.log('Execution time: ' + time + 'ms');