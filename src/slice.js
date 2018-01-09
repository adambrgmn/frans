import isString from './isString';

export default (start, end, arr) => {
  if (isString(arr)) return String.prototype.slice.call(arr, start, end);
  return Array.prototype.slice.call(arr, start, end);
};
