// Recursive CanSum
const canSum = (targetSum, numbers) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  for (let num of numbers) {
    const reminder = targetSum - num; 
    if (canSum(reminder, numbers) === true) return true;
  }
  return false;
};

console.time('Recursive CanSum');
console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));
console.timeEnd('Recursive CanSum');

// Memoized CanSum
const memoizedCanSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  for (let num of numbers) {
    const reminder = targetSum - num; 
    if (memoizedCanSum(reminder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};

console.time('Memoized CanSum');
console.log(memoizedCanSum(7, [2, 3]));
console.log(memoizedCanSum(7, [5, 3, 4, 7]));
console.log(memoizedCanSum(7, [2, 4]));
console.log(memoizedCanSum(8, [2, 3, 5]));
console.log(memoizedCanSum(300, [7, 14]));
console.timeEnd('Memoized CanSum');
