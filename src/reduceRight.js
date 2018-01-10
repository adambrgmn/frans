import length from './length';

const reduceRight = (fn, init, arr) => {
  let l = init;
  for (let i = length(arr) - 1; i >= 0; i--) l = fn(l, arr[i]);
  return l;
};

export { reduceRight as default };
