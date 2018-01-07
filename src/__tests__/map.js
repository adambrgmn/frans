import map from '../map';

test('Core.map', () => {
  const actual = map(n => n ** 2, [1, 2, 3, 4]);
  const expected = [1, 4, 9, 16];

  expect(actual).toEqual(expected);
});
