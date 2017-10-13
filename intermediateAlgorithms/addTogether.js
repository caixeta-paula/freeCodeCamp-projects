
function addTogether() {
  var sum = 0;
  
  if (arguments.length == 2) {
    for (let i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      
      if (typeof arg !== "number") {
        return undefined;
      } else {
        sum += arg;
      }
    }
  } else if (typeof arguments[0] === "number" && arguments.length < 2) {
    sum = arguments[0];
    
    return function addTogether() {
      if (typeof arguments[0] === "number") {
        return sum += arguments[0];
      }
    };
    
  } else {
    return undefined;
  }
  
  return sum;
  
}

addTogether("http://bit.ly/IqT6zt");
