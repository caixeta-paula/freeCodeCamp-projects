function rot13(str) { // LBH QVQ VG!
  var strArr = [];
  
  for (var i = 0; i < str.length; i++) {
    var char = str.charCodeAt(i); // represents Unicode value for each character in the string
    
    if (char < 65 || char > 90) { // keep the spaces, only work between A and Z
      strArr.push(str[i]);
    } else if (char < 78) { // if the character is before N
      strArr.push(String.fromCharCode(char + 13));
    } else { // if the character is N or after
      strArr.push(String.fromCharCode(char - 13));
    }
  }
  
  return strArr.join(""); // convert array to string
  
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");