import prepend from '../prepend';

test('Core.prepend', () => {
  expect(prepend(0, [1, 2, 3])).toEqual([0, 1, 2, 3]);
});
