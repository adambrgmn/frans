/* eslint-disable no-underscore-dangle */
import is from './is';

const _isArray = arg => is('Array', arg);
const isArray = Array.isArray || _isArray;

export { isArray as default, _isArray };
