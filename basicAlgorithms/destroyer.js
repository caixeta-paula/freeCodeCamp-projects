function destroyer(arr) {
  // Remove all the values
  // arr is automatically the first argument: the array that we need to change
  
  var args = Array.from(arguments).slice(1);
  return arr.filter(function(value) {
    return !args.includes(value);
  });
  
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);