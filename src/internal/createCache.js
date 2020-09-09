/* eslint-disable no-underscore-dangle */
import { has as _has } from '../has';
import { prop as _prop } from '../prop';

const createCache = () => {
  const cache = {};

  const has = (key) => _has(key, cache);
  const get = (key) => _prop(key, cache);
  const set = (key, value) => {
    cache[key] = value;
  };

  return { has, get, set };
};

export { createCache };
