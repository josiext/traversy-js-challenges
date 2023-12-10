function diceGameSimulation(times) {
  const tries = [];

  for (let i = 0; i < times; i++) {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const sum = dice1 + dice2;
    let result = "roll again";

    if (sum === 7 || sum === 11) result = "win";
    if (sum === 2 || sum === 3 || sum === 12) result = "lose";

    tries.push({
      dice1,
      dice2,
      sum,
      result,
    });
  }

  return tries;
}
module.exports = diceGameSimulation;
