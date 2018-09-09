const sortByHeight = (list: number[]): number[] => {
    const sortedList = list.filter(x => x !== -1).sort((a, b) => a - b);
    return list.map(x => x === -1 ? x : sortedList.shift());
};

const orderWeight = (string: string): string => {
    return string.split(' ')
        .sort((a, b) =>
            a.split('').reduce((x, y) => x + Number(y), 0) -
            b.split('').reduce((x, y) => x + Number(y), 0) ||
            (a > b ? 1 : -1)
        )
        .join(' ')
};
