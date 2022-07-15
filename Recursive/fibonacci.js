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
