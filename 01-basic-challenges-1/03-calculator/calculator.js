function calculator(a, b, operator) {
  if (operator == "+") return a + b;
  if (operator == "-") return a - b;
  if (operator == "*") return a * b;
  if (operator == "/") return a / b;
  throw new Error("Invalid operator");
}

module.exports = calculator;
