import add from '../add';

describe('Core.add', () => {
  test('adds to numbers together', () => {
    expect(add(1, 2)).toBe(3);
  });
});
