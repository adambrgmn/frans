import reduce from './reduce';
import prop from './prop';
import assoc from './assoc';

const countBy = (fn, list) =>
  reduce(
    (acc, item) => {
      const key = fn(item);
      const existingKey = prop(key, acc);
      return assoc(key, existingKey ? existingKey + 1 : 1, acc);
    },
    {},
    list,
  );

export { countBy as default };
