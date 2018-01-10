import reduce from './reduce';

const pipe = (...fns) => x => reduce((acc, fn) => fn(acc), x, fns);

export { pipe as default };
