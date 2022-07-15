// Recursive CountConstruct
const countConstruct = (target, wordBank) => {
  if (target === '') return 1;
  let totalCount = 0;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const numWays = countConstruct(suffix, wordBank);
      totalCount += numWays;
    }
  }
  return totalCount;
};

console.time('Recursive CountConstruct');
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
  'e', 
  'ee', 
  'eee', 
  'eeee', 
  'eeeee',
  'eeeeee'
]));
console.timeEnd('Recursive CountConstruct');
