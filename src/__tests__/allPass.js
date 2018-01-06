import allPass from '../allPass';

test('Core.allPass', () => {
  expect(allPass([() => true, () => true], 'foo')).toBeTruthy();
  expect(allPass([() => true, () => false], 'foo')).toBeFalsy();
  expect(allPass([() => false, () => false], 'foo')).toBeFalsy();
});
