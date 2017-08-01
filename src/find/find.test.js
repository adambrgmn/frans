import test from 'ava';
import find from '../find';

test('Core.find', t => {
  {
    const should = 'Should find an element in an array based on a predicate';
    const actual = find(n => n === 'b')(['a', 'b', 'c']);
    const expected = 'b';

    t.is(actual, expected, should);
  }

  {
    const should = 'Should return undefined if no element is found';
    const actual = find(n => n === 'd')(['a', 'b', 'c']);
    const expected = undefined;

    t.is(actual, expected, should);
  }
});
