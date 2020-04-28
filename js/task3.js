let findLongestWord = function (string) {
  let massive = string.split(' ');
  console.log(massive);
  let word = massive[0].length;
  let longestWord;

  for (let i = 1; i < massive.length; i += 1) {
    if (massive[i].length > word) {
      longestWord = massive[i];
      return longestWord;
    }
  }
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
