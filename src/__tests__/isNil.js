import { isNil } from '../';

test('Core.isNil', () => {
  expect(isNil(null)).toBeTruthy();
  expect(isNil(undefined)).toBeTruthy();
  expect(isNil(() => null)).toBeFalsy();
  expect(isNil({})).toBeFalsy();
  expect(isNil({ foo: 'bar' })).toBeFalsy();
  expect(isNil([])).toBeFalsy();
  expect(isNil('a')).toBeFalsy();
  expect(isNil(1)).toBeFalsy();
});
