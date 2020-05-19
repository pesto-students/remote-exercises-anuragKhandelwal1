function generateArray(n) {
    const arr = [0, 1];
    for (let i = 2; i < n + 1; i += 1) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr.filter(value => value % 2 !== 0 && value < n);
}

function sumFibs(num) {
    const temp = generateArray(num);
    const sum = temp.reduce((a, b) => a + b, 0);
    return sum;
}

export { sumFibs };