import has from './has';
import prop from './prop';

const memoizeWith = keyFn => fn => {
  const cache = {};
  const isCached = key => has(key, cache);
  const getKey = key => prop(key, cache);
  const updateCache = (key, val) => {
    cache[key] = val;
  };

  return (...args) => {
    const key = keyFn(...args);

    if (!isCached(key)) {
      const val = fn(...args);
      updateCache(key, val);
      return val;
    }

    return getKey(key);
  };
};

export { memoizeWith as default };
