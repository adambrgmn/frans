import test from 'ava';
import reduce from '../reduce';

test('Core.reduce', t => {
  const should =
    'Should apply a function against a accumulator and ech value of an array and reduce it into a single value';

  {
    const actual = reduce((acc, v) => acc + v, 0)([1, 2, 3, 4]);
    const expected = 1 + 2 + 3 + 4;

    t.is(actual, expected, should);
  }

  {
    const actual = reduce((acc, v) => acc.concat(v), [])([1, 2, 3, 4]);
    const expected = [1, 2, 3, 4];

    t.deepEqual(actual, expected, should);
  }
});
