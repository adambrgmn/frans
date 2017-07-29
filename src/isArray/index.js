// @flow

const isArray = (arg: any): boolean =>
  Object.prototype.toString.call(arg) === '[object Array]';

export default Array.isArray || isArray;
