import reduce from './reduce';
import isObject from './isObject';
import assoc from './assoc';
import append from './append';
import prop from './prop';
import keys from './keys';

export default (fn, arr) => {
  if (isObject(arr)) {
    return reduce(
      (acc, key) => assoc(key, fn(prop(key, arr)), acc),
      {},
      keys(arr),
    );
  }

  return reduce((acc, curr) => append(fn(curr), acc), [], arr);
};
