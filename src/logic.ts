// logic.ts

export function splitString(inputString: string): string {
    return inputString.replace('_', ' ');
}



export function isLeapYear(year: number): boolean {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    return false;
}

// logic.ts

// logic.ts

export function secretHandshake(number: number): string[] {
    const binaryString = (number >>> 0).toString(2); // Convert number to binary string
    const actions: string[] = [];

    // Pad binary string with leading zeros if necessary to ensure it has 5 digits
    const paddedBinaryStr = binaryString.padStart(5, '0');

    // Iterate over the binary digits
    for (let i = paddedBinaryStr.length - 1; i >= 0; i--) {
        if (paddedBinaryStr[i] === '1') {
            switch (i) {
                case 4:
                    actions.push('wink');
                    break;
                case 3:
                    actions.push('double blink');
                    break;
                case 2:
                    actions.push('close your eyes');
                    break;
                case 1:
                    actions.push('jump');
                    break;
                case 0:
                    actions.reverse(); // Reverse the order of actions
                    break;
                default:
                    break;
            }
        }
    }

    return actions;
}
