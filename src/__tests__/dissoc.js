import { dissoc } from '../dissoc';

describe('Core.dissoc', () => {
  test('copies an object omitting the specified property', () => {
    expect(dissoc('b', { a: 1, b: 2, c: 3 })).toEqual({ a: 1, c: 3 });
    expect(dissoc('d', { a: 1, b: 2, c: 3 })).toEqual({ a: 1, b: 2, c: 3 });
  });

  test('coerces non-string types', () => {
    expect(dissoc(42, { a: 1, b: 2, 42: 3 })).toEqual({ a: 1, b: 2 });
    expect(dissoc(null, { a: 1, b: 2, null: 3 })).toEqual({ a: 1, b: 2 });
    expect(dissoc(undefined, { a: 1, b: 2, undefined: 3 })).toEqual({
      a: 1,
      b: 2,
    });
  });
});
