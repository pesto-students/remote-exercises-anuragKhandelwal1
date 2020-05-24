function diffArrayArranged(firstArr, secondArr) {
    const uniqueArr = [];

    firstArr.forEach(item => { if (!secondArr.includes(item)) { uniqueArr.push(item) } });
    secondArr.forEach(item => { if (!firstArr.includes(item)) { uniqueArr.push(item) } })

    return uniqueArr;
}

export {
    diffArrayArranged as diffArray
};

function diffArrayUnarranged() {
    const uniqueArr = [];
    const biggerArr = firstArr.length > secondArr.length ? firstArr : secondArr;
    const smallerArr = firstArr.length > secondArr.length ? secondArr : firstArr;

    for (const [index, item] of biggerArr.entries()) {
        if (smallerArr.indexOf(item) === -1) {
            uniqueArr.push(item)
        }
        if (smallerArr[index] && biggerArr.indexOf(smallerArr[index]) === -1) {
            uniqueArr.push(smallerArr[index])
        }
    }
    return uniqueArr;
}
