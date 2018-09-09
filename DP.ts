const perimeter = (n: number): number => {
    let length = [1, 1];
    for (let i = 2; i <= n; i ++) {
        length[i] = length[i - 1] + length[i - 2];
    }
    return length.reduce((a, b) => a + b, 0) * 4;
};
