import test from 'ava';
import isArray from '../isArray';

test('Core.isArray', t => {
  const should = 'Should deterimine if an instance is array or not';

  t.truthy(isArray([]), should);
  t.truthy(isArray([1, 2, 3]), should);
  t.falsy(isArray({ foo: 'bar' }), should);
  t.falsy(isArray('baz'), should);
  t.falsy(isArray(null), should);
  t.falsy(isArray(undefined), should);
});
