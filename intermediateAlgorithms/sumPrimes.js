// Created my own algorithm based on the Sieve of Eratosthenes, and it worked! :O
function sumPrimes(num) {
  var sum = 0,
      count = [],
      increment = 0,
      prime;
      
  for (let i = 2; i <= num; i++) { // starting from the first prime, 2,
    count.push(i);  // push all numbers into array up to and including num
  }
  
  prime = count[increment]; // set to first prime in array
  
  while (increment < count.length) {
    for (let i = 2; i <= count.length; i++) {
      var multiple = prime * i; // multiple of the prime number
      var index = count.indexOf(multiple); // index of multiple
      if (index > 0) { // if the multiples are present in the array
        count.splice(index, 1); // remove the multiples
      }
    }
    increment++; 
    prime = count[increment]; // prime becomes the next biggest prime in the array
  }
    
  for (let i = 0; i < count.length; i++) {
    sum += count[i]; // sum the prime numbers in the array
  } 
  
  return sum;
}

sumPrimes(977);
