import length from './length';

export default (fn, init, arr) => {
  let idx = 0;
  let accumulator = init;
  const len = length(arr);

  while (idx < len) {
    accumulator = fn(accumulator, arr[idx]);
    idx += 1;
  }

  return accumulator;
};
