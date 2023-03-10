function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
    // return () => {};
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(
    (a, b) =>
    (...args) =>
    a(b(...args))
  );
}

export default compose