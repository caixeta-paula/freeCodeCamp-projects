// FIRST ATTEMPT
function smallestCommons(arr) {
  var allNums = [];
      arrMax = Math.max(arr[0], arr[1]), // largest number
      arrMin = Math.min(arr[0], arr[1]), // smallest number
      multiple = 0,
      smallest = 0;
  
  for (let i = arrMin; i <= arrMax; i++) {
    allNums.push(i); // create the range of numbers
  }
  
  allNums = allNums.reverse(); // order array from greatest to least
  multiple = allNums[0] * allNums[1]; // product of the two first/largest numbers in the range
  smallest = multiple;
  
  for (let i = 2; i < allNums.length; i++) { // for the rest of the numbers in the range
    while (smallest % allNums[i] !== 0) { // if the product is not evenly divisible
      smallest += multiple; // continue multiplying
      i = 1; // reset the counter
    }
  }
  
  return smallest; // least common multiple
}

// SECOND ATTEMPT to make it prettier

function smallestCommons(arr) {
  var max = Math.max(arr[0], arr[1]), // largest number in array
      min = Math.min(arr[0], arr[1]), // smallest number
      lcm = min; // starting value
  
  var getGCD = (a, b) => a % b === 0 ? b : getGCD(b, a % b); // ternary operator, '?'' is like an if condition, ':'' is else
  
  for (let i = min; i < max; i++) {
    var gcd = getGCD(lcm, i + 1);
    lcm *= (i + 1) / gcd; // current multiple times the next number in range, divided by gcd
  }
  
  return lcm; // result, least common multiple
}


smallestCommons([5,1]); 

