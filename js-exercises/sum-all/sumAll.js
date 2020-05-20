function sumAll(numbers) {
    const [a, b] = numbers;

    const large = a > b ? a : b;
    const small = a < b ? a : b;
    let sum = 0;
    for (let i = small; i <= large; i++) {
        sum += i;
    }
    return sum;
}

export {
    sumAll,
};
