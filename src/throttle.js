const throttle = (fn, wait) => {
  let shouldCall = true;
  const updateShouldCall = () => {
    shouldCall = !shouldCall;
  };

  return (...args) => {
    if (shouldCall) {
      updateShouldCall();
      fn(...args);
      setTimeout(updateShouldCall, wait);
    }
  };
};

export { throttle as default };
