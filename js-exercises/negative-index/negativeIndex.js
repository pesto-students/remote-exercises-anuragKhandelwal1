function negativeIndex(targetArray) {
    if (!Array.isArray(targetArray)) {
        throw TypeError('Only arrays are supported');
    }
    const handler = {
        get(target, property) {
            property = Number(property);
            if (isNaN(property)) {
                throw TypeError('Index should be a number');
            }
            if (target[property]) {
                return target[property]
            }
            return target[target.length + property];
        },
        set(target, property, value) {
            property = Number(property);
            if (isNaN(property)) {
                throw TypeError('Index should be a number');
            }
            if (property >= 0) {
                return target[property] = value;
            }
            return target[target.length + property] = value;
        }
    }
    return new Proxy(targetArray, handler);
}



export { negativeIndex };
