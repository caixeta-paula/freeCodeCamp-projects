
function findLongestWord(str) {
  var strArray = str.split(' ');
  
  var strLongest = 0;
  
  for (var i = 0; i < strArray.length; i++) {
    if (strArray[i].length > strLongest) {
      strLongest = strArray[i].length;
    }
  }
  
  return strLongest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");