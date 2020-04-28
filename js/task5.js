const checkForSpam = function (message) {
  let words = message.split(' ');
  console.log(words);
  for (const word of words) {
    console.log(word);
    if (word.toLowerCase() === 'sale' || word.toLowerCase() === 'spam') {
      return true;
    }
    return false;
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
