/* eslint-disable no-restricted-syntax, guard-for-in */

const dissoc = (key, obj) => {
  const newObj = {};
  for (const p in obj) newObj[p] = obj[p];
  delete newObj[key];
  return newObj;
};

export { dissoc as default };
