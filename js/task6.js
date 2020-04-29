let total = 0;
const numbers = [];
do {
  let input = prompt('Введи число');
  if (input === null) {
    for (const number of numbers) {
      total += number;
    }
    console.log(`общая сумма чисел равна ${total}`);

    break;
  }
  input = Number(input);

  // -------------------для запрета попадания NaN в массив
  const notANumber = Number.isNaN(input);

  if (notANumber) {
    console.log(notANumber);
    continue;
  }
  // -----------------------------------------------------------
  numbers.push(input);
  console.log(numbers);
} while (true);
