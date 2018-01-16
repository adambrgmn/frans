const isArray = arg => Object.prototype.toString.call(arg) === '[object Array]';

export default Array.isArray || isArray;
