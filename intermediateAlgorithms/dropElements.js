
function dropElements(arr, func) {
  var newArr = arr.filter(func),
      index = arr.indexOf(newArr[0]);
  
  if (newArr.length > 0) {
    return arr.slice(index, arr.length);
  } else {
    return newArr;
  }
  
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;});
