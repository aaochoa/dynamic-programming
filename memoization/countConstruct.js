// Memoized Count Construct
const memoizedCountConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return 1;
  let totalCount = 0;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const numWays = memoizedCountConstruct(suffix, wordBank, memo);
      totalCount += numWays;
    }
  }
  memo[target] = totalCount
  return totalCount;
};

console.time('Memoized Count Construct');
console.log(memoizedCountConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(memoizedCountConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(memoizedCountConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(memoizedCountConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
  'e', 
  'ee', 
  'eee', 
  'eeee', 
  'eeeee',
  'eeeeee'
]));
console.timeEnd('Memoized Count Construct');
