const anyPass = (predicateList, ...el) => {
  const { length } = predicateList;
  let i = 0;
  let ret = false;

  while (!ret) {
    if (i >= length) break;

    ret = predicateList[i](...el);
    i += 1;
  }

  return ret;
};

export { anyPass as default };
