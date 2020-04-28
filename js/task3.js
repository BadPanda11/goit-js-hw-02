let findLongestWord = function (string) {
  let massive = string.split(' ');
  let word = massive[0];

  for (let i = 1; i < massive.length; i += 1) {
    if (massive[i].length > word.length) {
      word = massive[i];
    }
  }
  return word;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
