const capitalize = require('./capitalize');

test('With a name', () => {
    expect(capitalize('george')).toMatch('George');
  });

test('With a name 2', () => {
    expect(capitalize('jenny')).toMatch('Jenny');
  });

test('More than one word', () => {
    expect(capitalize('i like apples')).toMatch('I like apples');
  });

