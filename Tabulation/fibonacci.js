// Tabulated Fibonacci
const tabulatedFib = (n) => {
  const table = Array(n+1).fill(0);
  table[1] = 1; 
  for (let i = 0; i <= n; i++) {
    table[i+1] += table[i];
    table[i+2] += table[i];
  }
  return table[n];
};

console.time('Tabulated Fibonacci');
console.log(tabulatedFib(1));
console.log(tabulatedFib(2));
console.log(tabulatedFib(5));
console.log(tabulatedFib(10));
console.log(tabulatedFib(24));
console.log(tabulatedFib(42));
console.log(tabulatedFib(45));
console.timeEnd('Tabulated Fibonacci');
