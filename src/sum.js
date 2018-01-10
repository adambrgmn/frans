import add from './add';
import reduce from './reduce';

export default list => reduce(add, 0, list);
