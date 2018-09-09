const getSum = (a: number, b: number) => {
    return [...Array(Math.abs(b - a) + 1).keys()]
        .map(x => x + Math.min(b, a))
        .reduce((a, b) => a + b, 0);
};