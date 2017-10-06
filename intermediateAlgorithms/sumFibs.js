function sumFibs(num) {
  var prev = 0, 
      current = 1,
      temp = 0,
      sum = 0;
  
  while (current <= num) { // while the current/second number is less than or equal to the input
    if (current % 2 !== 0) { // and current is an odd number
      sum += current; // add current/odd number to sum
    }
    temp = prev; // set to original first number
    prev = current; // set to the next number in sequence
    current = temp + current; // becomes the sum of the first two numbers
  }
  
  return sum;
}

sumFibs(1000);
