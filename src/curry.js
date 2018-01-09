import length from './length';

export default fn => {
  const totalArgs = length(fn);

  const curried = (...partialArgs) => (...args) => {
    if (length(partialArgs) + length(args) >= totalArgs) {
      return fn(...partialArgs, ...args);
    }

    return curried(...partialArgs, ...args);
  };

  return curried();
};
