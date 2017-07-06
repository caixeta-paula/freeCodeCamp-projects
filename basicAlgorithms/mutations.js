
function mutation(arr) {
  
  var secondStr = arr.splice(1).toString().toLowerCase();
  var firstStr = arr.toString().toLowerCase();
  
  for (var i = 0; i < secondStr.length; i++) {
    if (firstStr.indexOf(secondStr.charAt(i)) == -1) {
      return false;
    } 
  }
  
  return true;
}

mutation(["Hello", "Hey"]);