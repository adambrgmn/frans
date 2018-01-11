/* eslint-disable no-nested-ternary */

const comparator = fn => (a, b) => (fn(a, b) ? -1 : fn(b, a) ? 1 : 0);

export { comparator as default };
