import append from '../append';

test('Core.append', () => {
  expect(append('c', ['a', 'b'])).toEqual(['a', 'b', 'c']);
  expect(append(['c'], ['a', 'b'])).toEqual(['a', 'b', ['c']]);
});
