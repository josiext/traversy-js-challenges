function factorial(num) {
  if (num <= 1) return 1;

  return factorial(num - 1);
}

module.exports = factorial;
