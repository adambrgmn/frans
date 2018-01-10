import reduce from './reduce';
import isObject from './isObject';
import assoc from './assoc';
import prop from './prop';
import keys from './keys';
import length from './length';

const mapObject = (fn, obj) =>
  reduce((acc, key) => assoc(key, fn(prop(key, obj)), acc), {}, keys(obj));

const map = (fn, arr) => {
  if (isObject(arr)) return mapObject(fn, arr);

  let idx = 0;
  const len = length(arr);
  const result = Array(len);

  while (idx < len) {
    result[idx] = fn(arr[idx]);
    idx += 1;
  }

  return result;
};

export { map as default };
