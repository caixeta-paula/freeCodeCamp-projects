
function spinalCase(str) {
  var regex1 = new RegExp(/[^A-Za-z]/g);
  var regex2 = new RegExp(/[A-Z]*[^A-Z_\s]+/g);
  
  return str.match(regex2).join(" ").toLowerCase().replace(regex1, "-");
}

spinalCase("The_Andy_Griffith_Show");