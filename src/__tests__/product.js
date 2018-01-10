import product from '../product';

describe('Core.product', () => {
  test('get the product of a list of numbers', () => {
    expect(product([1, 2, 3, 4])).toBe(1 * 2 * 3 * 4);
    expect(product([1, 2, 3, 4, 0])).toBe(0);
    expect(product([0, 1, 2, 3, 4])).toBe(0);
  });
});
