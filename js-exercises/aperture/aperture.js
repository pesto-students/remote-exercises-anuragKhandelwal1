function aperture(transformer, list) {

    if (list.length < 0 || typeof list !== 'object')
        throw TypeError('List should be an array');

    if (!transformer || typeof transformer !== 'number')
        throw TypeError('Transformer should be a number');

    if (transformer > list.length)
        return [];

    const transformedList = [];
    for (let i = 0; i <= list.length - transformer; i++) {
        let tempList = Object.assign([], list);
        transformedList.push(tempList.splice(i, transformer));
    }
    return transformedList;
}

export { aperture };
