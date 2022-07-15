// Recursive Fibonacci
const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n-1) + fib(n-2);
};

console.time('Recursive Fibonacci');
console.log(fib(1));
console.log(fib(2));
console.log(fib(5));
console.log(fib(10));
console.log(fib(24));
console.log(fib(42));
console.log(fib(45));
console.timeEnd('Recursive Fibonacci');

// Memoization - Fibonacci
const memoizedFib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = memoizedFib(n-1, memo) + memoizedFib(n-2, memo);
  return memo[n];
};

console.time('Memoized Fibonacci');
console.log(fib(1));
console.log(fib(2));
console.log(fib(5));
console.log(fib(10));
console.log(fib(24));
console.log(fib(42));
console.log(memoizedFib(45));
console.timeEnd('Memoized Fibonacci');
