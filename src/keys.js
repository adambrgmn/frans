import { keys as _keys } from './internal/keys';

const keys = (obj) => {
  if (obj == null || Object(obj) !== obj) return [];

  if (Object.keys) return Object.keys(obj);
  return _keys(obj);
};

export { keys };
