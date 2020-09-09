import { length } from './length';

const reduceRight = (fn, init, arr) => {
  let accumulator = init;
  const len = length(arr);
  let idx = len - 1;

  while (idx >= 0) {
    accumulator = fn(accumulator, arr[idx]);
    idx--;
  }

  return accumulator;
};

export { reduceRight };
