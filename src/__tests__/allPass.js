import allPass from '../allPass';

test('Core.allPass', () => {
  expect(allPass([() => true, () => true], 'foo')).toBeTruthy();
  expect(allPass([() => true, () => false], 'foo')).toBeFalsy();
  expect(allPass([() => false, () => false], 'foo')).toBeFalsy();
  expect(allPass([x => x > 0, x => x < 10], 5)).toBeTruthy();
  expect(allPass([(x, y) => x === y], 'foo', 'foo')).toBeTruthy();
});
