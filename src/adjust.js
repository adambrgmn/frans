import concat from './concat';
import length from './length';

export default (fn, i, arr) => {
  const arrLength = length(arr);
  if (i >= arrLength || i < -arrLength) return arr;

  const idx = i < 0 ? arrLength + i : i;
  const list = concat([], arr);
  list[idx] = fn(list[idx]);

  return list;
};
