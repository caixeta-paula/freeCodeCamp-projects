function whatIsInAName(collection, source) {
  
  return collection.filter(obj => Object.keys(source).every(prop => obj[prop] == source[prop]));
 
}

whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 });

/*

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line


  collection.forEach(function(obj) {
    for (var prop in source) {
      if (!obj.hasOwnProperty(prop) && obj[prop] != source[prop]) {
        return;
      }
    }
    arr.push(obj);
  });

  // Only change code above this line
  return arr;
}

Started with this algorithm and then refactored it to the current algorithm with the help of @korzo

*/