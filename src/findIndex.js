export default (predicateFn, arr) => {
  let i = 0;
  const len = arr.length;

  while (i < len) {
    const val = arr[i];
    if (predicateFn(val)) return i;
    i += 1;
  }

  return -1;
};
