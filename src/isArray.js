import { isArray as _isArray } from './internal/isArray';

const isArray = Array.isArray || _isArray;
export { isArray };
