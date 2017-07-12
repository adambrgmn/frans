// @flow

export default (prop: string) => (obj: { [key: string]: any }): any =>
  obj[prop];
