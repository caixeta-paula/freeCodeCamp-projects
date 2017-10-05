
function uniteUnique(arr) {
  var result = [];
  
  for (let i = 0; i < arguments.length; i++) {
    var array = arguments[i];
    
    for (let j = 0; j < array.length; j++) {
      result.push(array[j]); // push items from each array into result
    }
  }
  
  return result.reduce(function(accum, item) {
    if (accum.indexOf(item) < 0) { // the item isn't yet present if indexOf == -1
      accum.push(item); // push that unique item
    }
    return accum;
  }, []);
  
}

uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
