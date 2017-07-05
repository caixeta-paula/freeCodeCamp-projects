
function titleCase(str) {
  var strArray = str.split(' ');
  
  for (var i = 0; i < strArray.length; i++) {
    strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].substr(1).toLowerCase();
  }
  
    strArray = strArray.join(' ');
    return strArray;  
  
}

titleCase("I'm a little tea pot");