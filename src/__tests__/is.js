import { is } from '../';

describe('Core.is', () => {
  test('matches a values type with typeof', () => {
    expect(is('string', 'abc')).toBeTruthy();
    expect(is('number', 1)).toBeTruthy();
    expect(is('object', {})).toBeTruthy();
    expect(is('object', [])).toBeTruthy();
  });
});
