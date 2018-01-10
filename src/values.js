/* eslint-disable no-underscore-dangle */

import append from './append';
import keys from './keys';
import prop from './prop';
import reduce from './reduce';

const _values = obj => {
  const props = keys(obj);
  return reduce((acc, key) => append(prop(key, obj), acc), [], props);
};

const values = obj => {
  if (obj == null || Object(obj) !== obj) return [];

  if (Object.values) return Object.values(obj);
  return _values(obj);
};

export { values as default, _values };
