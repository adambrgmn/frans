import { values as _values } from './internal/values';

const values = (obj) => {
  if (obj == null || Object(obj) !== obj) return [];

  if (Object.values) return Object.values(obj);
  return _values(obj);
};

export { values };
