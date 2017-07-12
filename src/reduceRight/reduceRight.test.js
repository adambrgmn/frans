import test from 'ava';
import reduceRight from '../reduceRight';

test('Core.reduceRight', t => {
  const should =
    'Should apply a function against a accumulator and each value of an array and reduce it into a single value, from the right';

  {
    const actual = reduceRight((x, y) => x.concat(y), [])([1, 2, 3, 4]);
    const expected = [4, 3, 2, 1];

    t.deepEqual(actual, expected, should);
  }
});
