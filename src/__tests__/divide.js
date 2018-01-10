import divide from '../divide';

describe('Core.divide', () => {
  test('divide two numbers', () => {
    expect(divide(1, 4)).toBe(1 / 4);
    expect(divide(4, 2)).toBe(4 / 2);
  });
});
