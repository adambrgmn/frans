import always from '../always';

test('Core.always', () => {
  const list = [1, 2, 3];
  const getList = always(list);

  expect(typeof getList).toBe('function');
  expect(getList()).toBe(list);
  expect(getList.call([1], 2, 3)).toBe(list);
});
