let findLongestWord = function (string) {
  let massive = string.split(' ');
  let longestWord = 0;

  for (let i = 1; i < massive.length; i += 1) {
    if (massive[i].length > longestWord) {
      longestWord = massive[i];
    }
  }
  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
