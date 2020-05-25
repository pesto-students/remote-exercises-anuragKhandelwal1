function chunkArrayInGroups(array, chunkSize) {
    const chunks = [];
    const splitCount = array.length % chunkSize === 0 ?
        Math.floor(array.length / chunkSize) : Math.floor(array.length / chunkSize) + 1;
    let initial = 0;
    let final = 1;
    for (let i = 1; i <= splitCount; i++) {
        final = i * chunkSize;
        chunks.push(array.slice(initial, final));
        initial = final;
    }
    return chunks;
}


export {
    chunkArrayInGroups,
};
