import { composeP } from '../composeP';

describe('Core.composeP', () => {
  const splitAsync = (string) => Promise.resolve(string.split(''));
  const reverseAsync = (arr) => Promise.resolve(arr.reverse());
  const joinAsync = (arr) => Promise.resolve(arr.join(''));

  test('creates an async compose chain', async () => {
    const reverseStringAsync = composeP(joinAsync, reverseAsync, splitAsync);
    expect(await reverseStringAsync('hello')).toBe('olleh');
  });
});
