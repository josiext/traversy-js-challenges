function fizzBuzzArray(number) {
  const list = [];

  for (let i = 1; i <= number; i++) {
    const position = i - 1;
    if (i % 3 === 0 && i % 5 === 0) list[position] = "FizzBuzz";
    else if (i % 3 === 0) list[position] = "Fizz";
    else if (i % 5 === 0) list[position] = "Buzz";
    else list[position] = i;
  }

  return list;
}

module.exports = fizzBuzzArray;
