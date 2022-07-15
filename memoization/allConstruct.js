// Memoized All Construct
const memoizedAllConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return [[]];
  const result = [];
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = memoizedAllConstruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map(way => [word, ...way, ]);
      result.push(...targetWays); 
    }
  }
  memo[target] = result;
  return result;
};

console.time('Memoized All Construct');
console.log(memoizedAllConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));
console.log(memoizedAllConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(memoizedAllConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(memoizedAllConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(memoizedAllConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
  'e', 
  'ee', 
  'eee', 
  'eeee', 
  'eeeee',
  'eeeeee'
]));
console.timeEnd('Memoized All Construct');
