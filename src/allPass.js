export default (predicateList, x) => {
  const { length } = predicateList;
  let i = 0;
  let ret = true;

  while (ret) {
    ret = predicateList[i](x);
    i += 1;

    if (i >= length) break;
  }

  return ret;
};
