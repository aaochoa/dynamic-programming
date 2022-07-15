// Recursiva CanConstruct
const canConstruct = (target, wordBank) => {
  if (target === '') return true;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank) === true) return true;
    }
  }
  return false; 
};

console.time('Recursive CanConstruct');
console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']))
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
  'e', 
  'ee', 
  'eee', 
  'eeee', 
  'eeeee',
  'eeeeee'
]));
console.timeEnd('Recursive CanConstruct');

// Memoized CanConstruct
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

console.time('Recursive MemoizedCanConstruct');
console.log(memoizedCanConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
console.log(memoizedCanConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']))
console.log(memoizedCanConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']))
console.log(memoizedCanConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
  'e', 
  'ee', 
  'eee', 
  'eeee', 
  'eeeee',
  'eeeeee'
]));
console.timeEnd('Recursive MemoizedCanConstruct');
