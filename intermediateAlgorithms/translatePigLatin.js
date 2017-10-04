// Refactored my original solution to learn and use regex after looking at hints

function translatePigLatin(str) {
  var regex = /[aeiou]/gi;
  
  if (str[0].match(regex)) {
    return str + "way";
  } else {
    var vowelIndex = str.indexOf(str.match(regex)[0]); // (regex)[0] is the first vowel match
    return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
  }
    
}

translatePigLatin("glove");