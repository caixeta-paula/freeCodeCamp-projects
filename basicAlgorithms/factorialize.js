function factorialize(num) {
  var numResult = 1;
  
  for (var i = 1; i <= num; i++) {
    numResult *= i;
  }
  
  return numResult;
}

factorialize(5);