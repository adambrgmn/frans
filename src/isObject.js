import is from './is';
import isArray from './isArray';

export default x => is('object', x) && !isArray(x) && x !== null;
