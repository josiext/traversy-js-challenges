function countVowels(text) {
  return [...text.toLowerCase()].filter((c) => c.match(/[aeiou]/)).length;
}

module.exports = countVowels;
