import { keys } from '../keys';
import { reduce } from '../reduce';
import { append } from '../append';
import { prop } from '../prop';

export const values = <V = unknown>(obj: Record<string, V>): V[] => {
  const props = keys(obj);
  return reduce(
    (acc: V[], key: string) => append(prop(key, obj), acc),
    [],
    props,
  );
};
