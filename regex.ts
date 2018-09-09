export const countRobots = (str: string[]): string[] => {
    const regex = /[a-zA-Z][|};&#[\]/><()*]{2}0[|};&#[\]/><()*]{2}0[|};&#[\]/><()*]{2}[a-zA-Z]/g;
    const auto_num = str.reduce((a, b) => b.toLowerCase().search(/automatik/g) !== -1 ? a + b.split(regex).length - 1 : a, 0);
    const dancing_num = str.reduce((a, b) => b.toLowerCase().search(/mechanik/g) !== -1 ? a + b.split(regex).length - 1: a, 0);
    return [auto_num.toString() + ' robots functioning automatik', dancing_num + ' robots dancing mechanik'];
};