import { is } from '../is';

export const isArray = (arg: any | any[]): arg is any[] => is('Array', arg);
