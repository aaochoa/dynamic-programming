// Recursive Best Sum
const bestSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  let shortestCombination = null;
  for (let num of numbers) {
    const reminder = targetSum - num;
    const remaindesCombination = bestSum(reminder, numbers);
    if (remaindesCombination !== null) {
      const combination = [...remaindesCombination, num];
      if (shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination;
      }
    }
  }
  return shortestCombination;
};

console.time('Recursive Best Sum');
console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(35, [1, 2, 5, 25]));
console.timeEnd('Recursive Best Sum');
