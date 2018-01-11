const complement = fn => (...x) => !fn(...x);

export { complement as default };
