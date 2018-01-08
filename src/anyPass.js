export default (predicateList, ...el) => {
  const { length } = predicateList;
  let i = 0;
  let ret = false;

  while (!ret) {
    ret = predicateList[i](...el);
    i += 1;

    if (i >= length) break;
  }

  return ret;
};
