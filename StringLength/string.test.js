const stringLength = require('./string.js');

test('man is eqaul to 3', () => {
  expect(stringLength('man')).toBe(3);
});

test('If the string is empty', () => {
  expect(() => {
    stringLength('');
  }).toThrow('invalid string');
});

test('If the string is more than 10', () => {
  expect(() => {
    stringLength('abandonable.');
  }).toThrow('Invalid string');
});
