
function fearNotLetter(str) {
  var firstChar = str.charCodeAt(0); // integer code of first character
      
  for (let i = 1; i < str.length; i++) { // loop through the string
    if (str.charCodeAt(i) != firstChar + i) { // if current character's code is not sequential
      return String.fromCharCode(firstChar + i); // return the missing sequential character
    }
  }
  
  return undefined;
}

fearNotLetter("abce");
