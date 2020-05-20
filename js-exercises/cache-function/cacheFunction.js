
function cacheFunction(callback) {
    const cache = {};
    return (...args) => {
        if (callback in cache) {
            return cache[callback];
        } else {
            cache[callback] = callback(...args);
            return callback(...args);
        }
    }

}

export {
    cacheFunction,
};
