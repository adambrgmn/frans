import { has } from '../';

test('Core.has', () => {
  expect(has('foo', { foo: 1 })).toBeTruthy();
  expect(has('foo', { foo: undefined })).toBeTruthy();
  expect(has('foo', {})).toBeFalsy();
});
