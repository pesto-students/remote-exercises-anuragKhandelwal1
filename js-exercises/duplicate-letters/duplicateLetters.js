
function duplicateLetters(...args) {
    let count = 0;
    args = args.toString();
    let uniqueChars = [...new Set(args)].toString();
    for (let i = 0; i < uniqueChars.length; i++) {
        let currentWordCount = 0;
        for (let j = 0; j < args.length; j++) {
            if (uniqueChars[i] == args[j]) {
                currentWordCount++;
            }
        }
        if (currentWordCount > count) {
            count = currentWordCount;
        }
    }
    return count > 1 ? count : false;
}

export {
    duplicateLetters,
};
