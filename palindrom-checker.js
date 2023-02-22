function palindrome(str) {
  const newStr = str.replace(/[^0-9a-z]/gi, "");

  const origStr = newStr.toLowerCase();
  const reversedStr = newStr.toLowerCase().split("").reverse().join("");

  if (origStr === reversedStr) return true;

  return false;
}

palindrome("A man, a plan, a canal. Panama");
