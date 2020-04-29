const formatString = function (string) {
  let stringLength = string.split('').length;
  console.log(stringLength);
  let limit;

  if (stringLength > 40) {
    limit = `${string.slice(0, 41)} ${'...'}`;
  } else {
    limit = string;
  }
  return limit;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
