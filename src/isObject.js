import isArray from './isArray';

export default x => typeof x === 'object' && !isArray(x) && x !== null;
