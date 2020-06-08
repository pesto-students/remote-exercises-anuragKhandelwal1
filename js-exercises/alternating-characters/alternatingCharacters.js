function alternatingCharacters(strArray) {
    const deletionCountArray = [];
    for (let str of strArray) {
        let deletionCount = 0;
        for (let i = 1; i < str.length; i++) {
            if (str[i - 1] === str[i]) {
                deletionCount++;
            }
        }
        deletionCountArray.push(deletionCount);
    }
    return deletionCountArray;
}

export { alternatingCharacters };
