export function nthFibonacci(n: number): number {
    const fib = Array.from({length: n}).reduce(
        (acc: Array<number>, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
        []
    );
    return fib[n - 1]
}
