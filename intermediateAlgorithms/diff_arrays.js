
function diffArray(arr1, arr2) {
  var newArr = [];
  
  newArr = arr1.concat(arr2).filter(function(element) {
    if (arr1.indexOf(element) == -1 || arr2.indexOf(element) == -1) {
      return element;
    }
  });
  
  return newArr;
}