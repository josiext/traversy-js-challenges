function areAllCharactersUnique(text) {
  text = text.split("");

  let isAllUnique = true;
  text.forEach((char, i) => {
    if (text.lastIndexOf(char) !== i) isAllUnique = false;
  });

  return isAllUnique;
}

module.exports = areAllCharactersUnique;
