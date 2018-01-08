import assoc from './assoc';
import has from './has';
import head from './head';
import isArray from './isArray';
import isNil from './isNil';
import isNumber from './isNumber';
import length from './length';
import prop from './prop';
import slice from './slice';

const assocPath = (path, value, obj) => {
  if (length(path) < 1) return value;

  let val = value;
  const idx = head(path);

  if (length(path) > 1) {
    const nextPath = slice(1, Infinity, path);
    const nextObj =
      !isNil(obj) && has(idx, obj) // eslint-disable-line no-nested-ternary
        ? prop(idx, obj)
        : isNumber(head(nextPath)) ? [] : {};

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
