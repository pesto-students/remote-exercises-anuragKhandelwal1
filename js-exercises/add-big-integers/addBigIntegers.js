function addBigIntegers(string) {
    const arrayOfstrings = string.split('\n');
    let sumString = '';
    for (const string of arrayOfstrings) {
        sumString = addTwoIntergerStrings(sumString, string);
    }
    return sumString;
}


function addTwoIntergerStrings(sum, integerString) {
    let sumString = '';
    const loopTill = sum.length > integerString.length ? sum.length : integerString.length;
    const reverseIntegerString = integerString.split('').reverse().join('');
    const reverseSumString = sum.split('').reverse().join('');
    if (reverseSumString == '') {
        return reverseIntegerString.split('').reverse().join('');
    }

    let carry = '0';
    for (let i = 0; i < loopTill; i++) {
        let currentSum = 0;
        currentSum = Number(reverseSumString[i] || '0') + Number(reverseIntegerString[i] || 0) + Number(carry);
        if (i == loopTill - 1) {
            sumString += currentSum.toString().split('').reverse().join('');
        } else {
            sumString += currentSum % 10;
            carry = currentSum < 10 ? 0 : Math.floor(currentSum / 10);
        }
    }

    return sumString.split('').reverse().join('');
}


export { addBigIntegers };