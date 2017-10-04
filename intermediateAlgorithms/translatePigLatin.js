
function translatePigLatin(str) {
  var cluster = str.slice(0,2);
  
  switch (str[0]) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return str + "way";
  }
  
  if (str[1] != "a" && str[1] != "e" && str[1] != "i" && str[1] != "o" && str[1] != "u") {
    return str.slice(2) + cluster + "ay";
  } else {
    return str.slice(1) + str[0] + "ay";
  }
  
}

translatePigLatin("glove");
