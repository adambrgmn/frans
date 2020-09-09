import { isString } from './isString';

const reverseString = (str) => {
  let ret = '';
  for (let i = str.length - 1; i >= 0; i--) ret += str[i];
  return ret;
};

const reverse = (list) => {
  if (isString(list)) return reverseString(list);
  return list.reverse();
};

export { reverse };
