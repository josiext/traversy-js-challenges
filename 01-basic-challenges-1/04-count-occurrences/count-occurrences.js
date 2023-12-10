function countOccurrences(str, character) {
  return [...str].filter((c) => c === character).length;
}

module.exports = countOccurrences;
