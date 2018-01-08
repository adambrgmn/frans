import { nth } from '../';

test('Core.nth', () => {
  {
    const actual = nth(2, [1, 2, 3]);
    const expected = 3;

    expect(actual).toBe(expected);
  }

  {
    const actual = nth(1, 'abc');
    const expected = 'b';

    expect(actual).toBe(expected);
  }

  {
    const actual = nth(-1, [1, 2, 3]);
    const expected = 3;

    expect(actual).toBe(expected);
  }
});
