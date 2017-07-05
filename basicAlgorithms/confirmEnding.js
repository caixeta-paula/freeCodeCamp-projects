
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var targetLength = target.length;
  
  if (str.substr(-targetLength, targetLength) !== target) {
    return false;
  }
  
  return true;
  
}

confirmEnding("Bastian", "n");