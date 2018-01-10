const allPass = (predicateList, ...el) => {
  const { length } = predicateList;
  let i = 0;
  let ret = true;

  while (ret) {
    if (i >= length) break;

    ret = predicateList[i](...el);
    i += 1;
  }

  return ret;
};

export { allPass as default };
