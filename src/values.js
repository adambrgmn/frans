/* eslint-disable no-underscore-dangle */

import append from './append';
import keys from './keys';
import prop from './prop';
import reduce from './reduce';

export const _values = obj =>
  reduce((acc, key) => append(prop(key, obj), acc), [], keys(obj));

export default Object.valuse || _values;
