import test from 'ava';
import filter from '../filter';

test('Core.filter', t => {
  const should = 'Should filter out elements of an array';
  const actual = filter(el => el.includes('oo'))(['foo', 'fool', 'far']);
  const expected = ['foo', 'fool'];

  t.deepEqual(actual, expected, should);
});
