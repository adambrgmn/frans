const both = (a, b) => (...x) => a(...x) && b(...x);

export { both };
