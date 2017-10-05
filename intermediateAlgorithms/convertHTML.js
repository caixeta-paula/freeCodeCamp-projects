
function convertHTML(str) {
  var map = { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', '\'':'&apos;'},
      newStr = [];
      
      
  str.split("").forEach(function(element) {
    for (var key in map) {
      if (element == key) {
        element = map[key];
      }
    }
    newStr.push(element);
  });
  
  return newStr.join("");
}

convertHTML("Dolce & Gabbana>");
