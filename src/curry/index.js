export default fn => {
  const totalArgs = fn.length;

  const curried = (...partialArgs) => (...args) => {
    if (partialArgs.length + args.length >= totalArgs)
      return fn(...partialArgs, ...args);

    return curried(...partialArgs, ...args);
  };

  return curried();
};
