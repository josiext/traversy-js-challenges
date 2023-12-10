function isPalindrome(text) {
  text = text.replaceAll(" ", "").toLowerCase();
  text = text.replaceAll(",", "");

  return text === [...text].reverse().join("");
}

module.exports = isPalindrome;
