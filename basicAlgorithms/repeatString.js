
function repeatStringNumTimes(str, num) {
  // repeat after me
  var repeatStr = "";
  
  for (var i = 0; i < num; i++) {
    if (num < 0) {
      return "";
    } else {
      repeatStr += str;
    }
  }
  
  return repeatStr;
}

repeatStringNumTimes("abc", 3);
