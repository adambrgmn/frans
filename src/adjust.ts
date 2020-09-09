import { slice } from './slice';
import { concat } from './concat';
import { length } from './length';
import { isArray } from './isArray';

export function adjust<T, R>(
  i: number,
  fn: (input: T) => R,
  list: T[] | ArrayLike<T>,
): (T | R)[] {
  const arrLength = length(list);
  if (i >= arrLength || i < -arrLength) {
    return isArray(list)
      ? list
      : ((slice(0, Infinity, list) as unknown) as (T | R)[]);
  }

  const arr = slice(0, Infinity, list);

  const idx = i < 0 ? arrLength + i : i;
  const newArr = concat([], arr) as (T | R)[];
  newArr[idx] = fn(arr[idx]);

  return newArr;
}
