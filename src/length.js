import isNil from './isNil';
import isNumber from './isNumber';

const length = x => (!isNil(x) && isNumber(x.length) ? x.length : NaN);

export { length as default };
