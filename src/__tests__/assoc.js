import assoc from '../assoc';

test('Core.assoc', () => {
  expect(assoc('foo', 'bar', {})).toEqual({ foo: 'bar' });
  expect(assoc('foo', 'bar', { foo: 'baz' })).toEqual({ foo: 'bar' });
});