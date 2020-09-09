import { split } from '../split';

describe('Core.split', () => {
  test('split a string into an array', () => {
    expect(split('', 'hello')).toEqual(['h', 'e', 'l', 'l', 'o']);
    expect(split('ll', 'hello')).toEqual(['he', 'o']);
  });
});
