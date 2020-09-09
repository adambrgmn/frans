import { has } from '../has';
import { nth } from '../nth';

export const keys = (() => {
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

  const dontEnumsLength = dontEnums.length;

  return <K extends Record<string, unknown>>(obj: K): (keyof K)[] => {
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
