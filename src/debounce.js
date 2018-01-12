import isNil from './isNil';

const debounce = (fn, wait) => {
  const undef = '@@undefined';

  let timeout = null;
  let cachedArgs = undef;

  const clear = () => {
    if (!isNil(timeout)) {
      clearTimeout(timeout);
      cachedArgs = undef;
    }
  };

  const flush = () => {
    if (!isNil(timeout) && cachedArgs !== undef) {
      fn(...cachedArgs);
      clearTimeout(timeout);
      cachedArgs = undef;
    }
  };

  const debounced = (...args) => {
    cachedArgs = args;

    if (isNil(timeout)) {
      timeout = setTimeout(() => {
        fn(...cachedArgs);
        timeout = null;
        cachedArgs = undef;
      }, wait);
    }
  };

  Object.defineProperties(debounced, {
    clear: { value: clear },
    flush: { value: flush },
  });

  return debounced;
};

export { debounce as default };
