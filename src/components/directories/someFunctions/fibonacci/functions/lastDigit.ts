export function getLastBigFibDigit(n: number): number {
    let first = 0
    let second = 1
    for (let i=1; i < n; i++) {
        const third = (first + second)%10
        first = second%10
        second = third%10
    }
    return first
}
