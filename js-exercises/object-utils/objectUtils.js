// your implementation

function map(object, cb) {
    return Object.fromEntries(Object.entries(object).map(cb));
}

function filter(object, cb) {
    return Object.fromEntries(Object.entries(object).filter(cb));
}

function invert(object) {
    return Object.fromEntries(Object.entries(object).map(([key, value]) => [value, key]));
}

function merge(...args) {
    return Object.assign({}, ...args);
}

function all(array, callback) {
    return array.every(callback);
}
function some(array, callback) {
    return array.some(callback);
}


export {
    map,
    filter,
    invert,
    merge,
    all,
    some,
};
