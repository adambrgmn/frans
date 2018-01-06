import isArray from './isArray';

export default (a, b) => {
  const isString = x => typeof x === 'string';

  if ((isArray(a) && isArray(b)) || (isString(a) && isString(b))) {
    return a.concat(b);
  }

  throw new TypeError('Both arguments must be of same type');
};
