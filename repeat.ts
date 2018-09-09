// 桶排序
const descendingOrder = (n: number): number => {
    const numMap = {};
    Array.from(Array(10).keys()).map(x => numMap[String(x)] = 0);
    const numString = String(n);
    for (const num of numString) {
        numMap[num] += 1
    }
    return Number(Array.from(Array(10).keys())
        .reverse().map(x => String(x)
            .repeat(Number(numMap[x]))).join(''))

};
// 反转镜像
const mirror = (text: string) => {
    const length = text.split(' ').reduce((a, b) => a.length > b.length ? a : b, '').length;
    const content = text.split(' ')
        .map(x => `* ${Array.from(x).reverse().join('') + ' '.repeat(length - x.length)} *`)
        .join('\n');
    return `${'*'.repeat(length + 4)}\n${content}\n${'*'.repeat(length + 4)}`;
};