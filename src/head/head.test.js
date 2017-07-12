import test from 'ava';
import head from '../head';

test('Core.head', t => {
  const should = 'Should return the first element in an array';
  const actual = head([1, 2, 3, 4]);
  const expected = 1;

  t.is(actual, expected, should);
});
