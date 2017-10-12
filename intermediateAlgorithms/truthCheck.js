
function truthCheck(collection, pre) {
  
  for (let i = 0; i < collection.length; i++) {
    var obj = collection[i];
    
    if (!obj.hasOwnProperty(pre)) {
      return false;
    } else if (obj[pre] !== obj[pre]) {
      return false;
    }
    
    switch (obj[pre]) {
      case "":
      case null:
      case undefined:
      case 0:
        return false;
    }
  }
  
  return true;
}

truthCheck([{"single": "double"}, {"single": NaN}], "single");
