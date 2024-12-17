export function simpleFibonacci(n: number): Array<number> {
    return Array.from({length: n}).reduce(
        (acc: Array<number>, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
        []
    );
}
