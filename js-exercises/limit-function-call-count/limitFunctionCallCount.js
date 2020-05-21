const limitFunctionCallCount = (callback, allowedCallbackCount) => {
    let count = 1;
    return (...args) => {
        if (count > allowedCallbackCount) {
            return null;
        }
        else {
            count++;
            return callback(...args)
        }
    }
};

export {
    limitFunctionCallCount,
};
