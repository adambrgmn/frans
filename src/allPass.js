export default (predicateList, ...el) => {
  const { length } = predicateList;
  let i = 0;
  let ret = true;

  while (ret) {
    ret = predicateList[i](...el);
    i += 1;

    if (i >= length) break;
  }

  return ret;
};
