import reduce from './reduce';

export default fn => reduce((a, e) => (fn(e) ? a.concat(e) : a), []);
