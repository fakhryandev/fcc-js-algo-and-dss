function rot13(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (alphabet.indexOf(str[i]) == -1) {
      result += str[i];
    } else {
      let charIndex = alphabet.indexOf(str[i]);
      let finalIndex = (charIndex + 13) % alphabet.length;

      result += alphabet[finalIndex];
    }
  }

  return result;
}

rot13("SERR PBQR PNZC");
