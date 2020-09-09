import { reduce } from './reduce';
import { isNil } from './isNil';

const path = (p, obj) =>
  reduce(
    (acc, key) => {
      if (isNil(acc)) return undefined;
      return acc[key];
    },
    obj,
    p,
  );

export { path };
