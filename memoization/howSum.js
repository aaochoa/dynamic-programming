// Recursive HowSum
const howSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  for (let num of numbers) {
    const reminder = targetSum - num; 
    const reminderResult = howSum(reminder, numbers); 
    if (reminderResult !== null) {
      return [...reminderResult, num];
    }
  }
  return null;
};

console.time('Recursive HowSum');
console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));
console.timeEnd('Recursive HowSum');

// Memoized HowSum
const memoizedHowSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  for (let num of numbers) {
    const reminder = targetSum - num; 
    const reminderResult = memoizedHowSum(reminder, numbers, memo); 
    if (reminderResult !== null) {
      memo[targetSum] = [...reminderResult, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
};

console.time('Memoized HowSum');
console.log(memoizedHowSum(7, [2, 3]));
console.log(memoizedHowSum(7, [5, 3, 4, 7]));
console.log(memoizedHowSum(7, [2, 4]));
console.log(memoizedHowSum(8, [2, 3, 5]));
console.log(memoizedHowSum(300, [7, 14]));
console.timeEnd('Memoized HowSum');
