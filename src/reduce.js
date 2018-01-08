import length from './length';

export default (fn, init, arr) => {
  let l = init;
  for (let i = 0; i < length(arr); i++) l = fn(l, arr[i]);
  return l;
};
