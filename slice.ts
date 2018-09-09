const list = [1, 2, 3, 4, 5];
console.log(list);

console.log(list.slice(1));
console.log(list);
console.log(list.slice(0, -1));

export const removeChar = (str: string): string => str.slice(1, -1);