import pipeP from '../pipeP';

describe('Core.pipeP', () => {
  const splitAsync = string => Promise.resolve(string.split(''));
  const reverseAsync = arr => Promise.resolve(arr.reverse());
  const joinAsync = arr => Promise.resolve(arr.join(''));

  test('creates an async compose chain', async () => {
    const reverseStringAsync = pipeP(splitAsync, reverseAsync, joinAsync);
    expect(await reverseStringAsync('hello')).toBe('olleh');
  });
});
