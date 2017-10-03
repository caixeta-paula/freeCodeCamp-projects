function convertToRoman(num) {
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1], // magnitude
      romanSym = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"],
      result = [],
      count; // how many times symbols are repeated
  
  for (var i = 0; num > 0; i++) { // while the number is not evenly divisible
    count = num / decimal[i]; // divide the number by the appropriate decimal magnitude
    for (var j = 1; j <= count; j++) { // for each count (quotient times)
      result.push(romanSym[i]); // repeat the corresponding symbol
    }
    num = num % decimal[i]; // number becomes the remainder
  }
  
  return result.join("");
  
}

convertToRoman(36);
