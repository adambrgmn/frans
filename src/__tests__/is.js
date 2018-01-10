import is from '../is';

describe('Core.is', () => {
  test('matches a values type with typeof', () => {
    expect(is('String', 'abc')).toBeTruthy();
    expect(is('Number', 1)).toBeTruthy();
    expect(is('Object', {})).toBeTruthy();
    expect(is('Array', [])).toBeTruthy();
  });
});
