/* eslint-disable no-underscore-dangle */

export const _isArray = arg =>
  Object.prototype.toString.call(arg) === '[object Array]';

export default Array.isArray || _isArray;
