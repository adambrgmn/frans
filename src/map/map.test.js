import test from 'ava';
import map from '../map';

test('Core.map', t => {
  const should = 'Should map over an array and apply a function to it';

  {
    const actual = map(n => n ** 2)([1, 2, 3, 4]);
    const expected = [1, 4, 9, 16];

    t.deepEqual(actual, expected, should);
  }
});
