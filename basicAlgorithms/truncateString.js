
function truncateString(str, num) {
  // Clear out that junk in your trunk
  var truncStr = "";
  
  if (str.length > num && num > 3) {
    truncStr = str.slice(0, num - 3) + "...";
    return truncStr;
  } else if (str.length > num && num <= 3) {
    truncStr = str.slice(0, num) + "...";
    return truncStr;
  } else {
    return str;
  }
  
}

truncateString("A-", 1);
