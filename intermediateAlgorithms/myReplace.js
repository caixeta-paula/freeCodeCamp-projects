function myReplace(str, before, after) {
  
  var beforeLetter = before[0];
  var afterLetter;
  
  if (beforeLetter.toUpperCase() === beforeLetter) {
    afterLetter = after[0].toUpperCase();
  } else {
    afterLetter = after[0].toLowerCase();
  }
  
  afterLetter += after.slice(1);
  
  return str.replace(before, afterLetter);
}