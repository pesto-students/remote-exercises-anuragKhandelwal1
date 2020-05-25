const sumEvenArgsUsingReduce = (...args) => {
    const evens = args.filter(arg => { return arg % 2 === 0 });
    if (evens.length === 0) {
        return 0;
    }
    return evens.reduce((acc, val) => {
        return acc + val;
    });
}; //complexity 2n

const sumEvenArgsUsingForEach = (...args) => {
    let sum = 0;
    args.forEach(val => {
        if (val % 2 === 0) {
            sum += val
        }
    });
    return sum;
}  // complexity n

export { sumEvenArgsUsingForEach as sumEvenArgs };
