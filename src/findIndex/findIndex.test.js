import test from 'ava';
import findIndex from '../findIndex';

test('Core.findIndex', t => {
  {
    const should = 'Should return the index of an el in an array';
    const actual = findIndex(el => el === 'b')(['a', 'b', 'c']);
    const expected = 1;

    t.is(actual, expected, should);
  }

  {
    const should = 'Should return -1 if no el is found';
    const actual = findIndex(el => el === 'd')(['a', 'b', 'c']);
    const expected = -1;

    t.is(actual, expected, should);
  }
});
