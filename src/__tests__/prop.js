import { prop } from '../';

describe('Core.prop', () => {
  test('fetches the appropriate prop from an object', () => {
    expect(prop('foo', { foo: 'bar' })).toBe('bar');
    expect(prop('foo', { bar: 'foo' })).toBe(undefined);
    expect(prop(2, ['a', 'b', 'c'])).toBe('c');
  });
});
