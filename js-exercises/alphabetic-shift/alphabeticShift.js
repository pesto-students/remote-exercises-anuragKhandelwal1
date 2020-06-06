const alphabeticShift = input => {

    if (typeof input !== 'string')
        throw TypeError('Expected input of type string');

    if (input === '')
        return '';

    const splittedArr = input.split('');
    splittedArr.forEach((char, index, arr) => {
        if (char.charCodeAt(0) === 122) {
            arr[index] === 'a';
        } else if (char.charCodeAt(0) === 90) {
            arr[index] === 'A';
        } else {
            arr[index] = String.fromCharCode(char.charCodeAt(0) + 1);
        }
    });

    return splittedArr.join('');
};

export { alphabeticShift };
