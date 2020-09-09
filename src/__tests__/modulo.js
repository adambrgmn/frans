import { modulo } from '../modulo';

describe('Core.modulo', () => {
  test('Divide the a by b and return the remainder', () => {
    expect(modulo(10, 2)).toBe(10 % 2);
    expect(modulo(17, 3)).toBe(17 % 3);
  });
});
