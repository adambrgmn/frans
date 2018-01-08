import { last } from '../';

test('Core.last', () => {
  {
    const actual = last([1, 2, 3, 4]);
    const expected = 4;

    expect(actual).toBe(expected);
  }

  {
    const actual = last('abcd');
    const expected = 'd';

    expect(actual).toBe(expected);
  }
});
