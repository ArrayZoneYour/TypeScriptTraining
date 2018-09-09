export const boolToWord = (bool: boolean): string =>  bool ? 'Yes' : 'No';

const checkCoupon = (enteredCode: string, correctCode: string, currentDate: string, expirationDate: string): boolean => Date.parse(expirationDate) - Date.parse(currentDate) >= 0 && enteredCode === correctCode;

const bouncingBall = (h: number, bounce: number, window: number): number => h > 0 && bounce > 0 && bounce < 1 && window < h ? Math.floor(Math.log(window / h) / Math.log(bounce)) * 2 + 1 : -1;

export const centuryFromYear = (year: number): number => Number((year - 1).toString().slice(0, -2)) + 1;

const bonusTime = (salary:number, bonus:boolean):string => `£${bonus ? salary * 10 : salary}`;

const greet = (name: string): string => `Hello, ${name === "Johnny" ? 'my love' : name}!`;
