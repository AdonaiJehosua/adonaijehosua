export const simpleFibonacci = (n: number): Array<number> =>
    Array.from({ length: n }).reduce(
      (acc: Array<number>, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
      []
    );
