import createCache from '../createCache';

describe('Internal.createCache', () => {
  const cache = createCache();
  test('creates a new cache with has, set and get functions', () => {
    expect(typeof cache.has).toBe('function');
    expect(typeof cache.set).toBe('function');
    expect(typeof cache.get).toBe('function');
  });

  test('stores values which can be retrieved at any time', () => {
    expect(cache.has('foo')).toBeFalsy();
    cache.set('foo', 'bar');
    expect(cache.has('foo')).toBeTruthy();
    expect(cache.get('foo')).toBe('bar');
  });
});
