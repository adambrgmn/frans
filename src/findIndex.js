import length from './length';

export default (predicateFn, arr) => {
  let i = 0;
  const len = length(arr);
  if (len === 0) return -1;

  while (i < len) {
    const val = arr[i];
    if (predicateFn(val)) return i;
    i += 1;
  }

  return -1;
};
