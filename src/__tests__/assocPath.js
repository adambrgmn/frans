import assocPath from '../assocPath';

test('Core.assocPath', () => {
  const origin = { a: 1, b: 2 };
  const result = assocPath(['a'], 2, origin);
  expect(result).toEqual({ a: 2, b: 2 });
  expect(result).not.toBe(origin);

  expect(assocPath(['a', 0], 1, { a: [0] })).toEqual({ a: [1] });
  expect(assocPath(['a', 'b', 'c'], 'hidden', {})).toEqual({
    a: { b: { c: 'hidden' } },
  });
});
