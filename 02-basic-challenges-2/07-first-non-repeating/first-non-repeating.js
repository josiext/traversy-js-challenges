function findFirstNonRepeatingCharacter(text) {
  text = text.split("");

  let firstNonRepeating = null;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (text.lastIndexOf(char) === i && text.indexOf(char) === i) {
      firstNonRepeating = char;
      break;
    }
  }

  return firstNonRepeating;
}

module.exports = findFirstNonRepeatingCharacter;
