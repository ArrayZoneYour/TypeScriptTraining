const hexHash = (code: string): number => {
    return [...code].map(x => Number(x.charCodeAt(0).toString(16).replace(/[a-f]/g, '')))
        .reduce((a, b) => a + Math.floor(b / 10) + b % 10, 0)
};