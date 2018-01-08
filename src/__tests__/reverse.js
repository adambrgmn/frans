import { reverse } from '../';

test('Core.reverse', () => {
  {
    const actual = reverse([1, 2, 3]);
    const expected = [3, 2, 1];

    expect(actual).toEqual(expected);
  }

  {
    const actual = reverse('123');
    const expected = '321';

    expect(actual).toBe(expected);
  }
});
