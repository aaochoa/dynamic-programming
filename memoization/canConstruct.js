// Memoized Can Construct
const memoizedCanConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return true;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (memoizedCanConstruct(suffix, wordBank, memo) === true) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false; 
};

console.time('Memoized Can Construct');
console.log(memoizedCanConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(memoizedCanConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(memoizedCanConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(memoizedCanConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
  'e', 
  'ee', 
  'eee', 
  'eeee', 
  'eeeee',
  'eeeeee'
]));
console.timeEnd('Memoized Can Construct');
