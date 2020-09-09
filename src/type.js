/* eslint-disable no-nested-ternary */

const type = (x) =>
  x === null
    ? 'Null'
    : x === undefined
    ? 'Undefined'
    : Object.prototype.toString.call(x).slice(8, -1);

export { type };
