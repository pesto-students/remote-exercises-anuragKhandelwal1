

const equal = (str1, str2) => {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        throw TypeError('Parameters should be of type String');
    }
    return str1.normalize() === str2.normalize();
}

const reverse = (str) => {
    if (typeof str != 'string') {
        throw TypeError('Parameter should be of type String');
    }

    let charCodeArray = [];
    let reverseString = '';
    [...str].forEach((char, index) => {
        charCodeArray.push(str.codePointAt(index));
    });

    charCodeArray.reverse().forEach(codePoint => {
        reverseString += String.fromCodePoint(codePoint)
    })

    return reverseString;
}  // Unable to handle surrogate pair


export {
    reverse, equal
}
