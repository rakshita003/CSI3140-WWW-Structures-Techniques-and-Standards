/*author:Rakshita Mathur
Student ID:300215340
Date: 2023-03-06
Couse: CSI3140
Description: Assignment 3 Question 4-JavaScript
*/

// Initialize array with all elements set to true (1)
let primes = Array(1000).fill(true);

// Set first two elements (0 and 1) to false (0) since they are not prime
primes[0] = primes[1] = false;

// Loop through remaining elements and set all multiples to false
for (let i = 2; i <= Math.sqrt(1000); i++) {
  if (primes[i]) {
    for (let j = i * i; j < 1000; j += i) {
      primes[j] = false;
    }
  }
}

// Output prime numbers between 1 and 999
let count = 0;
let primesList = document.getElementById("primes-list");
for (let i = 2; i < 1000; i++) {
  if (primes[i]) {
    count++;
    let li = document.createElement("li");
    li.textContent = i;
    primesList.appendChild(li);
  }
}

// Output number of prime numbers found
console.log(`Found ${count} prime numbers between 1 and 999`);
