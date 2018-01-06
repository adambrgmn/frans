export default (predicateList, x) => {
  const { length } = predicateList;
  let i = 0;
  let ret = false;

  while (!ret) {
    ret = predicateList[i](x);
    i += 1;

    if (i >= length) break;
  }

  return ret;
};
