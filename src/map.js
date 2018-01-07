import reduce from './reduce';

export default (fn, arr) => reduce((acc, curr) => [...acc, fn(curr)], [], arr);
