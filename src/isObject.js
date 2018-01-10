import is from './is';
import isArray from './isArray';

const isObject = x => is('object', x) && !isArray(x) && x !== null;

export { isObject as default };
