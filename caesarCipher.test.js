const caesarCipher = require('./caesarCipher');

test('Test 1', () => {
    expect(caesarCipher('zoe', 1)).toMatch('apf');
  });

test('Test 2', () => {
    expect(caesarCipher('abc', 2)).toMatch('cde');
  });

test('Test 3', () => {
    expect(caesarCipher('abc', 4)).toMatch('efg');
  });

  test('Test 2 repeat', () => {
    expect(caesarCipher('abc', 2)).toMatch('cde');
  });


// Testear lowercase y eso