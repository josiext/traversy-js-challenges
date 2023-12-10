function titleCase(text) {
  return text
    .split(" ")
    .map((c) => c[0].toUpperCase() + c.slice(1))
    .join(" ");
}

module.exports = titleCase;
