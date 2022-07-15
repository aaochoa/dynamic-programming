// Memoized Best Sum
const memoizedBestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  let shortestCombination = null;
  for (let num of numbers) {
    const reminder = targetSum - num;
    const remaindesCombination = memoizedBestSum(reminder, numbers, memo);
    if (remaindesCombination !== null) {
      const combination = [...remaindesCombination, num];
      if (shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination;
      }
    }
  }
  memo[targetSum] = shortestCombination;
  return shortestCombination;
};

console.time('Memoized Best Sum');
console.log(memoizedBestSum(7, [5, 3, 4, 7]));
console.log(memoizedBestSum(8, [2, 3, 5]));
console.log(memoizedBestSum(8, [1, 4, 5]));
console.log(memoizedBestSum(100, [1, 2, 5, 25]));
console.timeEnd('Memoized Best Sum');