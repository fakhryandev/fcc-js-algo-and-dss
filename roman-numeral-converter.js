function convertToRoman(num) {
  const romanKeys = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  const keys = Object.keys(romanKeys).reverse();

  let result = "";

  keys.forEach((key) => {
    while (key <= num) {
      result += romanKeys[key];
      num -= key;
    }
  });

  return result;
}

convertToRoman(36);
