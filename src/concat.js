import isString from './isString';
import isArray from './isArray';
import join from './join';

export default (a, b) => {
  if (isArray(a) && isArray(b)) {
    return [...a, ...b];
  }

  if (isString(a) && isString(b)) {
    return join([...a, ...b], '');
  }

  throw new TypeError('Both arguments must be of same type');
};
