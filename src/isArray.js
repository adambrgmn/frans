/* eslint-disable no-underscore-dangle */

const _isArray = arg =>
  Object.prototype.toString.call(arg) === '[object Array]';

const isArray = Array.isArray || _isArray;

export { isArray as default, _isArray };
