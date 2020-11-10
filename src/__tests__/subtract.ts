import { subtract } from '../subtract';

describe('Core.subtract', () => {
  test('Subtracts the second argument from the first', () => {
    expect(subtract(10, 8)).toBe(2);
  });
});
