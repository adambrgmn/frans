/* eslint-disable no-underscore-dangle, no-restricted-syntax */
import has from './has';
import length from './length';
import nth from './nth';

const _keys = (function _keys() {
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

const keys = obj => {
  if (obj == null || Object(obj) !== obj) return [];

  if (Object.keys) return Object.keys(obj);
  return _keys(obj);
};

export { keys as default, _keys };
