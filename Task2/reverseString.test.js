const reverseaString = require('./reverseString.js');

test('man sould be reverse as nam', () => {
  expect(reverseaString('man')).toBe('nam');
});