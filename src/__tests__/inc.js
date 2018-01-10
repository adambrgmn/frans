import inc from '../inc';

describe('Core.inc', () => {
  test('increase a number by one', () => {
    expect(inc(1)).toBe(2);
    expect(inc(10)).toBe(11);
    expect(inc(-1)).toBe(0);
  });
});
