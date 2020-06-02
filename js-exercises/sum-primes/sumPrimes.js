function sumPrimes(number) {
    let sum = 0;
    if (typeof number !== 'number') {
        throw new TypeError('Parameter should be of type Number');
    }
    if (number === 0 || number === 1)
        return 0;
    for (let i = 2; i <= number; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

function isPrime(number) {
    const sqrt = Math.sqrt(number)
    for (let i = 2; i <= sqrt; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

export {
    sumPrimes,
};
