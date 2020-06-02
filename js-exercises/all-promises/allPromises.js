const allPromises = promises => {

    return new Promise((resolve, reject) => {
        const resolvedValues = [];
        let resolvedCount = 0;
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(resolvedValue => {
                    resolvedValues[index] = resolvedValue;
                    resolvedCount++;

                    if (resolvedCount === promises.length) {
                        resolve(resolvedValues);
                    }
                }, (rejectedValue) => {
                    reject(rejectedValue);
                });
        });
    });
};

export { allPromises };
