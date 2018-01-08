import { head } from '../';

test('Core.head', () => {
  {
    const actual = head([1, 2, 3, 4]);
    const expected = 1;

    expect(actual).toBe(expected);
  }

  {
    const actual = head('abcd');
    const expected = 'a';

    expect(actual).toBe(expected);
  }
});
