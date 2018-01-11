import last from './last';

const addIndex = addTo => (origFn, ...args) => {
  let idx = 0;
  const list = last(args);
  const newFn = (...args2) => {
    const result = origFn(...args2, idx, list);
    idx += 1;
    return result;
  };

  return addTo(newFn, ...args);
};

export { addIndex as default };
