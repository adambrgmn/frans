import reduce from './reduce';

export default (...fns) => x => reduce((acc, fn) => fn(acc), x, fns);
