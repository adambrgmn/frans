import isString from './isString';

const slice = (start, end, arr) => {
  if (isString(arr)) return String.prototype.slice.call(arr, start, end);
  return Array.prototype.slice.call(arr, start, end);
};

export { slice as default };
