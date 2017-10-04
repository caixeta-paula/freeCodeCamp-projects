
function pairElement(str) {
  var strArr = str.split("");
  var pairedArr = [];
  
  var map = { A:"T", T:"A", G:"C", C:"G"};
  
  strArr.forEach(element => pairedArr.push([element, map[element]]));
  
  return pairedArr;
}

pairElement("GCG");
