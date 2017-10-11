function steamrollArray(arr) {
  var flattened = []; 
  
  // using recursion
  function flatten(array, newArray) {
    for (let i = 0; i < array.length; i++) { // for each item in the given array
      if (Array.isArray(array[i]) === false) { // if the item is not an array, push to new array
        newArray.push(array[i]);
      } else { // otherwise, start again to flatten it further
        flatten(array[i], newArray);
      }
    }
  }
  
  flatten(arr, flattened);
  
  return flattened;
}

steamrollArray([1, [2], [3, [[4]]]]);

