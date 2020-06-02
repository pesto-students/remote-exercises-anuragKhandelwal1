const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function allSettled(promises) {
    let settledCount = 0;
    return new Promise((resolve, reject) => {
        const settledResults = [];

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(resolvedResult => {
                    settledResults[index] = { status: FULFILLED, value: resolvedResult };
                    settledCount++;
                    if (settledCount === promises.length) {
                        resolve(settledResults);
                    }
                })
                .catch(rejectedError => {
                    settledCount++;
                    settledResults[index] = { status: REJECTED, value: rejectedError };
                    if (settledCount === promises.length) {
                        resolve(settledResults);
                    }
                });
        });
    })
}
export { allSettled };
