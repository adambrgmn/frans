import { slice } from './slice';
import { concat } from './concat';
import { length } from './length';

const adjust = (i, fn, list) => {
  const arrLength = length(list);
  if (i >= arrLength || i < -arrLength) return list;

  const arr = slice(0, Infinity, list);

  const idx = i < 0 ? arrLength + i : i;
  const newArr = concat([], arr);
  newArr[idx] = fn(newArr[idx]);

  return newArr;
};

export { adjust };
