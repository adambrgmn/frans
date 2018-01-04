import filter from '../filter';

test('Core.filter', () => {
  const actual = filter(el => el.includes('oo'))(['foo', 'fool', 'far']);
  const expected = ['foo', 'fool'];

  expect(actual).toEqual(expected);
});
