import { length } from './length';

const nth = (n, arr) => {
  const index = n < 0 ? length(arr) + n : n;
  return typeof arr === 'string' ? arr.charAt(index) : arr[index];
};

export { nth };
