
function lastIndexOf(...args) {
    if (args[1].indexOf(args[0]) === -1) {
        return -1;
    } else {
        const firstIndex = args[1].reverse().indexOf(args[0]);
        return args[1].length - 1 - firstIndex;
    }

}

export {
    lastIndexOf,
};
