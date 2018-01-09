import { nth } from '../';

describe('Core.nth', () => {
  const list = ['foo', 'bar', 'baz'];

  test('accepts positive offsets', () => {
    expect(nth(0, list)).toEqual('foo');
    expect(nth(1, list)).toEqual('bar');
    expect(nth(2, list)).toEqual('baz');
    expect(nth(3, list)).toEqual(undefined);

    expect(nth(0, 'abc')).toEqual('a');
    expect(nth(1, 'abc')).toEqual('b');
    expect(nth(2, 'abc')).toEqual('c');
    expect(nth(3, 'abc')).toEqual('');
  });

  test('accepts negative offsets', () => {
    expect(nth(-1, list)).toEqual('baz');
    expect(nth(-2, list)).toEqual('bar');
    expect(nth(-3, list)).toEqual('foo');
    expect(nth(-4, list)).toEqual(undefined);

    expect(nth(-1, 'abc')).toEqual('c');
    expect(nth(-2, 'abc')).toEqual('b');
    expect(nth(-3, 'abc')).toEqual('a');
    expect(nth(-4, 'abc')).toEqual('');
  });

  test('throws if applied to null or undefined', () => {
    expect(() => nth(0, null)).toThrow(TypeError);
    expect(() => nth(0, undefined)).toThrow(TypeError);
  });
});
