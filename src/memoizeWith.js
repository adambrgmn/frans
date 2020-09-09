/* eslint-disable no-underscore-dangle */
import { createCache as _createCache } from './internal/createCache';

const memoizeWith = (keyFn, createCache = _createCache) => (fn) => {
  const { has, set, get } = createCache();

  return (...args) => {
    const key = keyFn(...args);

    if (!has(key)) {
      const val = fn(...args);
      set(key, val);
      return val;
    }

    return get(key);
  };
};

export { memoizeWith };
