import F from '../F';

test('Core.T', () => {
  expect(typeof F).toBe('function');
  expect(F()).toBeFalsy();
  expect(F(true)).toBeFalsy();
  expect(F(1, 2, 3)).toBeFalsy();
});
