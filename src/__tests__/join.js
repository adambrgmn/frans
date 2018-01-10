import join from '../join';

describe('Core.join', () => {
  test('concatenates an arrays elements into a string', () => {
    expect(join('', ['a', 'b', 'c'])).toBe('abc');
    expect(join(' - ', [1, 2, 3])).toBe('1 - 2 - 3');
  });
});
