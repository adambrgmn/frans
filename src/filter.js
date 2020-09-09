import { reduce } from './reduce';
import { append } from './append';
import { isObject } from './isObject';
import { prop } from './prop';
import { assoc } from './assoc';
import { keys } from './keys';

const filterArray = (fn, arr) =>
  reduce((a, e) => (fn(e) ? append(e, a) : a), [], arr);

const filterObj = (fn, obj) =>
  reduce(
    (a, k) => {
      const val = prop(k, obj);
      return fn(val) ? assoc(k, val, a) : a;
    },
    {},
    keys(obj),
  );

const filter = (fn, arr) => {
  if (isObject(arr)) return filterObj(fn, arr);
  return filterArray(fn, arr);
};

export { filter };
