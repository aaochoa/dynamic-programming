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
