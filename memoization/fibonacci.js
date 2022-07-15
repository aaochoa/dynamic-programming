// Memoization - Fibonacci
const memoizedFib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = memoizedFib(n-1, memo) + memoizedFib(n-2, memo);
  return memo[n];
};

console.time('Memoized Fibonacci');
console.log(memoizedFib(1));
console.log(memoizedFib(2));
console.log(memoizedFib(5));
console.log(memoizedFib(10));
console.log(memoizedFib(24));
console.log(memoizedFib(42));
console.log(memoizedFib(45));
console.timeEnd('Memoized Fibonacci');
