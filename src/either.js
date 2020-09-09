const either = (a, b) => (...x) => a(...x) || b(...x);

export { either };
