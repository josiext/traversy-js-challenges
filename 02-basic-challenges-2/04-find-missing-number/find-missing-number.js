function findMissingNumber(list) {
  const minNumber = Math.min(...list);
  const maxNumber = Math.max(...list);

  let notFound = null;

  for (let i = minNumber; i <= maxNumber; i++) {
    if (!list.includes(i)) {
      notFound = i;
      break;
    }
  }

  return notFound;
}

module.exports = findMissingNumber;
