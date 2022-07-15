// Memoized Grid Traveler
const memoizedGridTraveler = (m, n, memo = {}) => {
  const key = m + ',' + n;
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[key] = memoizedGridTraveler(m-1, n, memo) +  memoizedGridTraveler(m, n-1, memo);
  return memo[key];
};

console.time('Memoized Grid Traveler');
console.log(memoizedGridTraveler(1,1));
console.log(memoizedGridTraveler(2,3));
console.log(memoizedGridTraveler(3,1));
console.log(memoizedGridTraveler(3,3));
console.log(memoizedGridTraveler(10,10));
console.log(memoizedGridTraveler(16,16));
console.timeEnd('Memoized Grid Traveler');
