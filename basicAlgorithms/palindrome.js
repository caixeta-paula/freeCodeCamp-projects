
function palindrome(str) {
  var strTest = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  var strLast = strTest.length - 1;
  
  for (var i = 0; i < strTest.length / 2; i++) {
    if (strTest[i] !== strTest[strLast - i]) {
      return false;
    }
  }
  
  return true;

}

palindrome("1 eye for of 1 eye.");