const formatString = function (string) {
  let stringLength = string.split('').length;
  console.log(stringLength);

  if (stringLength > 40) {
    string = `${string.slice(0, 41)} ${'...'}`;
  }
  return string;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
