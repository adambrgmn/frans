import { reverse } from '../';

describe('Core.reverse', () => {
  test('reverses arrays', () => {
    expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
  });

  test('reverses strings', () => {
    expect(reverse('123')).toBe('321');
  });
});
