function largestOfFour(arr) {
  // You can do this!
  var newArray = [];
  
  for (var i = 0; i < arr.length; i++) {
    var subArray = arr[i];
    for (var j = 0; j < subArray.length; j++) {
      subArray.sort(function(a, b) {
        return b - a;
      });
    }
    newArray.push(subArray[0]);
  }

  return newArray;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);