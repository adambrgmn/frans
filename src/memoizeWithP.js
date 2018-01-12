import has from './has';
import prop from './prop';

const memoizeWithP = keyFn => asyncFn => {
  const cache = {};
  const isCached = key => has(key, cache);
  const updateCache = (key, val) => {
    cache[key] = val;
  };
  const getKey = key => new Promise(resolve => resolve(prop(key, cache)));

  return (...args) => {
    const key = keyFn(...args);
    if (!isCached(key)) {
      return asyncFn(...args).then(val => {
        updateCache(key, val);
        return val;
      });
    }

    return getKey(key);
  };
};

export { memoizeWithP as default };
