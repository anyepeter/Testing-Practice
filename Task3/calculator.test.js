const Calculator = require('./calculator.js');

describe('The add method:', () => {
  test('Adding 1 + 1 should equal 2', () => {
    // Arrange
    const a = 1;
    const b = 1;
    const output = 2;

    // Act
    const result = Calculator.add(a, b);

    // Asserts
    expect(result).toEqual(output);
  });

  test('Adding 10 + 10 should equal 20', () => {
    // Arrange
    const a = 10;
    const b = 10;
    const output = 20;

    // Act
    const result = Calculator.add(a, b);

    // Asserts
    expect(result).toEqual(output);
  });

  test('Adding 13 + 11 + 10 should equal 34', () => {
    // Arrange
    const a = 13;
    const b = 11;
    const c = 10;
    const output = 34;

    // Act
    const result = Calculator.add(a, b, c);

    // Asserts
    expect(result).toEqual(output);
  });
});

describe('The subtract method:', () => {
  test('Subtracting 1 - 1 should equal 0', () => {
    // Arrange
    const a = 1;
    const b = 1;
    const outputSub = 0;

    // Act
    const result = Calculator.subtract(a, b);

    // Asserts
    expect(result).toEqual(outputSub);
  });

  test('Subtracting 5 - 10 should equal -5', () => {
    // Arrange
    const a = 5;
    const b = 10;
    const outputSub = -5;

    // Act
    const result = Calculator.subtract(a, b);

    // Asserts
    expect(result).toEqual(outputSub);
  });

  test('Subtracting 13 - 11 - 1 should equal 1', () => {
    // Arrange
    const a = 13;
    const b = 11;
    const c = 1;
    const output = 1;

    // Act
    const result = Calculator.subtract(a, b, c);

    // Asserts
    expect(result).toEqual(output);
  });
});

describe('The divide method:', () => {
  test('Dividing 1 / 1 should equal 1', () => {
    // Arrange
    const a = 1;
    const b = 1;
    const output = 1;

    // Act
    const result = Calculator.divide(a, b);

    // Asserts
    expect(result).toEqual(output);
  });

  test('Dividing 3 / 2 should equal 1.5', () => {
    // Arrange
    const a = 3;
    const b = 2;
    const output = 1.5;

    // Act
    const result = Calculator.divide(a, b);

    // Asserts
    expect(result).toEqual(output);
  });

  test('Dividing 13 / 0 should produce Invalid Division! Error', () => {
    // Arrange
    const a = 15;
    const b = 0;
    const output = 'Invalid Division!';

    // Act

    // Asserts
    expect(() => Calculator.divide(a, b)).toThrow(output);
  });
});

describe('The multiply method:', () => {
  test('multiplying 1 * 1 should equal 1', () => {
    // Arrange
    const a = 1;
    const b = 1;
    const output = 1;

    // Act
    const result = Calculator.multiply(a, b);

    // Asserts
    expect(result).toEqual(output);
  });

  test('multiplying 10 * 10 should equal 100', () => {
    // Arrange
    const a = 10;
    const b = 10;
    const output = 100;

    // Act
    const result = Calculator.multiply(a, b);

    // Asserts
    expect(result).toEqual(output);
  });

  test('multiplying 2 * 2 * 2 should equal 8', () => {
    // Arrange
    const a = 2;
    const b = 2;
    const c = 2;
    const output = 8;

    // Act
    const result = Calculator.multiply(a, b, c);

    // Asserts
    expect(result).toEqual(output);
  });
});
