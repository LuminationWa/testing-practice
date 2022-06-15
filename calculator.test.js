const calculator = require('./calculator');

test('Sum 1', () => {
    expect(calculator.sum(1, 2)).toEqual(3);
  });

test('Sum 2', () => {
    expect(calculator.sum(105, 34)).toEqual(139);
  });

test('Subtract 1', () => {
    expect(calculator.subtract(3, 2)).toEqual(1);
  });

test('Subtract 2', () => {
    expect(calculator.subtract(49, 54)).toEqual(-5);
  });

test('Divide 1', () => {
    expect(calculator.divide(4, 2)).toEqual(2);
  });

test('Divide 2', () => {
    expect(calculator.divide(26, 2)).toEqual(13);
  });

test('Multiply 1', () => {
    expect(calculator.multiply(1, 200)).toEqual(200);
  });

test('Multiply 2', () => {
    expect(calculator.multiply(20, 25)).toEqual(500);
  });