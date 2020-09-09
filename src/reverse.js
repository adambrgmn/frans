/* eslint-disable no-underscore-dangle */
import { isString } from './isString';

const _reverseString = (str) => {
  let ret = '';
  for (let i = str.length - 1; i >= 0; i--) ret += str[i];
  return ret;
};

const reverse = (list) => {
  if (isString(list)) return _reverseString(list);
  return list.reverse();
};

export { reverse, _reverseString };
