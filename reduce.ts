const findOdd = (nums: number[]) => {
    return nums.reduce((a, b) => a^b, 0)
};

const positiveSum = (arr: number[]): number => {
    return arr.filter(x => x > 0).reduce((a, b) => a + b, 0);
};

const sumArray = (array: number[]): number => {
    if (!array) return 0;
    const max: number = array.reduce((a, b) => a > b ? a : b, -9999999999999);
    const min: number = array.reduce((a, b) => a < b ? a : b, 9999999999999);
    const sum: number = array.reduce((a, b) => a + b, 0);
    return array.length === 1 ? 0 : sum - max - min;
};

const minDistance = (n: number): number => {
    return [...Array(Math.floor(Math.sqrt(n)) + 1).keys()]
        .map(x => x + 1)
        .filter(x => n % x == 0)
        .reduce((min, x, i, factors) => i > 0 ? Math.min(min, x - factors[i - 1]) : n - 1, n - 1);
};