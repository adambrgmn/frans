/* eslint-disable no-underscore-dangle, no-restricted-syntax */
import isObject from './isObject';
import has from './has';
import length from './length';
import nth from './nth';

export const _keys = (function _keys() {
  const hasDontEnumBug = !Object.prototype.propertyIsEnumerable.call(
    { toString: null },
    'toString',
  );

  const dontEnums = [
    'toString',
    'toLocaleString',
    'valueOf',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'constructor',
  ];

  const dontEnumsLength = length(dontEnums);

  return obj => {
    if (!isObject(obj)) throw new TypeError('Keys called on non-object');

    const result = [];

    for (const prop in obj) {
      if (has(prop, obj)) result.push(prop);
    }

    if (hasDontEnumBug) {
      for (let i = 0; i < dontEnumsLength; i++) {
        const prop = nth(i, dontEnums);
        if (has(prop, obj)) result.push(prop);
      }
    }

    return result;
  };
})();

export default Object.keys || _keys;
