import isNil from './isNil';
import isNumber from './isNumber';

export default x => (!isNil(x) && isNumber(x.length) ? x.length : NaN);
