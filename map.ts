const findNeedle = (haystack: any[]):string => {
    return 'found the needle at position ' + haystack.map((val, idx) => val === 'needle' ? String(idx) : '').join('')
};

const interp = (f, l, u, n) => {
    const step = (u - l) / n;
    return [...Array(n).keys()].map(x => Number(Math.floor(f(l + x * step) / 0.01) / 100));
};

const reverseSeq = (n: number): number[] => [...Array(n).keys()].map(x => n - x);
