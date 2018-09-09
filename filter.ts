const inArray = (a1: string[], a2: string[]): string[] => {
    return a1.filter(x => a2.join().indexOf(x) !== -1).sort()
};