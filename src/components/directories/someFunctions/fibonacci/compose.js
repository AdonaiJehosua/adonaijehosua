function compose(fn1, ...funcs) {
    funcs.reduce((acc, val) => acc(val), fn1)
}

export const test = (n) =>
    Array.from({ length: n }).reduce(
      (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
      []
    );