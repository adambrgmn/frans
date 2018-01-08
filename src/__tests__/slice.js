import { slice } from '../';

test('Core.slice', () => {
  {
    const actual = slice(1, 3, [1, 2, 3, 4, 5]);
    const expected = [2, 3];

    expect(actual).toEqual(expected);
  }

  {
    const actual = slice(1, Infinity, [1, 2, 3, 4, 5]);
    const expected = [2, 3, 4, 5];

    expect(actual).toEqual(expected);
  }

  {
    const actual = slice(1, Infinity, [1, 2, 3, 4, 5]);
    const expected = [2, 3, 4, 5];

    expect(actual).toEqual(expected);
  }

  {
    const actual = slice(-1, Infinity, [1, 2, 3, 4, 5]);
    const expected = [5];

    expect(actual).toEqual(expected);
  }

  {
    const actual = slice(-2, -1, [1, 2, 3, 4, 5]);
    const expected = [4];

    expect(actual).toEqual(expected);
  }
});
