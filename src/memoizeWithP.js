/* eslint-disable no-underscore-dangle */
import _createCache from './internal/createCache';

const memoizeWithP = (keyFn, createCache = _createCache) => asyncFn => {
  const { has, set, get } = createCache();

  return (...args) => {
    const key = keyFn(...args);
    if (!has(key)) {
      return asyncFn(...args).then(val => {
        set(key, val);
        return val;
      });
    }

    return Promise.resolve(get(key));
  };
};

export { memoizeWithP as default };
