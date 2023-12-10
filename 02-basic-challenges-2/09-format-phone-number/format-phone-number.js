function formatPhoneNumber(list) {
  let format = "(";

  for (let i = 0; i < list.length; i++) {
    if (i === 3) format += ") ";
    if (i === 6) format += "-";

    format += list[i];
  }

  return format;
}

module.exports = formatPhoneNumber;
