import length from './length';
import slice from './slice';
import head from './head';
import prop from './prop';
import isNil from './isNil';
import isArray from './isArray';
import isNumber from './isNumber';
import has from './has';
import assoc from './assoc';

const assocPath = (path, value, obj) => {
  if (length(path) < 1) return value;

  const idx = head(path);
  const nextPath = slice(1, Infinity, path);
  let val = value;

  if (length(path) > 0) {
    const nextObj =
      !isNil(obj) && has(idx, obj) // eslint-disable-line no-nested-ternary
        ? prop(idx, obj)
        : isNumber(path[1]) ? [] : {};

    val = assocPath(nextPath, val, nextObj);
  }

  if (isNumber(idx) && isArray(obj)) {
    const arr = [...obj];
    arr[idx] = val;
    return arr;
  }

  return assoc(idx, val, obj);
};

export default assocPath;
