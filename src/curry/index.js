// @flow

export default (fn: (...a: Array<any>) => any) => {
  const totalArgs = fn.length;

  const curried = (...partialArgs: Array<any>) => (...args: Array<any>) => {
    if (partialArgs.length + args.length >= totalArgs)
      return fn(...partialArgs, ...args);

    return curried(...partialArgs, ...args);
  };

  return curried();
};
