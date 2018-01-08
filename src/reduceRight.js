import length from './length';

export default (fn, init, arr) => {
  let l = init;
  for (let i = length(arr) - 1; i >= 0; i--) l = fn(l, arr[i]);
  return l;
};
