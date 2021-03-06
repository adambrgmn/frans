import { map } from '../';
import { values } from '../values';

describe('Core.values', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test("returns an array of the given object's values", () => {
    const obj = {
      a: 100,
      b: [1, 2, 3],
      c: { x: 200, y: 300 },
      d: 'D',
      e: null,
      f: undefined,
    };

    const vs = values(obj).sort();
    const ts = [[1, 2, 3], 100, 'D', { x: 200, y: 300 }, null, undefined];

    expect(vs.length).toBe(ts.length);
    expect(vs[0]).toEqual(ts[0]);
    expect(vs[1]).toBe(ts[1]);
    expect(vs[2]).toBe(ts[2]);
    expect(vs[3]).toEqual(ts[3]);
    expect(vs[4]).toBe(ts[4]);
    expect(vs[5]).toBe(ts[5]);

    expect(values({ hasOwnProperty: false })).toEqual([false]);
  });

  test("does not include the given object's prototype properties", () => {
    class Person {
      constructor(name) {
        this.age = 0;
        this.name = name;
      }

      happyBirthday() {
        this.age += 1;
      }
    }

    const bob = new Person('bob');
    expect(values(bob)).toEqual([0, 'bob']);
  });

  test('returns an empty object for primitives', () => {
    // eslint-disable-next-line no-sparse-arrays
    const result = map(values, [
      null,
      undefined,
      55,
      '',
      true,
      false,
      NaN,
      Infinity,
      ,
      [],
    ]);

    expect(result).toEqual([[], [], [], [], [], [], [], [], [], []]);
  });

  test('falls back to internal _values if Object.values is undefined', () => {
    const nativeValues = Object.values;
    delete Object.values;

    expect(values({ foo: 'bar', bar: 'foo' })).toEqual(['bar', 'foo']);
    Object.values = nativeValues;
  });
});
